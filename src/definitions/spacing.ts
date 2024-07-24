import type { StyleHelp } from '../types';

export default {
  // Padding
  //-n p
  //-d Sets padding for all sides
  //-i padding: number | `${number}%` | 'auto'
  //-o padding: padding
  p: (padding: number | `${number}%` | 'auto', style: StyleHelp) => ({
    padding,
    ...style,
  }),

  //-n pt
  //-d Sets paddingTop
  //-i paddingTop: number | `${number}%` | 'auto'
  //-o paddingTop: paddingTop
  pt: (paddingTop: number | `${number}%` | 'auto', style: StyleHelp) => ({
    paddingTop,
    ...style,
  }),

  //-n pb
  //-d Sets paddingBottom
  //-i paddingBottom: number | `${number}%` | 'auto'
  //-o paddingBottom: paddingBottom
  pb: (paddingBottom: number | `${number}%` | 'auto', style: StyleHelp) => ({
    paddingBottom,
    ...style,
  }),

  //-n pl
  //-d Sets paddingLeft
  //-i paddingLeft: number | `${number}%` | 'auto'
  //-o paddingLeft: paddingLeft
  pl: (paddingLeft: number | `${number}%` | 'auto', style: StyleHelp) => ({
    paddingLeft,
    ...style,
  }),

  //-n pr
  //-d Sets paddingRight
  //-i paddingRight: number | `${number}%` | 'auto'
  //-o paddingRight: paddingRight
  pr: (paddingRight: number | `${number}%` | 'auto', style: StyleHelp) => ({
    paddingRight,
    ...style,
  }),

  //-n ps
  //-d Sets paddingStart
  //-i paddingStart: number | `${number}%` | 'auto'
  //-o paddingStart: paddingStart
  ps: (paddingStart: number | `${number}%` | 'auto', style: StyleHelp) => ({
    paddingStart,
    ...style,
  }),

  //-n pe
  //-d Sets paddingEnd
  //-i paddingEnd: number | `${number}%` | 'auto'
  //-o paddingEnd: paddingEnd
  pe: (paddingEnd: number | `${number}%` | 'auto', style: StyleHelp) => ({
    paddingEnd,
    ...style,
  }),

  //-n px
  //-d Sets horizontal padding (left and right)
  //-i paddingHorizontal: number | `${number}%` | 'auto'
  //-o paddingHorizontal: paddingHorizontal
  px: (
    paddingHorizontal: number | `${number}%` | 'auto',
    style: StyleHelp
  ) => ({
    paddingHorizontal,
    ...style,
  }),

  //-n py
  //-d Sets vertical padding (top and bottom)
  //-i paddingVertical: number | `${number}%` | 'auto'
  //-o paddingVertical: paddingVertical
  py: (paddingVertical: number | `${number}%` | 'auto', style: StyleHelp) => ({
    paddingVertical,
    ...style,
  }),

  // Margin
  //-n m
  //-d Sets margin for all sides
  //-i margin: number | `${number}%` | 'auto'
  //-o margin: margin
  m: (margin: number | `${number}%` | 'auto', style: StyleHelp) => ({
    margin,
    ...style,
  }),

  //-n mt
  //-d Sets margin-top
  //-i marginTop: number | `${number}%` | 'auto'
  //-o marginTop: marginTop
  mt: (marginTop: number | `${number}%` | 'auto', style: StyleHelp) => ({
    marginTop,
    ...style,
  }),

  //-n mb
  //-d Sets margin-bottom
  //-i marginBottom: number | `${number}%` | 'auto'
  //-o marginBottom: marginBottom
  mb: (marginBottom: number | `${number}%` | 'auto', style: StyleHelp) => ({
    marginBottom,
    ...style,
  }),

  //-n ml
  //-d Sets margin-left
  //-i marginLeft: number | `${number}%` | 'auto'
  //-o marginLeft: marginLeft
  ml: (marginLeft: number | `${number}%` | 'auto', style: StyleHelp) => ({
    marginLeft,
    ...style,
  }),

  //-n mr
  //-d Sets margin-right
  //-i marginRight: number | `${number}%` | 'auto'
  //-o marginRight: marginRight
  mr: (marginRight: number | `${number}%` | 'auto', style: StyleHelp) => ({
    marginRight,
    ...style,
  }),

  //-n ms
  //-d Sets margin-start
  //-i marginStart: number | `${number}%` | 'auto'
  //-o marginStart: marginStart
  ms: (marginStart: number | `${number}%` | 'auto', style: StyleHelp) => ({
    marginStart,
    ...style,
  }),

  //-n me
  //-d Sets margin-end
  //-i marginEnd: number | `${number}%` | 'auto'
  //-o marginEnd: marginEnd
  me: (marginEnd: number | `${number}%` | 'auto', style: StyleHelp) => ({
    marginEnd,
    ...style,
  }),

  //-n mx
  //-d Sets horizontal margin (left and right)
  //-i marginHorizontal: number | `${number}%` | 'auto'
  //-o marginHorizontal: marginHorizontal
  mx: (marginHorizontal: number | `${number}%` | 'auto', style: StyleHelp) => ({
    marginHorizontal,
    ...style,
  }),

  //-n my
  //-d Sets vertical margin (top and bottom)
  //-i marginVertical: number | `${number}%` | 'auto'
  //-o marginVertical: marginVertical
  my: (marginVertical: number | `${number}%` | 'auto', style: StyleHelp) => ({
    marginVertical,
    ...style,
  }),

  //-n gap
  //-d Sets the gap between elements
  //-i gap: number
  //-o gap: gap
  gap: (gap: number, style: StyleHelp) => ({
    gap,
    ...style,
  }),

  //-n gap-x
  //-d Sets the gap between columns
  //-i columnGap: number
  //-o columnGap: columnGap
  'gap-x': (columnGap: number, style: StyleHelp) => ({
    columnGap,
    ...style,
  }),

  //-n gap-y
  //-d Sets the gap between rows
  //-i rowGap: number
  //-o rowGap: rowGap
  'gap-y': (rowGap: number, style: StyleHelp) => ({
    rowGap,
    ...style,
  }),
} as const;
