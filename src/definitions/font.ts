import type { StyleHelp } from '../types';

export default {
  //-n font
  //-d Changes the font family
  //-i family: string
  //-o fontFamily: string
  font: (family: string, style: StyleHelp) => ({
    fontFamily: family,
    ...style,
  }),

  //-n text
  //-d Changes the font size of a text
  //-i size: number
  //-o fontSize: size
  text: (size: number, style: StyleHelp) => ({
    fontSize: size,
    ...style,
  }),

  //-n text-xs
  //-d Changes the font size of a text
  //-o fontSize: 12
  'text-xs': (_: true, style: StyleHelp) => ({
    fontSize: 12,
    ...style,
  }),

  //-n text-sm
  //-d Changes the font size of a text
  //-o fontSize: 14
  'text-sm': (_: true, style: StyleHelp) => ({
    fontSize: 14,
    ...style,
  }),

  //-n text-md
  //-d Changes the font size of a text
  //-o fontSize: 16
  'text-md': (_: true, style: StyleHelp) => ({
    fontSize: 16,
    ...style,
  }),

  //-n text-lg
  //-d Changes the font size of a text
  //-o fontSize: 20
  'text-lg': (_: true, style: StyleHelp) => ({
    fontSize: 20,
    ...style,
  }),

  //-n text-xl
  //-d Changes the font size of a text
  //-o fontSize: 24
  'text-xl': (_: true, style: StyleHelp) => ({
    fontSize: 24,
    ...style,
  }),

  //-n text-2xl
  //-d Changes the font size of a text
  //-o fontSize: 30
  'text-2xl': (_: true, style: StyleHelp) => ({
    fontSize: 30,
    ...style,
  }),

  //-n text-3xl
  //-d Changes the font size of a text
  //-o fontSize: 40
  'text-3xl': (_: true, style: StyleHelp) => ({
    fontSize: 40,
    ...style,
  }),

  //-n text-4xl
  //-d Changes the font size of a text
  //-o fontSize: 50
  'text-4xl': (_: true, style: StyleHelp) => ({
    fontSize: 50,
    ...style,
  }),

  //-n italic
  //-d Makes the text italic
  //-o fontStyle: 'italic'
  italic: (_: true, style: StyleHelp) => ({
    fontStyle: 'italic',
    ...style,
  }),

  //-n not-italic
  //-d Makes the text normal (not italic)
  //-o fontStyle: 'normal'
  'not-italic': (_: true, style: StyleHelp) => ({
    fontStyle: 'normal',
    ...style,
  }),

  //-n uppercase
  //-d Makes the text uppercase
  //-o textTransform: 'uppercase'
  uppercase: (_: true, style: StyleHelp) => ({
    textTransform: 'uppercase',
    ...style,
  }),

  //-n lowercase
  //-d Makes the text lowercase
  //-o textTransform: 'lowercase'
  lowercase: (_: true, style: StyleHelp) => ({
    textTransform: 'lowercase',
    ...style,
  }),

  //-n capitalize
  //-d Makes the text capitalized
  //-o textTransform: 'capitalize'
  capitalize: (_: true, style: StyleHelp) => ({
    textTransform: 'capitalize',
    ...style,
  }),

  //-n normal-case
  //-d Makes the text normal-cased
  //-o textTransform: 'none'
  'normal-case': (_: true, style: StyleHelp) => ({
    textTransform: 'none',
    ...style,
  }),

  //-n font-thin
  //-d Sets the font weight of the text
  //-o fontWeight: '100'
  'font-thin': (_: true, style: StyleHelp) => ({
    fontWeight: '100',
    ...style,
  }),

  //-n font-extralight
  //-d Sets the font weight of the text
  //-o fontWeight: '200'
  'font-extralight': (_: true, style: StyleHelp) => ({
    fontWeight: '200',
    ...style,
  }),

  //-n font-light
  //-d Sets the font weight of the text
  //-o fontWeight: '300'
  'font-light': (_: true, style: StyleHelp) => ({
    fontWeight: '300',
    ...style,
  }),

  //-n font-normal
  //-d Sets the font weight of the text
  //-o fontWeight: '400'
  'font-normal': (_: true, style: StyleHelp) => ({
    fontWeight: '400',
    ...style,
  }),

  //-n font-medium
  //-d Sets the font weight of the text
  //-o fontWeight: '500'
  'font-medium': (_: true, style: StyleHelp) => ({
    fontWeight: '500',
    ...style,
  }),

  //-n font-semibold
  //-d Sets the font weight of the text
  //-o fontWeight: '600'
  'font-semibold': (_: true, style: StyleHelp) => ({
    fontWeight: '600',
    ...style,
  }),

  //-n font-bold
  //-d Sets the font weight of the text
  //-o fontWeight: '700'
  'font-bold': (_: true, style: StyleHelp) => ({
    fontWeight: '700',
    ...style,
  }),

  //-n font-extrabold
  //-d Sets the font weight of the text
  //-o fontWeight: '800'
  'font-extrabold': (_: true, style: StyleHelp) => ({
    fontWeight: '800',
    ...style,
  }),

  //-n font-black
  //-d Sets the font weight of the text
  //-o fontWeight: '900'
  'font-black': (_: true, style: StyleHelp) => ({
    fontWeight: '900',
    ...style,
  }),

  //-n leading
  //-d Sets the line height of the text
  //-i lineHeight: number
  //-o lineHeight: lineHeight
  leading: (lineHeight: number, style: StyleHelp) => ({
    lineHeight,
    ...style,
  }),

  //-n text-left
  //-d Sets the text align of the text
  //-o textAlign: 'left'
  'text-left': (_: true, style: StyleHelp) => ({
    textAlign: 'left',
    ...style,
  }),

  //-n text-center
  //-d Sets the text align of the text
  //-o textAlign: 'center'
  'text-center': (_: true, style: StyleHelp) => ({
    textAlign: 'center',
    ...style,
  }),

  //-n text-right
  //-d Sets the text align of the text
  //-o textAlign: 'right'
  'text-right': (_: true, style: StyleHelp) => ({
    textAlign: 'right',
    ...style,
  }),

  //-n text-justify
  //-d Sets the text align of the text
  //-o textAlign: 'justify'
  'text-justify': (_: true, style: StyleHelp) => ({
    textAlign: 'justify',
    ...style,
  }),

  //-n underline
  //-d Adds an underline to the text
  //-o textDecorationLine: 'underline'
  underline: (_: true, style: StyleHelp) => ({
    textDecorationLine: 'underline',
    ...style,
  }),

  //-n line-through
  //-d Adds a line in the middle of the text
  //-o textDecorationLine: 'line-through'
  'line-through': (_: true, style: StyleHelp) => ({
    textDecorationLine: 'line-through',
    ...style,
  }),

  //-n no-underline
  //-d Removes all lines from the text
  //-o textDecorationLine: 'none'
  'no-underline': (_: true, style: StyleHelp) => ({
    textDecorationLine: 'none',
    ...style,
  }),
};
