import type { StyleHelp } from './types';

export default {
  aspect: (aspectRatio: number, style: StyleHelp) => ({
    aspectRatio,
    ...style,
  }),
  'aspect-square': (_: true, style: StyleHelp) => ({
    aspectRatio: 1,
    ...style,
  }),
  'aspect-video': (_: true, style: StyleHelp) => ({
    aspectRatio: 16 / 9,
    ...style,
  }),
  'dir-ltr': (_: true, style: StyleHelp) => ({ direction: 'ltr', ...style }),
  'dir-rtl': (_: true, style: StyleHelp) => ({ direction: 'rtl', ...style }),
};
