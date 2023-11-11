import type { StyleHelp } from './types';

export default {
  p: (padding: number, style: StyleHelp) => ({
    padding,
    ...style,
  }),
  pt: (paddingTop: number, style: StyleHelp) => ({
    paddingTop,
    ...style,
  }),
  pb: (paddingBottom: number, style: StyleHelp) => ({
    paddingBottom,
    ...style,
  }),
  pl: (paddingLeft: number, style: StyleHelp) => ({
    paddingLeft,
    ...style,
  }),
  pr: (paddingRight: number, style: StyleHelp) => ({
    paddingRight,
    ...style,
  }),
  ps: (paddingStart: number, style: StyleHelp) => ({
    paddingStart,
    ...style,
  }),
  pe: (paddingEnd: number, style: StyleHelp) => ({
    paddingEnd,
    ...style,
  }),
  px: (paddingHorizontal: number, style: StyleHelp) => ({
    paddingHorizontal,
    ...style,
  }),
  py: (paddingVertical: number, style: StyleHelp) => ({
    paddingVertical,
    ...style,
  }),
  m: (margin: number, style: StyleHelp) => ({
    margin,
    ...style,
  }),
  mt: (marginTop: number, style: StyleHelp) => ({
    marginTop,
    ...style,
  }),
  mb: (marginBottom: number, style: StyleHelp) => ({
    marginBottom,
    ...style,
  }),
  ml: (marginLeft: number, style: StyleHelp) => ({
    marginLeft,
    ...style,
  }),
  mr: (marginRight: number, style: StyleHelp) => ({
    marginRight,
    ...style,
  }),
  ms: (marginStart: number, style: StyleHelp) => ({
    marginStart,
    ...style,
  }),
  me: (marginEnd: number, style: StyleHelp) => ({
    marginEnd,
    ...style,
  }),
  mx: (marginHorizontal: number, style: StyleHelp) => ({
    marginHorizontal,
    ...style,
  }),
  my: (marginVertical: number, style: StyleHelp) => ({
    marginVertical,
    ...style,
  }),

  // borderRadius
  rounded: (borderRadius: true | number, style: StyleHelp) => ({
    borderRadius: borderRadius === true ? 10 : borderRadius,
    ...style,
  }),
  'rounded-md': (_: true, style: StyleHelp) => ({
    borderRadius: 15,
    ...style,
  }),
  'rounded-lg': (_: true, style: StyleHelp) => ({
    borderRadius: 20,
    ...style,
  }),
  'rounded-xl': (_: true, style: StyleHelp) => ({
    borderRadius: 30,
    ...style,
  }),
  'rounded-full': (_: true, style: StyleHelp) => ({
    borderRadius: 9999,
    ...style,
  }),
} as const;
