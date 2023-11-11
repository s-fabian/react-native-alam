import type { StyleHelp } from './types';

export default {
  hidden: (_: true, style: StyleHelp) => ({ display: 'none', ...style }),

  // Flex
  flex: (flex: number, style: StyleHelp) => ({ flex, ...style }),
  basis: (flexBasis: number, style: StyleHelp) => ({ flexBasis, ...style }),
  grow: (flexGrow: true | number, style: StyleHelp) => ({
    flexGrow: flexGrow === true ? 1 : flexGrow,
    ...style,
  }),
  shrink: (flexShrink: true | number, style: StyleHelp) => ({
    flexShrink: flexShrink === true ? 1 : flexShrink,
    ...style,
  }),
  'flex-wrap': (_: true, style: StyleHelp) => ({ flexWrap: 'wrap', ...style }),
  'flex-nowrap': (_: true, style: StyleHelp) => ({
    flexWrap: 'nowrap',
    ...style,
  }),

  // Direction
  'flex-row': (_: true, style: StyleHelp) => ({
    flexDirection: 'row',
    ...style,
  }),
  'flex-column': (_: true, style: StyleHelp) => ({
    flexDirection: 'column',
    ...style,
  }),
  'flex-row-rev': (_: true, style: StyleHelp) => ({
    flexDirection: 'row-reverse',
    ...style,
  }),
  'flex-column-rev': (_: true, style: StyleHelp) => ({
    flexDirection: 'column-reverse',
    ...style,
  }),

  // Justify Content
  'justify-start': (_: true, style: StyleHelp) => ({
    justifyContent: 'flex-start',
    ...style,
  }),
  'justify-end': (_: true, style: StyleHelp) => ({
    justifyContent: 'flex-end',
    ...style,
  }),
  'justify-center': (_: true, style: StyleHelp) => ({
    justifyContent: 'center',
    ...style,
  }),
  'justify-between': (_: true, style: StyleHelp) => ({
    justifyContent: 'space-between',
    ...style,
  }),
  'justify-around': (_: true, style: StyleHelp) => ({
    justifyContent: 'space-around',
    ...style,
  }),
  'justify-evenly': (_: true, style: StyleHelp) => ({
    justifyContent: 'space-evenly',
    ...style,
  }),

  // Justify Items
  'justify-items-start': (_: true, style: StyleHelp) => ({
    justifyItems: 'flex-start',
    ...style,
  }),
  'justify-items-end': (_: true, style: StyleHelp) => ({
    justifyItems: 'flex-end',
    ...style,
  }),
  'justify-items-center': (_: true, style: StyleHelp) => ({
    justifyItems: 'center',
    ...style,
  }),

  // Justify Self
  'justify-self-start': (_: true, style: StyleHelp) => ({
    justifySelf: 'flex-start',
    ...style,
  }),
  'justify-self-end': (_: true, style: StyleHelp) => ({
    justifySelf: 'flex-end',
    ...style,
  }),
  'justify-self-center': (_: true, style: StyleHelp) => ({
    justifySelf: 'center',
    ...style,
  }),

  // Align Content
  // flex-start, flex-end, center, stretch, space-between, space-around
  'align-content-start': (_: true, style: StyleHelp) => ({
    alignContent: 'flex-start',
    ...style,
  }),
  'align-content-end': (_: true, style: StyleHelp) => ({
    alignContent: 'flex-end',
    ...style,
  }),
  'align-content-center': (_: true, style: StyleHelp) => ({
    alignContent: 'center',
    ...style,
  }),
  'align-content-stretch': (_: true, style: StyleHelp) => ({
    alignContent: 'stretch',
    ...style,
  }),
  'align-content-between': (_: true, style: StyleHelp) => ({
    alignContent: 'space-between',
    ...style,
  }),
  'align-content-around': (_: true, style: StyleHelp) => ({
    alignContent: 'space-around',
    ...style,
  }),

  // Align Items
  // flex-start, flex-end, center, stretch, baseline
  'items-start': (_: true, style: StyleHelp) => ({
    alignItems: 'flex-start',
    ...style,
  }),
  'items-end': (_: true, style: StyleHelp) => ({
    alignItems: 'flex-end',
    ...style,
  }),
  'items-center': (_: true, style: StyleHelp) => ({
    alignItems: 'center',
    ...style,
  }),
  'items-stretch': (_: true, style: StyleHelp) => ({
    alignItems: 'stretch',
    ...style,
  }),
  'items-baseline': (_: true, style: StyleHelp) => ({
    alignItems: 'baseline',
    ...style,
  }),

  // Align Self
  // auto, flex-start, flex-end, center, stretch, baseline
  'align-self-auto': (_: true, style: StyleHelp) => ({
    alignSelf: 'auto',
    ...style,
  }),
  'align-self-start': (_: true, style: StyleHelp) => ({
    alignSelf: 'flex-start',
    ...style,
  }),
  'align-self-end': (_: true, style: StyleHelp) => ({
    alignSelf: 'flex-end',
    ...style,
  }),
  'align-self-center': (_: true, style: StyleHelp) => ({
    alignSelf: 'center',
    ...style,
  }),
  'align-self-stretch': (_: true, style: StyleHelp) => ({
    alignSelf: 'stretch',
    ...style,
  }),
  'align-self-baseline': (_: true, style: StyleHelp) => ({
    alignSelf: 'baseline',
    ...style,
  }),
} as const;
