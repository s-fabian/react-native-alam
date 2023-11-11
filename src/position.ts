import type { StyleHelp } from './types';

export default {
  // Top - Bottom
  inset: (inset: number, style: StyleHelp) => ({
    top: inset,
    right: inset,
    bottom: inset,
    left: inset,
    ...style,
  }),
  insetX: (insetX: number, style: StyleHelp) => ({
    left: insetX,
    right: insetX,
    ...style,
  }),
  insetY: (insetY: number, style: StyleHelp) => ({
    top: insetY,
    bottom: insetY,
    ...style,
  }),
  start: (start: number, style: StyleHelp) => ({
    start,
    ...style,
  }),
  end: (end: number, style: StyleHelp) => ({
    end,
    ...style,
  }),
  left: (left: number, style: StyleHelp) => ({
    left,
    ...style,
  }),
  right: (right: number, style: StyleHelp) => ({
    right,
    ...style,
  }),
  top: (top: number, style: StyleHelp) => ({
    top,
    ...style,
  }),
  bottom: (bottom: number, style: StyleHelp) => ({
    bottom,
    ...style,
  }),

  // positions
  absolute: (_: true, style: StyleHelp) => ({
    position: 'absolute',
    ...style,
  }),
  relative: (_: true, style: StyleHelp) => ({
    position: 'relative',
    ...style,
  }),

  // width and height
  w: (width: number | string, style: StyleHelp) => ({
    width,
    ...style,
  }),
  h: (height: number | string, style: StyleHelp) => ({
    height,
    ...style,
  }),
  'w-full': (_: true, style: StyleHelp) => ({
    width: '100%',
    ...style,
  }),
  'h-full': (_: true, style: StyleHelp) => ({
    height: '100%',
    ...style,
  }),
  'max-w': (maxWidth: number | string, style: StyleHelp) => ({
    maxWidth,
    ...style,
  }),
  'max-h': (maxHeight: number | string, style: StyleHelp) => ({
    maxHeight,
    ...style,
  }),
  'min-w': (minWidth: number | string, style: StyleHelp) => ({
    minWidth,
    ...style,
  }),
  'min-h': (minHeight: number | string, style: StyleHelp) => ({
    minHeight,
    ...style,
  }),

  // others
  z: (zIndex: number, style: StyleHelp) => ({
    zIndex,
    ...style,
  }),
};
