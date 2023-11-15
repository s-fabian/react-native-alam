import { readdir, readFile, writeFile } from 'node:fs/promises';

const regex =
  /[\s\n]*\/\/-n \w(\w|-)*[\s\n]*\/\/-d (\w).*[\s\n]*(\/\/-i \w+\s*:\s*\w+)?[\s\n]*(\/\/-o (\w|\.|\[|\])+:\s*\'?(\w|-| |%|#|\.)+\'?[\s\n]*)+/g;

const srcDir = './src';
const files = await readdir(srcDir);
const tsFiles = files
  .filter((name) => name.endsWith('.ts'))
  .map((name) => `${srcDir}/${name}`);

/**
 * @type {{ name: string, desc: string, input: [string, string] | undefined, outputs: [string, string][] }[]}
 */
const found = [];

for (const file of tsFiles) {
  const content = await readFile(file, 'utf8');
  const matches = content.match(regex);

  if (!matches) continue;

  for (const match of matches) {
    const lines = match
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    if (lines.length < 3) {
      console.warn('Invalid comment:', match);
    }

    const name = lines
      .splice(0, 1)[0]
      .replace(/^\/\/-n/, '')
      .trim();
    const desc = lines
      .splice(0, 1)[0]
      .replace(/^\/\/-d/, '')
      .trim();
    const maybeInput = lines[0];

    let input;
    if (/^\/\/-i/.test(maybeInput)) {
      input = lines
        .splice(0, 1)[0]
        .replace(/^\/\/-i/, '')
        .trim()
        .split(/:/, 2)
        .map((s) => s.trim());
    }

    const outputs = lines.map((l) =>
      l
        .replace(/^\/\/-o/, '')
        .trim()
        .split(/:/, 2)
        .map((s) => s.trim())
    );

    if (outputs.some((o) => o.length !== 2)) {
      console.warn('Invalid comment output:', match);
    }

    found.push({ name, desc, input, outputs });
  }
}

let readme = '# Attributes for `react-native-alam`';
readme +=
  '\n\nTip: Click the list icon at the to right to search for properties / alams';
readme += '\n\n## List';

for (const { name, desc, input, outputs } of found) {
  const nameFormat = `### ${name}`;
  const descFormat = desc;
  const inputFormat = input ? `\`${input[0]}: ${input[1]}\`` : '';
  const outputFormat =
    `Changes:\n\n\`\`\`js\n{` +
    outputs
      .map(([name, value], i) => {
        return `\n  ${name}: ${value}${i === outputs.length - 1 ? '' : ','}`;
      })
      .join('') +
    '\n}\n```';

  readme += '\n\n' + nameFormat;
  readme += '\n\n' + descFormat;
  readme += inputFormat ? '\n\n' + inputFormat : '';
  readme += '\n\n' + outputFormat;
}

readme += '\n';

await writeFile('ATTR.md', readme, 'utf8');
