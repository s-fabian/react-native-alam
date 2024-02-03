import type { StyleHelp } from '../types';

export default {
  // Padding
  //-n p
  //-d Sets padding for all sides
  //-i padding: number
  //-o padding: padding
  p: (padding: number, style: StyleHelp) => ({
    padding,
    ...style,
  }),

  //-n pt
  //-d Sets paddingTop
  //-i paddingTop: number
  //-o paddingTop: paddingTop
  pt: (paddingTop: number, style: StyleHelp) => ({
    paddingTop,
    ...style,
  }),

  //-n pb
  //-d Sets paddingBottom
  //-i paddingBottom: number
  //-o paddingBottom: paddingBottom
  pb: (paddingBottom: number, style: StyleHelp) => ({
    paddingBottom,
    ...style,
  }),

  //-n pl
  //-d Sets paddingLeft
  //-i paddingLeft: number
  //-o paddingLeft: paddingLeft
  pl: (paddingLeft: number, style: StyleHelp) => ({
    paddingLeft,
    ...style,
  }),

  //-n pr
  //-d Sets paddingRight
  //-i paddingRight: number
  //-o paddingRight: paddingRight
  pr: (paddingRight: number, style: StyleHelp) => ({
    paddingRight,
    ...style,
  }),

  //-n ps
  //-d Sets paddingStart
  //-i paddingStart: number
  //-o paddingStart: paddingStart
  ps: (paddingStart: number, style: StyleHelp) => ({
    paddingStart,
    ...style,
  }),

  //-n pe
  //-d Sets paddingEnd
  //-i paddingEnd: number
  //-o paddingEnd: paddingEnd
  pe: (paddingEnd: number, style: StyleHelp) => ({
    paddingEnd,
    ...style,
  }),

  //-n px
  //-d Sets horizontal padding (left and right)
  //-i paddingHorizontal: number
  //-o paddingHorizontal: paddingHorizontal
  px: (paddingHorizontal: number, style: StyleHelp) => ({
    paddingHorizontal,
    ...style,
  }),

  //-n py
  //-d Sets vertical padding (top and bottom)
  //-i paddingVertical: number
  //-o paddingVertical: paddingVertical
  py: (paddingVertical: number, style: StyleHelp) => ({
    paddingVertical,
    ...style,
  }),

  // Margin
  //-n m
  //-d Sets margin for all sides
  //-i margin: number
  //-o margin: margin
  m: (margin: number, style: StyleHelp) => ({
    margin,
    ...style,
  }),

  //-n mt
  //-d Sets margin-top
  //-i marginTop: number
  //-o marginTop: marginTop
  mt: (marginTop: number, style: StyleHelp) => ({
    marginTop,
    ...style,
  }),

  //-n mb
  //-d Sets margin-bottom
  //-i marginBottom: number
  //-o marginBottom: marginBottom
  mb: (marginBottom: number, style: StyleHelp) => ({
    marginBottom,
    ...style,
  }),

  //-n ml
  //-d Sets margin-left
  //-i marginLeft: number
  //-o marginLeft: marginLeft
  ml: (marginLeft: number, style: StyleHelp) => ({
    marginLeft,
    ...style,
  }),

  //-n mr
  //-d Sets margin-right
  //-i marginRight: number
  //-o marginRight: marginRight
  mr: (marginRight: number, style: StyleHelp) => ({
    marginRight,
    ...style,
  }),

  //-n ms
  //-d Sets margin-start
  //-i marginStart: number
  //-o marginStart: marginStart
  ms: (marginStart: number, style: StyleHelp) => ({
    marginStart,
    ...style,
  }),

  //-n me
  //-d Sets margin-end
  //-i marginEnd: number
  //-o marginEnd: marginEnd
  me: (marginEnd: number, style: StyleHelp) => ({
    marginEnd,
    ...style,
  }),

  //-n mx
  //-d Sets horizontal margin (left and right)
  //-i marginHorizontal: number
  //-o marginHorizontal: marginHorizontal
  mx: (marginHorizontal: number, style: StyleHelp) => ({
    marginHorizontal,
    ...style,
  }),

  //-n my
  //-d Sets vertical margin (top and bottom)
  //-i marginVertical: number
  //-o marginVertical: marginVertical
  my: (marginVertical: number, style: StyleHelp) => ({
    marginVertical,
    ...style,
  }),

  // borderRadius
  //-n rounded
  //-d Sets border radius
  //-i borderRadius: true | number
  //-o borderRadius: borderRadius === true ? 10 : borderRadius
  rounded: (borderRadius: true | number, style: StyleHelp) => ({
    borderRadius: borderRadius === true ? 10 : borderRadius,
    ...style,
  }),

  //-n rounded-md
  //-d Sets border radius to medium
  //-o borderRadius: 15
  'rounded-md': (_: true, style: StyleHelp) => ({
    borderRadius: 15,
    ...style,
  }),

  //-n rounded-lg
  //-d Sets border radius to large
  //-o borderRadius: 20
  'rounded-lg': (_: true, style: StyleHelp) => ({
    borderRadius: 20,
    ...style,
  }),

  //-n rounded-xl
  //-d Sets border radius to extra large
  //-o borderRadius: 30
  'rounded-xl': (_: true, style: StyleHelp) => ({
    borderRadius: 30,
    ...style,
  }),

  //-n rounded-full
  //-d Sets border radius to full circle
  //-o borderRadius: 9999
  'rounded-full': (_: true, style: StyleHelp) => ({
    borderRadius: 9999,
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
