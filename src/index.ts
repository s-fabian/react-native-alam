import spacing from './spacing';
import display from './display';
import other from './other';
import position from './position';
import font from './font';
import colors from './colors';
import type { Colors, Style } from './types';
import { useTheme } from './theme';

export const defaultAlam = {
  ...colors,
  ...font,
  ...spacing,
  ...display,
  ...position,
  ...other,
} as const;

export type DefaultAlam = typeof defaultAlam;

export type ExtendedAlam = DefaultAlam &
  Record<string, (arg0: any, style: Style, colors: Colors) => Style>;

export type TailwindArgs<A extends ExtendedAlam = DefaultAlam> = ApplyResponsive<{
  [key in keyof A]?: Parameters<A[key]>[0];
}>;

type StringPropertyNames<T> = {
  [K in keyof T]: K extends string ? K : never
}[keyof T];

type ApplyResponsive<T> = {
  [K in StringPropertyNames<T>]: T[K]
} & {
  [K in StringPropertyNames<T> as Responsive<K>]: T[K]
};
  
type ResponsiveMin<V extends string> = `xs-${V}` | `sm-${V}` | `md-${V}` | `lg-${V}` | `xl-${V}` | `2xl-${V}`;
type ResponsiveMinMax<V extends string> = ResponsiveMin<V> | `min-${ResponsiveMin<V>}`;
type Responsive<V extends string> = ResponsiveMinMax<V> | V

type Banned<_> = {
  [key: string]: any;
} & {
  [key in keyof DefaultAlam]?: never;
};

type Input<T extends Banned<A>, R, A extends ExtendedAlam> = (props: T) => R;
type Output<T, R, A extends ExtendedAlam> = (props: T & TailwindArgs<A>) => R;

export function alam<T extends Banned<A>, R, A extends ExtendedAlam>(
  component: Input<T, R, A>,
  attr: A
): Output<T, R, A>;
export function alam<T extends Banned<DefaultAlam>, R>(
  component: Input<T, R, DefaultAlam>
): Output<T, R, DefaultAlam>;
export function alam<T extends Banned<A>, R, A extends ExtendedAlam>(
  component: Input<T, R, A>,
  attr?: A
): Output<T, R, A> {
  let attributes = attr ?? defaultAlam;

  return (props) => {
    const colors = useTheme();

    let style: Style = {};
    for (const [key, value] of Object.entries(props)) {
      if (key in attributes) {
        style = attributes[key]!(value, style, colors);
        delete props[key];
      }
    }

    return component({
      ...props,
      style: props.style !== undefined ? { ...props.style, ...style } : style,
    });
  };
}

type FunctionType<A extends ExtendedAlam> = <T extends Banned<A>, R>(
  component: Input<T, R, A>
) => Output<T, R, A>;

export function createAlam<A extends ExtendedAlam>(attr: A): FunctionType<A>;
export function createAlam(): FunctionType<DefaultAlam>;
export function createAlam<A extends ExtendedAlam>(attr?: A) {
  return <T extends Banned<A>, R>(component: Input<T, R, A>): Output<T, R, A> =>
    alam(component, attr ?? defaultAlam);
}

export { createAlamComponents, Alam } from './components';
export { useTheme, ThemeProvider } from './theme';
export type { Colors, Style } from './types';
