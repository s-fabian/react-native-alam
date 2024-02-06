import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { DefaultAlam, DefaultProps } from '.';

type StyleBase = any;
export type Style = StyleBase | ImageStyle | TextStyle | ViewStyle;
export type Color = string;
export type Colors = Record<Color, string>;

export type { DefaultAlam, Style as StyleHelp };

export type AlamDef = Record<
  string,
  (arg0: any, style: Style, colors: Colors) => Style
>;

export type GetProps<T extends AlamDef> = {
  [key in keyof T]?: Parameters<T[key]>[0] | undefined;
};

type NonUndefined<T> = T extends undefined ? never : T;

export type GetFn<T extends Record<string, unknown>> = {
  [key in keyof T]: (
    arg0: NonUndefined<T[key]>,
    style: Style,
    colors: Colors
  ) => Style;
};

export type ResponsiveUnits = 'sm' | 'md' | 'lg' | 'xl';

type ResponsiveMin<V extends string> = `${ResponsiveUnits}-${V}`;
type ResponsiveMinMax<V extends string> =
  | ResponsiveMin<V>
  | `min-${ResponsiveMin<V>}`;

type Responsive<V extends string> = ResponsiveMinMax<V> | V;

export type MakeResponsive<T extends Record<string, unknown>> = {
  [K in keyof T as Responsive<K>]: T[K];
};

export type Finish<A extends Record<string, unknown>> = Partial<A> &
  DefaultProps &
  MakeResponsive<Partial<A> & DefaultProps>;

export type Input<FunctionProps, ReturnType> = (
  props: FunctionProps
) => ReturnType;
export type Output<
  FunctionProps,
  ReturnType,
  AlamProps extends Record<string, any>
> = (props: Finish<AlamProps> & FunctionProps) => ReturnType;

export type FunctionType<AlamProps extends Record<string, any>> = <
  FunctionProps,
  ReturnType
>(
  component: Input<FunctionProps, ReturnType>
) => Output<FunctionProps, ReturnType, AlamProps>;
