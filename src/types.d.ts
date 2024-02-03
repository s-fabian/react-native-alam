import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { DefaultAlam } from '.';

type StyleBase = any;
export type Style = StyleBase | ImageStyle | TextStyle | ViewStyle;
export type Color = string;
export type Colors = Record<Color, string>;

export type { DefaultAlam, Style as StyleHelp };

export type ExtendedAlam = DefaultAlam &
  Record<string, (arg0: any, style: Style, colors: Colors) => Style>;

export type TailwindArgs<A extends ExtendedAlam = DefaultAlam> = Partial<
  ApplyResponsive<{
    [key in keyof A]: Parameters<A[key]>[0] | undefined;
  }>
>;

export type ResponsiveUnits = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type ResponsiveMin<V extends string> = `${ResponsiveUnits}-${V}`;
type ResponsiveMinMax<V extends string> =
  | ResponsiveMin<V>
  | `min-${ResponsiveMin<V>}`;
type Responsive<V extends string> = ResponsiveMinMax<V> | V;

type ApplyResponsive<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K];
} & {
  [K in keyof T as Responsive<K>]: T[K];
};

// type Banned<_> = {
//   [key: string]: any;
// } & {
//   [key in keyof DefaultAlam]?: never;
// };
export type Banned<_> = any;
