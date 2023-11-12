import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type Style = any;
type StyleHelp = Style | ImageStyle | TextStyle | ViewStyle;
type Color = string;
type Colors = Record<Color, string>;

type DefaultAlam = typeof defaultAlam;

type ExtendedAlam = DefaultAlam &
  Record<string, (arg0: any, style: Style, colors: Colors) => Style>;

type TailwindArgs<A extends ExtendedAlam = DefaultAlam> = ApplyResponsive<{
  [key in keyof A]?: Parameters<A[key]>[0];
}>;

type StringPropertyNames<T> = {
  [K in keyof T]: K extends string ? K : never;
}[keyof T];

type ApplyResponsive<T> = {
  [K in StringPropertyNames<T>]: T[K];
} & {
  [K in StringPropertyNames<T> as Responsive<K>]: T[K];
};

type ResponsiveUnits = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type ResponsiveMin<V extends string> = `${ResponsiveUnits}-${V}`;
type ResponsiveMinMax<V extends string> =
  | ResponsiveMin<V>
  | `min-${ResponsiveMin<V>}`;
type Responsive<V extends string> = ResponsiveMinMax<V> | V;

// type Banned<_> = {
//   [key: string]: any;
// } & {
//   [key in keyof DefaultAlam]?: never;
// };
type Banned<_> = any;
