import type { Color, Colors, StyleHelp } from './types';

export default {
  color: (color: Color, style: StyleHelp, colors: Colors) => ({
    color: colors[color],
    ...style,
  }),
  bg: (color: Color, style: StyleHelp, colors: Colors) => ({
    backgroundColor: colors[color],
    ...style,
  }),
  opacity: (opacity: number, style: StyleHelp) => ({
    opacity,
    ...style,
  }),
  shadow: (_: true, style: StyleHelp) => ({
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2.6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10.0,
    ...style,
  }),
};
