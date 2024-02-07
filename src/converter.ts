import { useWindowDimensions } from 'react-native';
import {
  type FunctionType,
  type GetFn,
  type InputFunction,
  type OutputFunction,
  type ResponsiveUnits,
  type StyleHelp,
  type StylePrefix,
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

interface StripPrefixResult {
  where?: StylePrefix;
  breakpoint?: ResponsiveUnits;
  lowerOrLesser?: 'min' | 'max';
  className?: string;
}

function stripPrefixes(from: string): StripPrefixResult | undefined {
  const iter = from.split('-').reverse();

  const result: StripPrefixResult = {};

  loop: for (;;) {
    const prefix = iter.pop();
    if (!prefix) return;

    switch (prefix) {
      case 'max': {
        if (result.where) return;
        if (result.breakpoint) return;

        result.lowerOrLesser = prefix;
        break;
      }

      case 'sm':
      case 'md':
      case 'lg':
      case 'xl': {
        if (result.where) return;

        result.breakpoint = prefix;
        break;
      }

      case 'inner':
      case 'cc': {
        result.where = prefix;
        break loop;
      }

      default: {
        result.className = iter.reverse().join('-');
        break loop;
      }
    }
  }

  if (!result.className) return;

  return result;
}

function makeProps<V extends PropertyKey>(
  props: unknown,
  style: Record<string, any> | null,
  key: V
): Record<string, any> | undefined {
  if (
    typeof props === 'object' &&
    props !== null &&
    key in props &&
    typeof props[key as keyof typeof props] === 'object' &&
    props[key as keyof typeof props] !== null
  ) {
    if (style) {
      return { ...props['style'], ...style };
    } else {
      return props[key as keyof typeof props];
    }
  } else if (style) {
    return style;
  } else {
    return undefined;
  }
}

export function converter<AlamProps extends Record<string, any>>(
  attr: GetFn<AlamProps>
): FunctionType<AlamProps> {
  return <
    FunctionProps,
    ReturnType,
    InnerAlamProps extends Record<string, any> = AlamProps,
  >(
    component: InputFunction<FunctionProps, ReturnType>
  ): OutputFunction<FunctionProps, ReturnType, InnerAlamProps> => {
    const attributes = {
      ...defaultAlam,
      ...attr,
    } as GetFn<InnerAlamProps & DefaultProps>;

    return (props) => {
      const colors = useTheme();
      const { width } = useWindowDimensions();

      let style: StyleHelp = {};
      let ccStyle: StyleHelp = {};
      let innerStyle: StyleHelp = {};

      for (const [key, value] of Object.entries(props) as Array<
        [string, any]
      >) {
        if (value === undefined) continue;

        if (key in attributes) {
          style = attributes[key]!(value, style, colors);
          delete props[key as keyof typeof props];
        } else {
          const conditional = stripPrefixes(key);

          if (!conditional) continue;

          const {
            className,
            breakpoint,
            lowerOrLesser,
            where = 'style',
          } = conditional;

          if (!className) continue;

          let applies = false;
          if (breakpoint) {
            const unitAsNumber = breakpoints[breakpoint];
            if (lowerOrLesser === 'min') {
              applies = width >= unitAsNumber;
            } else if (lowerOrLesser === 'max') {
              applies = width < unitAsNumber;
            }
          } else {
            applies = true;
          }

          if (!applies) continue;
          const fn = attributes[className];
          if (!fn) continue;

          delete props[key as keyof typeof props];

          switch (where) {
            case 'style': {
              style = fn(value, style, colors);
              break;
            }
            case 'inner': {
              innerStyle = fn(value, innerStyle, colors);
              break;
            }
            case 'cc': {
              ccStyle = fn(value, ccStyle, colors);
              break;
            }
          }
        }
      }

      return component({
        ...props,
        style: makeProps(props, style, 'style'),
        contentContainerStyle: makeProps(props, style, 'contentContainerStyle'),
        innerStyle: makeProps(props, style, 'innerStyle'),
      });
    };
  };
}
