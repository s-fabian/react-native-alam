import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { DefaultProps } from '.';
import type { Ref } from 'react';
import type { Colord } from 'colord';

type StyleBase = any;
export type Style = StyleBase | ImageStyle | TextStyle | ViewStyle;
export type Color =
  | string
  | 'primary'
  | 'background'
  | 'card'
  | 'text'
  | 'border'
  | 'notification';
export type DynColor = Color | Colord;
export type Colors = Record<Color, string>;
export type DynColors = Omit<Colors, 'resolve'> & {
  resolve(c: DynColor): string | undefined;
};

export type { DefaultProps, Style as StyleHelp };

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

export type PlatformPrefix = 'android' | 'ios' | 'web';

type Platform<V extends string> = `${PlatformPrefix}-${V}` | V;

export type StylePrefix = 'inner' | 'cc';

type Styled<V extends string> = `${StylePrefix}-${V}` | V;

export type ResponsiveUnits = 'sm' | 'md' | 'lg' | 'xl';

type ResponsiveMin<V extends string> = `${ResponsiveUnits}-${V}`;
type ResponsiveMinMax<V extends string> =
  | ResponsiveMin<V>
  | `min-${ResponsiveMin<V>}`;

type Responsive<V extends string> = ResponsiveMinMax<V> | V;

export type AllPrefixes<V extends string> = Platform<Responsive<Styled<V>>>;

export type AddPrefixes<T extends Record<string, unknown>> = {
  [K in keyof T & string as AllPrefixes<K>]: T[K];
};

export type ImportantProps = {
  [k in `${StylePrefix}-alam-important` | 'alam-important']?: true;
};

export type AddPrefixAndDefault<A extends Record<string, unknown>> = Partial<
  A & DefaultProps & AddPrefixes<Partial<A> & DefaultProps> & ImportantProps
>;

export type InputFunction<FunctionProps, ReturnType> = (
  props: FunctionProps
) => ReturnType;
export type OutputFunction<
  FunctionProps,
  ReturnType,
  AlamProps extends Record<string, any>,
> = (props: AddPrefixAndDefault<AlamProps> & FunctionProps) => ReturnType;

export type FunctionType<AlamProps extends Record<string, any>> = <
  FunctionProps,
  ReturnType,
>(
  component: InputFunction<FunctionProps, ReturnType>
) => OutputFunction<FunctionProps, ReturnType, AlamProps>;

export interface ForwardRef<T> {
  forwardRef?: Ref<T>;
}
