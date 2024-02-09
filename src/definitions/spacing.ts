import type { StyleHelp } from '../types';

export default {
  // Padding
  //-n p
  //-d Sets padding for all sides
  //-i padding: number | `${number}%`
  //-o padding: padding
  p: (padding: number | `${number}%`, style: StyleHelp) => ({
    padding,
    ...style,
  }),

  //-n pt
  //-d Sets paddingTop
  //-i paddingTop: number | `${number}%`
  //-o paddingTop: paddingTop
  pt: (paddingTop: number | `${number}%`, style: StyleHelp) => ({
    paddingTop,
    ...style,
  }),

  //-n pb
  //-d Sets paddingBottom
  //-i paddingBottom: number | `${number}%`
  //-o paddingBottom: paddingBottom
  pb: (paddingBottom: number | `${number}%`, style: StyleHelp) => ({
    paddingBottom,
    ...style,
  }),

  //-n pl
  //-d Sets paddingLeft
  //-i paddingLeft: number | `${number}%`
  //-o paddingLeft: paddingLeft
  pl: (paddingLeft: number | `${number}%`, style: StyleHelp) => ({
    paddingLeft,
    ...style,
  }),

  //-n pr
  //-d Sets paddingRight
  //-i paddingRight: number | `${number}%`
  //-o paddingRight: paddingRight
  pr: (paddingRight: number | `${number}%`, style: StyleHelp) => ({
    paddingRight,
    ...style,
  }),

  //-n ps
  //-d Sets paddingStart
  //-i paddingStart: number | `${number}%`
  //-o paddingStart: paddingStart
  ps: (paddingStart: number | `${number}%`, style: StyleHelp) => ({
    paddingStart,
    ...style,
  }),

  //-n pe
  //-d Sets paddingEnd
  //-i paddingEnd: number | `${number}%`
  //-o paddingEnd: paddingEnd
  pe: (paddingEnd: number | `${number}%`, style: StyleHelp) => ({
    paddingEnd,
    ...style,
  }),

  //-n px
  //-d Sets horizontal padding (left and right)
  //-i paddingHorizontal: number | `${number}%`
  //-o paddingHorizontal: paddingHorizontal
  px: (paddingHorizontal: number | `${number}%`, style: StyleHelp) => ({
    paddingHorizontal,
    ...style,
  }),

  //-n py
  //-d Sets vertical padding (top and bottom)
  //-i paddingVertical: number | `${number}%`
  //-o paddingVertical: paddingVertical
  py: (paddingVertical: number | `${number}%`, style: StyleHelp) => ({
    paddingVertical,
    ...style,
  }),

  // Margin
  //-n m
  //-d Sets margin for all sides
  //-i margin: number | `${number}%`
  //-o margin: margin
  m: (margin: number | `${number}%`, style: StyleHelp) => ({
    margin,
    ...style,
  }),

  //-n mt
  //-d Sets margin-top
  //-i marginTop: number | `${number}%`
  //-o marginTop: marginTop
  mt: (marginTop: number | `${number}%`, style: StyleHelp) => ({
    marginTop,
    ...style,
  }),

  //-n mb
  //-d Sets margin-bottom
  //-i marginBottom: number | `${number}%`
  //-o marginBottom: marginBottom
  mb: (marginBottom: number | `${number}%`, style: StyleHelp) => ({
    marginBottom,
    ...style,
  }),

  //-n ml
  //-d Sets margin-left
  //-i marginLeft: number | `${number}%`
  //-o marginLeft: marginLeft
  ml: (marginLeft: number | `${number}%`, style: StyleHelp) => ({
    marginLeft,
    ...style,
  }),

  //-n mr
  //-d Sets margin-right
  //-i marginRight: number | `${number}%`
  //-o marginRight: marginRight
  mr: (marginRight: number | `${number}%`, style: StyleHelp) => ({
    marginRight,
    ...style,
  }),

  //-n ms
  //-d Sets margin-start
  //-i marginStart: number | `${number}%`
  //-o marginStart: marginStart
  ms: (marginStart: number | `${number}%`, style: StyleHelp) => ({
    marginStart,
    ...style,
  }),

  //-n me
  //-d Sets margin-end
  //-i marginEnd: number | `${number}%`
  //-o marginEnd: marginEnd
  me: (marginEnd: number | `${number}%`, style: StyleHelp) => ({
    marginEnd,
    ...style,
  }),

  //-n mx
  //-d Sets horizontal margin (left and right)
  //-i marginHorizontal: number | `${number}%`
  //-o marginHorizontal: marginHorizontal
  mx: (marginHorizontal: number | `${number}%`, style: StyleHelp) => ({
    marginHorizontal,
    ...style,
  }),

  //-n my
  //-d Sets vertical margin (top and bottom)
  //-i marginVertical: number | `${number}%`
  //-o marginVertical: marginVertical
  my: (marginVertical: number | `${number}%`, style: StyleHelp) => ({
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
