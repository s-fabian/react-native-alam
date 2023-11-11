import type { StyleHelp } from './types';

export default {
  text: (size: number, style: StyleHelp) => ({
    fontSize: size,
    ...style,
  }),
  'text-xs': (_: true, style: StyleHelp) => ({
    fontSize: 12,
    ...style,
  }),
  'text-sm': (_: true, style: StyleHelp) => ({
    fontSize: 14,
    ...style,
  }),
  'text-md': (_: true, style: StyleHelp) => ({
    fontSize: 16,
    ...style,
  }),
  'text-lg': (_: true, style: StyleHelp) => ({
    fontSize: 20,
    ...style,
  }),
  'text-xl': (_: true, style: StyleHelp) => ({
    fontSize: 24,
    ...style,
  }),
  'text-2xl': (_: true, style: StyleHelp) => ({
    fontSize: 30,
    ...style,
  }),
  'text-3xl': (_: true, style: StyleHelp) => ({
    fontSize: 40,
    ...style,
  }),
  'text-4xl': (_: true, style: StyleHelp) => ({
    fontSize: 50,
    ...style,
  }),
  // italic
  italic: (_: true, style: StyleHelp) => ({
    fontStyle: 'italic',
    ...style,
  }),
  'not-italic': (_: true, style: StyleHelp) => ({
    fontStyle: 'normal',
    ...style,
  }),
  // text transform
  uppercase: (_: true, style: StyleHelp) => ({
    textTransform: 'uppercase',
    ...style,
  }),
  lowercase: (_: true, style: StyleHelp) => ({
    textTransform: 'lowercase',
    ...style,
  }),
  capitalize: (_: true, style: StyleHelp) => ({
    textTransform: 'capitalize',
    ...style,
  }),
  'normal-case': (_: true, style: StyleHelp) => ({
    textTransform: 'none',
    ...style,
  }),

  // bold
  'font-thin': (_: true, style: StyleHelp) => ({
    fontWeight: '100',
    ...style,
  }),
  'font-extralight': (_: true, style: StyleHelp) => ({
    fontWeight: '200',
    ...style,
  }),
  'font-light': (_: true, style: StyleHelp) => ({
    fontWeight: '300',
    ...style,
  }),
  'font-normal': (_: true, style: StyleHelp) => ({
    fontWeight: '400',
    ...style,
  }),
  'font-medium': (_: true, style: StyleHelp) => ({
    fontWeight: '500',
    ...style,
  }),
  'font-semibold': (_: true, style: StyleHelp) => ({
    fontWeight: '600',
    ...style,
  }),
  'font-bold': (_: true, style: StyleHelp) => ({
    fontWeight: '700',
    ...style,
  }),
  'font-extrabold': (_: true, style: StyleHelp) => ({
    fontWeight: '800',
    ...style,
  }),
  'font-black': (_: true, style: StyleHelp) => ({
    fontWeight: '900',
    ...style,
  }),

  leading: (lineHeight: number, style: StyleHelp) => ({
    lineHeight,
    ...style,
  }),

  // text align
  'text-left': (_: true, style: StyleHelp) => ({
    textAlign: 'left',
    ...style,
  }),
  'text-center': (_: true, style: StyleHelp) => ({
    textAlign: 'center',
    ...style,
  }),
  'text-right': (_: true, style: StyleHelp) => ({
    textAlign: 'right',
    ...style,
  }),
  'text-justify': (_: true, style: StyleHelp) => ({
    textAlign: 'justify',
    ...style,
  }),

  // line
  underline: (_: true, style: StyleHelp) => ({
    textDecorationLine: 'underline',
    ...style,
  }),
  'line-through': (_: true, style: StyleHelp) => ({
    textDecorationLine: 'line-through',
    ...style,
  }),
  'no-underline': (_: true, style: StyleHelp) => ({
    textDecorationLine: 'none',
    ...style,
  }),
};
