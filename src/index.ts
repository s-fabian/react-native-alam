import spacing from './spacing';
import display from './display';
import other from './other';
import position from './position';
import font from './font';
import colors from './colors';
import type { Style } from './types';
import { useTheme } from './theme';

const tw = {
  ...colors,
  ...font,
  ...spacing,
  ...display,
  ...position,
  ...other,
} as const;

type Alam = typeof tw;
export type TailwindArgs = {
  [key in keyof Alam]?: Parameters<Alam[key]>[0];
};

type Banned = {
  [key: string]: any;
} & {
  [key in keyof Alam]?: never;
};

type Input<T extends Banned, R> = (props: T) => R;
type Output<T, R> = (props: T & TailwindArgs) => R;

export function alam<T extends Banned, R>(
  component: Input<T, R>
): Output<T, R> {
  return (props) => {
    const colors = useTheme();

    let style: Style = {};
    for (const [key, value] of Object.entries(props)) {
      if (key in tw) {
        style = tw[key](value, style, colors);
        delete props[key];
      }
    }

    return component({
      ...props,
      style: props.style !== undefined ? { ...props.style, ...style } : style,
    });
  };
}

export { Alam } from './components';
export { useTheme, ThemeProvider } from './theme';
