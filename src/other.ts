import type { StyleHelp } from './types';

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
};
