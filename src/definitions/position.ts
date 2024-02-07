import type { StyleHelp } from '../types';

export default {
  // Top - Bottom
  //-n inset
  //-d Sets top, right, bottom, and left to the same value
  //-i inset: number
  //-o top, right, bottom, left: inset
  inset: (inset: number, style: StyleHelp) => ({
    top: inset,
    right: inset,
    bottom: inset,
    left: inset,
    ...style,
  }),

  //-n insetX
  //-d Sets left and right to the same value
  //-i insetX: number
  //-o left, right: insetX
  insetX: (insetX: number, style: StyleHelp) => ({
    left: insetX,
    right: insetX,
    ...style,
  }),

  //-n insetY
  //-d Sets top and bottom to the same value
  //-i insetY: number
  //-o top, bottom: insetY
  insetY: (insetY: number, style: StyleHelp) => ({
    top: insetY,
    bottom: insetY,
    ...style,
  }),

  //-n start
  //-d Sets the start position
  //-i start: number
  //-o start: start
  start: (start: number | string, style: StyleHelp) => ({
    start,
    ...style,
  }),

  //-n end
  //-d Sets the end position
  //-i end: number
  //-o end: end
  end: (end: number | string, style: StyleHelp) => ({
    end,
    ...style,
  }),

  //-n left
  //-d Sets the left position
  //-i left: number
  //-o left: left
  left: (left: number | string, style: StyleHelp) => ({
    left,
    ...style,
  }),

  //-n right
  //-d Sets the right position
  //-i right: number
  //-o right: right
  right: (right: number | string, style: StyleHelp) => ({
    right,
    ...style,
  }),

  //-n top
  //-d Sets the top position
  //-i top: number
  //-o top: top
  top: (top: number | string, style: StyleHelp) => ({
    top,
    ...style,
  }),

  //-n bottom
  //-d Sets the bottom position
  //-i bottom: number
  //-o bottom: bottom
  bottom: (bottom: number | string, style: StyleHelp) => ({
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
  //-i width: number | string
  //-o width: width
  w: (width: number | string, style: StyleHelp) => ({
    width,
    ...style,
  }),

  //-n h
  //-d Sets height
  //-i height: number | string
  //-o height: height
  h: (height: number | string, style: StyleHelp) => ({
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
  //-i maxWidth: number | string
  //-o maxWidth: maxWidth
  'max-w': (maxWidth: number | string, style: StyleHelp) => ({
    maxWidth,
    ...style,
  }),

  //-n max-h
  //-d Sets maximum height
  //-i maxHeight: number | string
  //-o maxHeight: maxHeight
  'max-h': (maxHeight: number | string, style: StyleHelp) => ({
    maxHeight,
    ...style,
  }),

  //-n min-w
  //-d Sets minimum width
  //-i minWidth: number | string
  //-o minWidth: minWidth
  'min-w': (minWidth: number | string, style: StyleHelp) => ({
    minWidth,
    ...style,
  }),

  //-n min-h
  //-d Sets minimum height
  //-i minHeight: number | string
  //-o minHeight: minHeight
  'min-h': (minHeight: number | string, style: StyleHelp) => ({
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
