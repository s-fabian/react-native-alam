import { Platform, useWindowDimensions } from 'react-native';
import {
  type FunctionType,
  type GetFn,
  type ImportantProps,
  type InputFunction,
  type OutputFunction,
  type ResponsiveUnits,
  type StyleHelp,
  type StylePrefix,
} from './types';
import defaultAlam, { type DefaultProps } from './definitions';
import { useTheme } from './theme';
import { Important } from './components';

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
  platform?: 'android' | 'ios' | 'web';
  className?: string;
}

function getPrefix(from: string): StripPrefixResult | undefined {
  const iter = from.split('-').reverse();

  const result: StripPrefixResult = {};

  loop: for (;;) {
    const prefix = iter.pop();
    if (!prefix) return;

    switch (prefix) {
      case 'web':
      case 'ios':
      case 'android': {
        if (result.where || result.breakpoint || result.lowerOrLesser) {
          result.className = iter.length
            ? prefix + '-' + iter.reverse().join('-')
            : prefix;

          break loop;
        }

        result.platform = prefix;
        break;
      }

      case 'min': {
        if (result.where || result.breakpoint) {
          result.className = iter.length
            ? prefix + '-' + iter.reverse().join('-')
            : prefix;

          break loop;
        }

        result.lowerOrLesser = prefix;
        break;
      }

      case 'sm':
      case 'md':
      case 'lg':
      case 'xl': {
        if (result.where) {
          result.className = iter.length
            ? prefix + '-' + iter.reverse().join('-')
            : prefix;

          break loop;
        }

        result.breakpoint = prefix;
        break;
      }

      case 'inner':
      case 'cc': {
        result.where = prefix;
        result.className = iter.reverse().join('-');
        break loop;
      }

      default: {
        result.className = iter.length
          ? prefix + '-' + iter.reverse().join('-')
          : prefix;
        break loop;
      }
    }
  }

  if (!result.className) return;

  return result;
}

function makeProps<V extends PropertyKey>(
  props: unknown,
  style: Record<PropertyKey, any> | null,
  key: V,
  styleImportantOverride?: boolean
): Record<PropertyKey, any> | undefined {
  if (
    typeof props === 'object' &&
    props !== null &&
    key in props &&
    typeof props[key as keyof typeof props] === 'object' &&
    props[key as keyof typeof props] !== null
  ) {
    if (style) {
      const styleImportant =
        styleImportantOverride ||
        (props as { style: any })['style'][Important] !== undefined;

      return styleImportant
        ? { ...style, ...(props as { style: any })['style'] }
        : { ...(props as { style: any })['style'], ...style };
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

    return ({ ...props }) => {
      const colors = useTheme();
      const { width } = useWindowDimensions();
      const { OS: os } = Platform;

      let style: StyleHelp = {};
      let ccStyle: StyleHelp = {};
      let innerStyle: StyleHelp = {};

      let styleImportant: Record<keyof ImportantProps, boolean> = {
        'inner-alam-important': false,
        'cc-alam-important': false,
        'alam-important': false,
      };

      for (const [key, value] of Object.entries(props).reverse() as Array<
        [string, any]
      >) {
        if (value === undefined) continue;
        if (typeof value === 'function') continue;

        if (key in styleImportant) {
          styleImportant[key as keyof ImportantProps] = true;
        }

        if (key in attributes) {
          style = attributes[key]!(value, style, colors);
          delete props[key as keyof typeof props];
        } else {
          const conditional = getPrefix(key);

          if (!conditional) continue;

          const {
            className,
            breakpoint,
            lowerOrLesser = 'min',
            where = 'style',
            platform,
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

          if (platform !== undefined && platform !== os) {
            applies = false;
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

      const result = {
        ...props,
        style: makeProps(
          props,
          style,
          'style',
          styleImportant['alam-important']
        ),
        contentContainerStyle: makeProps(
          props,
          ccStyle,
          'contentContainerStyle',
          styleImportant['cc-alam-important']
        ),
        innerStyle: makeProps(
          props,
          innerStyle,
          'innerStyle',
          styleImportant['inner-alam-important']
        ),
      };

      return component(result);
    };
  };
}
