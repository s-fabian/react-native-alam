import type { Colord } from 'colord';

export interface DefaultProps {
  // Changes the text color of an element
  color?: string | Colord;
  // Changes the background color of an element
  bg?: string | Colord;
  // Changes the opacity of an element
  opacity?: number;
  // Add a shadow to the element (android)
  elevation?: number;
  // Add a shadow to the element
  shadow?: true;
  // Add a shadow to the element
  'shadow-md'?: true;
  // Makes an element hidden
  hidden?: true;
  // Changes the item flexibility
  flex?: number;
  // Changes the item flexibility to zero
  'flex-0'?: true;
  // Changes the item flexibility to one
  'flex-1'?: true;
  // Sets the flex-basis property
  'flex-basis'?: number;
  // Sets the flex-grow property
  'flex-grow'?: true | number;
  // Sets the flex-shrink property
  'flex-shrink'?: true | number;
  // Sets wrapping of flex items
  'flex-wrap'?: true;
  // Prevents wrapping of flex items
  'flex-nowrap'?: true;
  // Sets flex direction to row
  'flex-row'?: true;
  // Sets flex direction to column
  'flex-column'?: true;
  // Sets flex direction to row-reverse
  'flex-row-rev'?: true;
  // Sets flex direction to column-reverse
  'flex-column-rev'?: true;
  // Aligns content to the start
  'justify-start'?: true;
  // Aligns content to the end
  'justify-end'?: true;
  // Aligns content to the center
  'justify-center'?: true;
  // Distributes space between items
  'justify-between'?: true;
  // Distributes space around items
  'justify-around'?: true;
  // Distributes space evenly between items
  'justify-evenly'?: true;
  // Aligns items to the start in their line
  'justify-items-start'?: true;
  // Aligns items to the end in their line
  'justify-items-end'?: true;
  // Aligns items to the center in their line
  'justify-items-center'?: true;
  // Aligns the item itself to the start
  'justify-self-start'?: true;
  // Aligns the item itself to the end
  'justify-self-end'?: true;
  // Aligns the item itself to the center
  'justify-self-center'?: true;
  // Aligns content to the start on the cross axis
  'align-content-start'?: true;
  // Aligns content to the end on the cross axis
  'align-content-end'?: true;
  // Aligns content to the center on the cross axis
  'align-content-center'?: true;
  // Stretches the content across the cross axis
  'align-content-stretch'?: true;
  // Distributes space between lines on the cross axis
  'align-content-between'?: true;
  // Distributes space around lines on the cross axis
  'align-content-around'?: true;
  // Aligns items to the start on the cross axis
  'items-start'?: true;
  // Aligns items to the end on the cross axis
  'items-end'?: true;
  // Aligns items to the center on the cross axis
  'items-center'?: true;
  // Stretches items across the cross axis
  'items-stretch'?: true;
  // Aligns items along the baseline
  'items-baseline'?: true;
  // Sets the default alignment for the item
  'align-self-auto'?: true;
  // Sets the default alignment for the item
  'align-self-start'?: true;
  // Sets the default alignment for the item
  'align-self-end'?: true;
  // Sets the default alignment for the item
  'align-self-center'?: true;
  // Sets the default alignment for the item
  'align-self-stretch'?: true;
  // Sets the default alignment for the item
  'align-self-baseline'?: true;
  // Changes the font family
  font?: string;
  // Changes the font size of a text
  text?: number;
  // Changes the font size of a text
  'text-xs'?: true;
  // Changes the font size of a text
  'text-sm'?: true;
  // Changes the font size of a text
  'text-md'?: true;
  // Changes the font size of a text
  'text-lg'?: true;
  // Changes the font size of a text
  'text-xl'?: true;
  // Changes the font size of a text
  'text-2xl'?: true;
  // Changes the font size of a text
  'text-3xl'?: true;
  // Changes the font size of a text
  'text-4xl'?: true;
  // Makes the text italic
  italic?: true;
  // Makes the text normal (not italic)
  'not-italic'?: true;
  // Makes the text uppercase
  uppercase?: true;
  // Makes the text lowercase
  lowercase?: true;
  // Makes the text capitalized
  capitalize?: true;
  // Makes the text normal-cased
  'normal-case'?: true;
  // Sets the font weight of the text
  'font-thin'?: true;
  // Sets the font weight of the text
  'font-extralight'?: true;
  // Sets the font weight of the text
  'font-light'?: true;
  // Sets the font weight of the text
  'font-normal'?: true;
  // Sets the font weight of the text
  'font-medium'?: true;
  // Sets the font weight of the text
  'font-semibold'?: true;
  // Sets the font weight of the text
  'font-bold'?: true;
  // Sets the font weight of the text
  'font-extrabold'?: true;
  // Sets the font weight of the text
  'font-black'?: true;
  // Sets the line height of the text
  leading?: number;
  // Sets the text align of the text
  'text-left'?: true;
  // Sets the text align of the text
  'text-center'?: true;
  // Sets the text align of the text
  'text-right'?: true;
  // Sets the text align of the text
  'text-justify'?: true;
  // Adds an underline to the text
  underline?: true;
  // Adds a line in the middle of the text
  'line-through'?: true;
  // Removes all lines from the text
  'no-underline'?: true;
  // Sets the aspect ratio
  aspect?: number;
  // Makes the element a square
  'aspect-square'?: true;
  // Makes the element video-shaped
  'aspect-video'?: true;
  // Changes the direction to left-to-right
  'dir-ltr'?: true;
  // Changes the direction to right-to-left
  'dir-rtl'?: true;
  // Changes overflow / how the element is measured and displayed
  'overflow-visible'?: true;
  // Changes overflow / how the element is measured and displayed
  'overflow-hidden'?: true;
  // Changes overflow / how the element is measured and displayed
  'overflow-scroll'?: true;
  // Changes the scale of an element
  scale?: number;
  // Changes the scale of an element
  'scale-x'?: number;
  // Changes the scale of an element
  'scale-y'?: number;
  // Sets top, right, bottom, and left to the same value
  inset?: number | `${number}%`;
  // Sets left and right to the same value
  'inset-x'?: number | `${number}%`;
  // Sets top and bottom to the same value
  'inset-y'?: number | `${number}%`;
  // Sets the start position
  start?: number | `${number}%`;
  // Sets the end position
  end?: number | `${number}%`;
  // Sets the left position
  left?: number | `${number}%`;
  // Sets the right position
  right?: number | `${number}%`;
  // Sets the top position
  top?: number | `${number}%`;
  // Sets the bottom position
  bottom?: number | `${number}%`;
  // Sets position to 'absolute'
  absolute?: true;
  // Sets position to 'relative'
  relative?: true;
  // Sets width
  w?: number | `${number}%`;
  // Sets height
  h?: number | `${number}%`;
  // Sets width & height
  area?: number | `${number}%`;
  // Sets width to '100%'
  'w-full'?: true;
  // Sets height to '100%'
  'h-full'?: true;
  // Sets maximum width
  'max-w'?: number | `${number}%`;
  // Sets maximum height
  'max-h'?: number | `${number}%`;
  // Sets minimum width
  'min-w'?: number | `${number}%`;
  // Sets minimum height
  'min-h'?: number | `${number}%`;
  // Sets z-index
  z?: number;
  // Sets padding for all sides
  p?: number | `${number}%` | 'auto';
  // Sets paddingTop
  pt?: number | `${number}%` | 'auto';
  // Sets paddingBottom
  pb?: number | `${number}%` | 'auto';
  // Sets paddingLeft
  pl?: number | `${number}%` | 'auto';
  // Sets paddingRight
  pr?: number | `${number}%` | 'auto';
  // Sets paddingStart
  ps?: number | `${number}%` | 'auto';
  // Sets paddingEnd
  pe?: number | `${number}%` | 'auto';
  // Sets horizontal padding (left and right)
  px?: number | `${number}%` | 'auto';
  // Sets vertical padding (top and bottom)
  py?: number | `${number}%` | 'auto';
  // Sets margin for all sides
  m?: number | `${number}%` | 'auto';
  // Sets margin-top
  mt?: number | `${number}%` | 'auto';
  // Sets margin-bottom
  mb?: number | `${number}%` | 'auto';
  // Sets margin-left
  ml?: number | `${number}%` | 'auto';
  // Sets margin-right
  mr?: number | `${number}%` | 'auto';
  // Sets margin-start
  ms?: number | `${number}%` | 'auto';
  // Sets margin-end
  me?: number | `${number}%` | 'auto';
  // Sets horizontal margin (left and right)
  mx?: number | `${number}%` | 'auto';
  // Sets vertical margin (top and bottom)
  my?: number | `${number}%` | 'auto';
  // Sets the gap between elements
  gap?: number;
  // Sets the gap between columns
  'gap-x'?: number;
  // Sets the gap between rows
  'gap-y'?: number;
  // Sets border radius
  rounded?: true | number;
  // Sets border radius to medium
  'rounded-md'?: true;
  // Sets border radius to large
  'rounded-lg'?: true;
  // Sets border radius to extra large
  'rounded-xl'?: true;
  // Sets border radius to full circle
  'rounded-full'?: true;
  // Sets border radius for the top-left corner
  'rounded-tl'?: number;
  // Sets border radius for the top-right corner
  'rounded-tr'?: number;
  // Sets border radius for the bottom-left corner
  'rounded-bl'?: number;
  // Sets border radius for the bottom-right corner
  'rounded-br'?: number;
  // Sets the width of the border to a specified number or 1
  border?: true | number;
  // Sets the width of the border on the left & right side
  'border-x'?: number;
  // Sets the width of the border on the top & bottom side
  'border-y'?: number;
  // Sets the width of the border on the left side
  'border-l'?: number;
  // Sets the width of the border on the right side
  'border-r'?: number;
  // Sets the width of the border on the top side
  'border-t'?: number;
  // Sets the width of the border on the bottom side
  'border-b'?: number;
  // Sets the color of the border
  'border-color'?: string | Colord;
}
