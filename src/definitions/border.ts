import type { Color, Colors, StyleHelp } from '../types';

export default {
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

  //-n rounded-tl
  //-d Sets border radius for the top-left corner
  //-i borderTopLeftRadius: number
  //-o borderTopLeftRadius: borderTopLeftRadius
  'rounded-tl': (borderTopLeftRadius: number, style: StyleHelp) => ({
    borderTopLeftRadius,
    ...style,
  }),

  //-n rounded-tr
  //-d Sets border radius for the top-right corner
  //-i borderTopRightRadius: number
  //-o borderTopRightRadius: borderTopRightRadius
  'rounded-tr': (borderTopRightRadius: number, style: StyleHelp) => ({
    borderTopRightRadius,
    ...style,
  }),

  //-n rounded-bl
  //-d Sets border radius for the bottom-left corner
  //-i borderBottomLeftRadius: number
  //-o borderBottomLeftRadius: borderBottomLeftRadius
  'rounded-bl': (borderBottomLeftRadius: number, style: StyleHelp) => ({
    borderBottomLeftRadius,
    ...style,
  }),

  //-n rounded-br
  //-d Sets border radius for the bottom-right corner
  //-i borderBottomRightRadius: number
  //-o borderBottomRightRadius: borderBottomRightRadius
  'rounded-br': (borderBottomRightRadius: number, style: StyleHelp) => ({
    borderBottomRightRadius,
    ...style,
  }),

  //-n border
  //-d Sets the width of the border
  //-i borderWidth: number
  //-o borderWidth: borderWidth
  border: (borderWidth: number, style: StyleHelp) => ({
    borderWidth,
    ...style,
  }),

  //-n border-x
  //-d Sets the width of the border on the left & right side
  //-i borderWidth: number
  //-o borderLeftWidth: borderWidth
  //-o borderRightWidth: borderWidth
  'border-x': (borderWidth: number, style: StyleHelp) => ({
    borderLeftWidth: borderWidth,
    borderRightWidth: borderWidth,
    ...style,
  }),

  //-n border-y
  //-d Sets the width of the border on the top & bottom side
  //-i borderWidth: number
  //-o borderTopWidth: borderWidth
  //-o borderBottomWidth: borderWidth
  'border-y': (borderWidth: number, style: StyleHelp) => ({
    borderTopWidth: borderWidth,
    borderBottomWidth: borderWidth,
    ...style,
  }),

  //-n border-l
  //-d Sets the width of the border on the left side
  //-i borderLeftWidth: number
  //-o borderLeftWidth: borderLeftWidth
  'border-l': (borderLeftWidth: number, style: StyleHelp) => ({
    borderLeftWidth,
    ...style,
  }),

  //-n border-r
  //-d Sets the width of the border on the right side
  //-i borderRightWidth: number
  //-o borderRightWidth: borderRightWidth
  'border-r': (borderRightWidth: number, style: StyleHelp) => ({
    borderRightWidth,
    ...style,
  }),

  //-n border-t
  //-d Sets the width of the border on the top side
  //-i borderTopWidth: number
  //-o borderTopWidth: borderTopWidth
  'border-t': (borderTopWidth: number, style: StyleHelp) => ({
    borderTopWidth,
    ...style,
  }),

  //-n border-b
  //-d Sets the width of the border on the bottom side
  //-i borderBottomWidth: number
  //-o borderBottomWidth: borderBottomWidth
  'border-b': (borderBottomWidth: number, style: StyleHelp) => ({
    borderBottomWidth,
    ...style,
  }),

  //-n border-color
  //-d Sets the color of the border
  //-i borderColor: string
  //-o borderColor: colors[borderColor]
  'border-color': (borderColor: Color, style: StyleHelp, colors: Colors) => ({
    borderColor: colors[borderColor],
    ...style,
  }),
} as const;
