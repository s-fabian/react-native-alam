import type { StyleHelp } from '../types';

export default {
  // Top - Bottom
  //-n inset
  //-d Sets top, right, bottom, and left to the same value
  //-i inset: number
  //-o top: inset
  //-o right: inset
  //-o bottom: inset
  //-o left: inset
  inset: (inset: number, style: StyleHelp) => ({
    top: inset,
    right: inset,
    bottom: inset,
    left: inset,
    ...style,
  }),

  //-n inset-x
  //-d Sets left and right to the same value
  //-i insetX: number
  //-o left: insetX
  //-o right: insetX
  'inset-x': (insetX: number, style: StyleHelp) => ({
    left: insetX,
    right: insetX,
    ...style,
  }),

  //-n inset-y
  //-d Sets top and bottom to the same value
  //-i insetY: number
  //-o top: insetY
  //-o bottom: insetY
  'inset-y': (insetY: number, style: StyleHelp) => ({
    top: insetY,
    bottom: insetY,
    ...style,
  }),

  //-n start
  //-d Sets the start position
  //-i start: number | `${number}%`
  //-o start: start
  start: (start: number | `${number}%`, style: StyleHelp) => ({
    start,
    ...style,
  }),

  //-n end
  //-d Sets the end position
  //-i end: number | `${number}%`
  //-o end: end
  end: (end: number | `${number}%`, style: StyleHelp) => ({
    end,
    ...style,
  }),

  //-n left
  //-d Sets the left position
  //-i left: number | `${number}%`
  //-o left: left
  left: (left: number | `${number}%`, style: StyleHelp) => ({
    left,
    ...style,
  }),

  //-n right
  //-d Sets the right position
  //-i right: number | `${number}%`
  //-o right: right
  right: (right: number | `${number}%`, style: StyleHelp) => ({
    right,
    ...style,
  }),

  //-n top
  //-d Sets the top position
  //-i top: number | `${number}%`
  //-o top: top
  top: (top: number | `${number}%`, style: StyleHelp) => ({
    top,
    ...style,
  }),

  //-n bottom
  //-d Sets the bottom position
  //-i bottom: number | `${number}%`
  //-o bottom: bottom
  bottom: (bottom: number | `${number}%`, style: StyleHelp) => ({
    bottom,
    ...style,
  }),

  // positions
  //-n absolute
  //-d Sets position to 'absolute'
  //-o position: 'absolute'
  absolute: (_: true, style: StyleHelp) => ({
    position: 'absolute',
    ...style,
  }),

  //-n relative
  //-d Sets position to 'relative'
  //-o position: 'relative'
  relative: (_: true, style: StyleHelp) => ({
    position: 'relative',
    ...style,
  }),

  // width and height
  //-n w
  //-d Sets width
  //-i width: number | `${number}%`
  //-o width: width
  w: (width: number | `${number}%`, style: StyleHelp) => ({
    width,
    ...style,
  }),

  //-n h
  //-d Sets height
  //-i height: number | `${number}%`
  //-o height: height
  h: (height: number | `${number}%`, style: StyleHelp) => ({
    height,
    ...style,
  }),

  //-n w-full
  //-d Sets width to '100%'
  //-o width: '100%'
  'w-full': (_: true, style: StyleHelp) => ({
    width: '100%',
    ...style,
  }),

  //-n h-full
  //-d Sets height to '100%'
  //-o height: '100%'
  'h-full': (_: true, style: StyleHelp) => ({
    height: '100%',
    ...style,
  }),

  //-n max-w
  //-d Sets maximum width
  //-i maxWidth: number | `${number}%`
  //-o maxWidth: maxWidth
  'max-w': (maxWidth: number | `${number}%`, style: StyleHelp) => ({
    maxWidth,
    ...style,
  }),

  //-n max-h
  //-d Sets maximum height
  //-i maxHeight: number | `${number}%`
  //-o maxHeight: maxHeight
  'max-h': (maxHeight: number | `${number}%`, style: StyleHelp) => ({
    maxHeight,
    ...style,
  }),

  //-n min-w
  //-d Sets minimum width
  //-i minWidth: number | `${number}%`
  //-o minWidth: minWidth
  'min-w': (minWidth: number | `${number}%`, style: StyleHelp) => ({
    minWidth,
    ...style,
  }),

  //-n min-h
  //-d Sets minimum height
  //-i minHeight: number | `${number}%`
  //-o minHeight: minHeight
  'min-h': (minHeight: number | `${number}%`, style: StyleHelp) => ({
    minHeight,
    ...style,
  }),

  // others
  //-n z
  //-d Sets z-index
  //-i zIndex: number
  //-o zIndex: zIndex
  z: (zIndex: number, style: StyleHelp) => ({
    zIndex,
    ...style,
  }),
};
