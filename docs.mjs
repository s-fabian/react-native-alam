import { readFile, writeFile } from 'node:fs/promises';

const regex =
  /[\s\n]*\/\/-n \w(\w|-)*[\s\n]*\/\/-d (\w).*[\s\n]*(\/\/-i \w+\s*:\s*\w(\w| |\|)*)?[\s\n]*(\/\/-o (\w|\.|\[|\])+:\s*\'?(\w|-| |%|#|\.)+\'?[\s\n]*)+/g;

const tsFiles = {
  'colors.ts': 'Color Utils',
  'display.ts': 'Utils for flex & co',
  'font.ts': 'Utils for texts',
  'other.ts': 'Other Utils',
  'position.ts': 'Position & Size Utils',
  'spacing.ts': 'Utils for margin, padding & co',
};

let readme = '# Attributes for `react-native-alam`';
readme +=
  '\n\nTip: Click the list icon at the to right to search for properties / alams';

for (const fileName in tsFiles) {
  const title = tsFiles[fileName];
  const content = await readFile(`./src/${fileName}`, 'utf8');
  const matches = content.match(regex);

  if (!matches) continue;

  /**
   * @type {{ name: string, desc: string, input: [string, string] | undefined, outputs: [string, string][] }[]}
   */
  const found = [];

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

  readme += '\n\n## ' + title;

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
}

readme += '\n';

await writeFile('ATTR.md', readme, 'utf8');
