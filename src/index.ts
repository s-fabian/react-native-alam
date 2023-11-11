import spacing from './spacing';
import display from './display';
import other from './other';
import position from './position';
import font from './font';
import colors from './colors';
import type { Colors, Style } from './types';

const tw = {
  ...colors,
  ...font,
  ...spacing,
  ...display,
  ...position,
  ...other,
} as const;

type Tw = typeof tw;
export type TailwindArgs = {
  [key in keyof Tw]?: Parameters<Tw[key]>[0];
};

type Banned = {
  [key: string]: any;
} & {
  [key in keyof Tw]?: never;
};

type Input<T extends Banned, R> = (props: T) => R;
type Output<T, R> = (props: T & TailwindArgs) => R;

let theme: Colors = {};

export function setTheme(newTheme: Colors) {
  theme = newTheme;
}

export default function tailwindify<T extends Banned, R>(
  component: Input<T, R>
): Output<T, R> {
  return (props) => {
    let style: Style = {};
    for (const [key, value] of Object.entries(props)) {
      if (key in tw) {
        style = tw[key](value, style, theme);
        delete props[key];
      }
    }

    return component({
      ...props,
      style: props.style !== undefined ? { ...props.style, ...style } : style,
    });
  };
}

export { Tw } from './components';
