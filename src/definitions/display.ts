import type { StyleHelp } from '../types';

export default {
  //-n hidden
  //-d Makes an element hidden
  //-o display: 'none'
  hidden: (_: true, style: StyleHelp) => ({ display: 'none', ...style }),

  //-n flex
  //-d Changes the item flexibility
  //-i flex: number
  //-o flex: flex
  flex: (flex: number, style: StyleHelp) => ({ flex, ...style }),

  //-n flex-0
  //-d Changes the item flexibility to zero
  //-o flex: 0
  'flex-0': (_: true, style: StyleHelp) => ({ flex: 0, ...style }),

  //-n flex-1
  //-d Changes the item flexibility to one
  //-o flex: 1
  'flex-1': (_: true, style: StyleHelp) => ({ flex: 1, ...style }),

  //-n basis
  //-d Sets the flex-basis property
  //-i flexBasis: number
  //-o flexBasis: flexBasis
  basis: (flexBasis: number, style: StyleHelp) => ({ flexBasis, ...style }),

  //-n grow
  //-d Sets the flex-grow property
  //-i flexGrow: true | number
  //-o flexGrow: flexGrow === true ? 1 : flexGrow
  grow: (flexGrow: true | number, style: StyleHelp) => ({
    flexGrow: flexGrow === true ? 1 : flexGrow,
    ...style,
  }),

  //-n shrink
  //-d Sets the flex-shrink property
  //-i flexShrink: true | number
  //-o flexShrink: flexShrink === true ? 1 : flexShrink
  shrink: (flexShrink: true | number, style: StyleHelp) => ({
    flexShrink: flexShrink === true ? 1 : flexShrink,
    ...style,
  }),

  //-n flex-wrap
  //-d Sets wrapping of flex items
  //-o flexWrap: 'wrap'
  'flex-wrap': (_: true, style: StyleHelp) => ({ flexWrap: 'wrap', ...style }),

  //-n flex-nowrap
  //-d Prevents wrapping of flex items
  //-o flexWrap: 'nowrap'
  'flex-nowrap': (_: true, style: StyleHelp) => ({
    flexWrap: 'nowrap',
    ...style,
  }),

  //-n flex-row
  //-d Sets flex direction to row
  //-o flexDirection: 'row'
  'flex-row': (_: true, style: StyleHelp) => ({
    flexDirection: 'row',
    ...style,
  }),

  //-n flex-column
  //-d Sets flex direction to column
  //-o flexDirection: 'column'
  'flex-column': (_: true, style: StyleHelp) => ({
    flexDirection: 'column',
    ...style,
  }),

  //-n flex-row-rev
  //-d Sets flex direction to row-reverse
  //-o flexDirection: 'row-reverse'
  'flex-row-rev': (_: true, style: StyleHelp) => ({
    flexDirection: 'row-reverse',
    ...style,
  }),

  //-n flex-column-rev
  //-d Sets flex direction to column-reverse
  //-o flexDirection: 'column-reverse'
  'flex-column-rev': (_: true, style: StyleHelp) => ({
    flexDirection: 'column-reverse',
    ...style,
  }),

  //-n justify-start
  //-d Aligns content to the start
  //-o justifyContent: 'flex-start'
  'justify-start': (_: true, style: StyleHelp) => ({
    justifyContent: 'flex-start',
    ...style,
  }),

  //-n justify-end
  //-d Aligns content to the end
  //-o justifyContent: 'flex-end'
  'justify-end': (_: true, style: StyleHelp) => ({
    justifyContent: 'flex-end',
    ...style,
  }),

  //-n justify-center
  //-d Aligns content to the center
  //-o justifyContent: 'center'
  'justify-center': (_: true, style: StyleHelp) => ({
    justifyContent: 'center',
    ...style,
  }),

  //-n justify-between
  //-d Distributes space between items
  //-o justifyContent: 'space-between'
  'justify-between': (_: true, style: StyleHelp) => ({
    justifyContent: 'space-between',
    ...style,
  }),

  //-n justify-around
  //-d Distributes space around items
  //-o justifyContent: 'space-around'
  'justify-around': (_: true, style: StyleHelp) => ({
    justifyContent: 'space-around',
    ...style,
  }),

  //-n justify-evenly
  //-d Distributes space evenly between items
  //-o justifyContent: 'space-evenly'
  'justify-evenly': (_: true, style: StyleHelp) => ({
    justifyContent: 'space-evenly',
    ...style,
  }),

  //-n justify-items-start
  //-d Aligns items to the start in their line
  //-o justifyItems: 'flex-start'
  'justify-items-start': (_: true, style: StyleHelp) => ({
    justifyItems: 'flex-start',
    ...style,
  }),

  //-n justify-items-end
  //-d Aligns items to the end in their line
  //-o justifyItems: 'flex-end'
  'justify-items-end': (_: true, style: StyleHelp) => ({
    justifyItems: 'flex-end',
    ...style,
  }),

  //-n justify-items-center
  //-d Aligns items to the center in their line
  //-o justifyItems: 'center'
  'justify-items-center': (_: true, style: StyleHelp) => ({
    justifyItems: 'center',
    ...style,
  }),

  //-n justify-self-start
  //-d Aligns the item itself to the start
  //-o justifySelf: 'flex-start'
  'justify-self-start': (_: true, style: StyleHelp) => ({
    justifySelf: 'flex-start',
    ...style,
  }),

  //-n justify-self-end
  //-d Aligns the item itself to the end
  //-o justifySelf: 'flex-end'
  'justify-self-end': (_: true, style: StyleHelp) => ({
    justifySelf: 'flex-end',
    ...style,
  }),

  //-n justify-self-center
  //-d Aligns the item itself to the center
  //-o justifySelf: 'center'
  'justify-self-center': (_: true, style: StyleHelp) => ({
    justifySelf: 'center',
    ...style,
  }),

  //-n align-content-start
  //-d Aligns content to the start on the cross axis
  //-o alignContent: 'flex-start'
  'align-content-start': (_: true, style: StyleHelp) => ({
    alignContent: 'flex-start',
    ...style,
  }),

  //-n align-content-end
  //-d Aligns content to the end on the cross axis
  //-o alignContent: 'flex-end'
  'align-content-end': (_: true, style: StyleHelp) => ({
    alignContent: 'flex-end',
    ...style,
  }),

  //-n align-content-center
  //-d Aligns content to the center on the cross axis
  //-o alignContent: 'center'
  'align-content-center': (_: true, style: StyleHelp) => ({
    alignContent: 'center',
    ...style,
  }),

  //-n align-content-stretch
  //-d Stretches the content across the cross axis
  //-o alignContent: 'stretch'
  'align-content-stretch': (_: true, style: StyleHelp) => ({
    alignContent: 'stretch',
    ...style,
  }),

  //-n align-content-between
  //-d Distributes space between lines on the cross axis
  //-o alignContent: 'space-between'
  'align-content-between': (_: true, style: StyleHelp) => ({
    alignContent: 'space-between',
    ...style,
  }),

  //-n align-content-around
  //-d Distributes space around lines on the cross axis
  //-o alignContent: 'space-around'
  'align-content-around': (_: true, style: StyleHelp) => ({
    alignContent: 'space-around',
    ...style,
  }),

  //-n items-start
  //-d Aligns items to the start on the cross axis
  //-o alignItems: 'flex-start'
  'items-start': (_: true, style: StyleHelp) => ({
    alignItems: 'flex-start',
    ...style,
  }),

  //-n items-end
  //-d Aligns items to the end on the cross axis
  //-o alignItems: 'flex-end'
  'items-end': (_: true, style: StyleHelp) => ({
    alignItems: 'flex-end',
    ...style,
  }),

  //-n items-center
  //-d Aligns items to the center on the cross axis
  //-o alignItems: 'center'
  'items-center': (_: true, style: StyleHelp) => ({
    alignItems: 'center',
    ...style,
  }),

  //-n items-stretch
  //-d Stretches items across the cross axis
  //-o alignItems: 'stretch'
  'items-stretch': (_: true, style: StyleHelp) => ({
    alignItems: 'stretch',
    ...style,
  }),

  //-n items-baseline
  //-d Aligns items along the baseline
  //-o alignItems: 'baseline'
  'items-baseline': (_: true, style: StyleHelp) => ({
    alignItems: 'baseline',
    ...style,
  }),

  //-n align-self-auto
  //-d Sets the default alignment for the item
  //-o alignSelf: 'auto'
  'align-self-auto': (_: true, style: StyleHelp) => ({
    alignSelf: 'auto',
    ...style,
  }),

  //-n align-self-start
  //-d Sets the default alignment for the item
  //-o alignSelf: 'start'
  'align-self-start': (_: true, style: StyleHelp) => ({
    alignSelf: 'flex-start',
    ...style,
  }),

  //-n align-self-end
  //-d Sets the default alignment for the item
  //-o alignSelf: 'end'
  'align-self-end': (_: true, style: StyleHelp) => ({
    alignSelf: 'flex-end',
    ...style,
  }),

  //-n align-self-center
  //-d Sets the default alignment for the item
  //-o alignSelf: 'center'
  'align-self-center': (_: true, style: StyleHelp) => ({
    alignSelf: 'center',
    ...style,
  }),

  //-n align-self-stretch
  //-d Sets the default alignment for the item
  //-o alignSelf: 'stretch'
  'align-self-stretch': (_: true, style: StyleHelp) => ({
    alignSelf: 'stretch',
    ...style,
  }),

  //-n align-self-baseline
  //-d Sets the default alignment for the item
  //-o alignSelf: 'baseline'
  'align-self-baseline': (_: true, style: StyleHelp) => ({
    alignSelf: 'baseline',
    ...style,
  }),
} as const;
