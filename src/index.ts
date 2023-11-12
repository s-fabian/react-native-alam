import spacing from './spacing';
import display from './display';
import other from './other';
import position from './position';
import font from './font';
import colors from './colors';
import type {
  Banned,
  DefaultAlam,
  ExtendedAlam,
  ResponsiveUnits,
  Style,
  TailwindArgs,
} from './types';
import { useTheme } from './theme';
import { useWindowDimensions } from 'react-native';

export const defaultAlam = {
  ...colors,
  ...font,
  ...spacing,
  ...display,
  ...position,
  ...other,
} as const;

const breakpoints: Record<ResponsiveUnits, number> = {
  xs: 360, // Modern Smartphones, 360 pixels and above
  sm: 640, // Larger Phones/Small Tablets, 640 pixels and above
  md: 768, // Larger Tablets, 768 pixels and above
  lg: 1024, // Large Tablets/Small Laptops, 1024 pixels and above
  xl: 1280, // Very Large Tablets, 1280 pixels and above
  '2xl': 1536, // Desktops, 1536 pixels and above
};

function stripResponsive(
  from: string,
  is_max: boolean = false
): [ResponsiveUnits, 'min' | 'max', string] | null {
  const index = from.indexOf('-');
  if (index === -1) {
    return null;
  }
  const start = from.slice(0, index);
  const end = from.slice(index + 1);

  switch (start) {
    case 'xs':
    case 'sm':
    case 'md':
    case 'lg':
    case 'xl':
    case '2xl':
      return [start, is_max ? 'max' : 'min', end];
    case 'max':
      return is_max ? null : stripResponsive(end, true);
    default:
      return null;
  }
}

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
  let attributes: ExtendedAlam = attr ?? defaultAlam;

  return (props) => {
    const colors = useTheme();
    const { width } = useWindowDimensions();

    let style: Style = {};
    for (const [key, value] of Object.entries(props)) {
      if (key in attributes) {
        style = attributes[key]!(value, style, colors);
        delete props[key];
      } else {
        const conditional = stripResponsive(key);

        if (!conditional) continue;

        const [unit, minMax, newKey] = conditional;
        const unitAsNumber = breakpoints[unit];
        let applies = false;
        if (minMax === 'min') {
          applies = width >= unitAsNumber;
        } else if (minMax === 'max') {
          applies = width < unitAsNumber;
        }

        if (!applies) continue;

        style = attributes[newKey]!(value, style, colors);
      }
    }

    return component({
      ...props,
      style:
        props instanceof Object &&
        'style' in props &&
        props.style instanceof Object
          ? { ...props.style, ...style }
          : style,
    });
  };
}

type FunctionType<A extends ExtendedAlam> = <T extends Banned<A>, R>(
  component: Input<T, R, A>
) => Output<T, R, A>;

export function createAlam<A extends ExtendedAlam>(attr: A): FunctionType<A>;
export function createAlam(): FunctionType<DefaultAlam>;
export function createAlam<A extends ExtendedAlam>(attr?: A) {
  return <T extends Banned<A>, R>(
    component: Input<T, R, A>
  ): Output<T, R, A> => {
    const attributes: ExtendedAlam = attr ?? defaultAlam;
    return alam(component, attributes);
  };
}

export { createAlamComponents, Alam } from './components';
export { useTheme, ThemeProvider } from './theme';
export type { Colors, Style } from './types';
