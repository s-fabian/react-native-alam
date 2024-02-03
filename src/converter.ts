import { useWindowDimensions } from 'react-native';
import {
  type FunctionType,
  type GetFn,
  type Input,
  type Output,
  type ResponsiveUnits,
  type StyleHelp,
} from './types';
import { type DefaultProps } from './props';
import { useTheme } from './theme';
import defaultAlam from './definitions';

const breakpoints: Record<ResponsiveUnits, number> = {
  sm: 640, // Larger Phones/Small Tablets, 640 pixels and above
  md: 768, // Larger Tablets, 768 pixels and above
  lg: 1024, // Large Tablets/Small Laptops, 1024 pixels and above
  xl: 1280, // Very Large Tablets, 1280 pixels and above
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
    case 'sm':
    case 'md':
    case 'lg':
    case 'xl':
      return [start, is_max ? 'max' : 'min', end];
    case 'max':
      return is_max ? null : stripResponsive(end, true);
    default:
      return null;
  }
}

export function converter(): FunctionType<{}>;
export function converter<AlamProps extends Record<string, any>>(
  attr: GetFn<AlamProps>
): FunctionType<AlamProps>;

export function converter<AlamProps extends Record<string, any>>(
  attr?: GetFn<AlamProps>
): FunctionType<AlamProps> {
  return <
    FunctionProps,
    ReturnType,
    InnerAlamProps extends Record<string, any> = AlamProps,
  >(
    component: Input<FunctionProps, ReturnType>
  ): Output<FunctionProps, ReturnType, InnerAlamProps> => {
    const attributes = {
      ...defaultAlam,
      ...attr,
    } as GetFn<InnerAlamProps & DefaultProps>;

    return (props) => {
      const colors = useTheme();
      const { width } = useWindowDimensions();

      let style: StyleHelp = {};
      for (const [key, value] of Object.entries(props) as Array<
        [string, any]
      >) {
        if (value === undefined) continue;

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
          typeof props === 'object' &&
          props !== null &&
          'style' in props &&
          typeof props.style === 'object' &&
          props.style !== null
            ? { ...props.style, ...style }
            : style,
      });
    };
  };
}
