import type { Color, Colors, StyleHelp } from '../types';

export default {
  //-n color
  //-d Changes the text color of an element
  //-i color: string
  //-o color: colors[color]
  color: (color: Color, style: StyleHelp, colors: Colors) => ({
    color: colors[color],
    ...style,
  }),
  //-n bg
  //-d Changes the background color of an element
  //-i color: string
  //-o backgroundColor: colors[color]
  bg: (color: Color, style: StyleHelp, colors: Colors) => ({
    backgroundColor: colors[color],
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
  //-n shadow
  //-d Add a shadow to the element
  //-o shadowColor: '#000000'
  //-o [shadowOffset.width]: 0
  //-o [shadowOffset.height]: 2.6
  //-o shadowOpacity: 0.1
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
};
