import type { DynColor, DynColors, StyleHelp } from '../types';

export default {
  //-n color
  //-d Changes the text color of an element
  //-i color: string | Colord
  //-o color: colors[color]
  color: (color: DynColor, style: StyleHelp, colors: DynColors) => ({
    color: colors.resolve(color),
    ...style,
  }),
  //-n bg
  //-d Changes the background color of an element
  //-i color: string | Colord
  //-o backgroundColor: colors[color]
  bg: (color: DynColor, style: StyleHelp, colors: DynColors) => ({
    backgroundColor: colors.resolve(color),
    ...style,
  }),
  //-n opacity
  //-d Changes the opacity of an element
  //-i opacity: number
  //-o opacity: opacity
  opacity: (opacity: number, style: StyleHelp) => ({
    opacity,
    ...style,
  }),

  //-n elevation
  //-d Add a shadow to the element (android)
  //-i elevation: number
  //-o elevation: elevation
  elevation: (elevation: number, style: StyleHelp) => ({
    elevation,
    ...style,
  }),

  //-n shadow
  //-d Add a shadow to the element
  //-o shadowColor: '#000000'
  //-o [shadowOffset.width]: 0
  //-o [shadowOffset.height]: 2.6
  //-o shadowOpacity: 0.1
  //-o shadowRadius: 10.0
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

  //-n shadow-md
  //-d Add a shadow to the element
  //-o shadowColor: '#000000'
  //-o [shadowOffset.width]: 3
  //-o [shadowOffset.height]: 3
  //-o shadowOpacity: 0.12
  //-o shadowRadius: 5
  'shadow-md': (_: true, style: StyleHelp) => ({
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    ...style,
  }),
};
