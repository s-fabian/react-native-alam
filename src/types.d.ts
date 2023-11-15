import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { DefaultAlam } from 'react-native-alam';

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

type StringPropertyNames<T> = {
  [K in keyof T]: K extends string ? K : never;
}[keyof T];

type ApplyResponsive<T> = {
  [K in StringPropertyNames<T>]: T[K];
} & {
  [K in StringPropertyNames<T> as Responsive<K>]: T[K];
};

export type ResponsiveUnits = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
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
export type Banned<_> = any;
