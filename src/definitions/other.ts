import type { StyleHelp } from '../types';

export default {
  //-n aspect
  //-d Sets the aspect ratio
  //-i aspectRatio: number
  //-o aspectRatio: aspectRatio
  aspect: (aspectRatio: number, style: StyleHelp) => ({
    aspectRatio,
    ...style,
  }),
  //-n aspect-square
  //-d Makes the element a square
  //-o aspectRatio: 1
  'aspect-square': (_: true, style: StyleHelp) => ({
    aspectRatio: 1,
    ...style,
  }),
  //-n aspect-video
  //-d Makes the element video-shaped
  //-o aspectRatio: 16 / 9
  'aspect-video': (_: true, style: StyleHelp) => ({
    aspectRatio: 16 / 9,
    ...style,
  }),

  //-n dir-ltr
  //-d Changes the direction to left-to-right
  //-o direction: 'ltr'
  'dir-ltr': (_: true, style: StyleHelp) => ({ direction: 'ltr', ...style }),
  //-n dir-rtl
  //-d Changes the direction to right-to-left
  //-o direction: 'rtl'
  'dir-rtl': (_: true, style: StyleHelp) => ({ direction: 'rtl', ...style }),

  //-n overflow-visible
  //-d Changes overflow / how the element is measured and displayed
  //-o overflow: 'visible'
  'overflow-visible': (_: true, style: StyleHelp) => ({
    overflow: 'visible',
    ...style,
  }),
  //-n overflow-hidden
  //-d Changes overflow / how the element is measured and displayed
  //-o overflow: 'hidden'
  'overflow-hidden': (_: true, style: StyleHelp) => ({
    overflow: 'hidden',
    ...style,
  }),
  //-n overflow-scroll
  //-d Changes overflow / how the element is measured and displayed
  //-o overflow: 'scroll'
  'overflow-scroll': (_: true, style: StyleHelp) => ({
    overflow: 'scroll',
    ...style,
  }),

  //-n scale
  //-d Changes the scale of an element
  //-i scale: number
  //-o transform: [...transform, { scale: scale }]
  scale: (scale: number, style: StyleHelp) => ({
    transform: [{ scale }, ...style.transform],
    ...style,
  }),

  //-n scale-x
  //-d Changes the scale of an element
  //-i scaleX: number
  //-o transform: [...transform, { scaleX: scaleX }]
  'scale-x': (scaleX: number, style: StyleHelp) => ({
    transform: [{ scaleX }, ...style.transform],
    ...style,
  }),

  //-n scale-y
  //-d Changes the scale of an element
  //-i scaleY: number
  //-o transform: [...transform, { scaleY: scaleY }]
  'scale-y': (scaleY: number, style: StyleHelp) => ({
    transform: [{ scaleY }, ...style.transform],
    ...style,
  }),
};
