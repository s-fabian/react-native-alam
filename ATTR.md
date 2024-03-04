# Attributes for `react-native-alam`

Tip: Click the list icon at the to right to search for properties / alams

## Color Utils

### color

Changes the text color of an element

`color: string | Colord`

Changes:

```js
({
  color: colors[color],
  ...styles,
});
```

### bg

Changes the background color of an element

`color: string | Colord`

Changes:

```js
({
  backgroundColor: colors[color],
  ...styles,
});
```

### opacity

Changes the opacity of an element

`opacity: number`

Changes:

```js
({
  opacity: opacity,
  ...styles,
});
```

### shadow

Add a shadow to the element

Changes:

```js
({
  shadowColor: '#000000',
  [shadowOffset.width]: 0,
  [shadowOffset.height]: 2.6,
  shadowOpacity: 0.1,
  shadowRadius: 10.0,
  ...styles,
});
```

### shadow-md

Add a shadow to the element

Changes:

```js
({
  shadowColor: '#000000',
  [shadowOffset.width]: 3,
  [shadowOffset.height]: 3,
  shadowOpacity: 0.12,
  shadowRadius: 5,
  ...styles,
});
```

## Utils for flex & co

### hidden

Makes an element hidden

Changes:

```js
({
  display: 'none',
  ...styles,
});
```

### flex

Changes the item flexibility

`flex: number`

Changes:

```js
({
  flex: flex,
  ...styles,
});
```

### flex-0

Changes the item flexibility to zero

Changes:

```js
({
  flex: 0,
  ...styles,
});
```

### flex-1

Changes the item flexibility to one

Changes:

```js
({
  flex: 1,
  ...styles,
});
```

### flex-basis

Sets the flex-basis property

`flexBasis: number`

Changes:

```js
({
  flexBasis: flexBasis,
  ...styles,
});
```

### flex-grow

Sets the flex-grow property

`flexGrow: true | number`

Changes:

```js
({
  flexGrow: flexGrow,
  ...styles,
});
```

### flex-shrink

Sets the flex-shrink property

`flexShrink: true | number`

Changes:

```js
({
  flexShrink: flexShrink,
  ...styles,
});
```

### flex-wrap

Sets wrapping of flex items

Changes:

```js
({
  flexWrap: 'wrap',
  ...styles,
});
```

### flex-nowrap

Prevents wrapping of flex items

Changes:

```js
({
  flexWrap: 'nowrap',
  ...styles,
});
```

### flex-row

Sets flex direction to row

Changes:

```js
({
  flexDirection: 'row',
  ...styles,
});
```

### flex-column

Sets flex direction to column

Changes:

```js
({
  flexDirection: 'column',
  ...styles,
});
```

### flex-row-rev

Sets flex direction to row-reverse

Changes:

```js
({
  flexDirection: 'row-reverse',
  ...styles,
});
```

### flex-column-rev

Sets flex direction to column-reverse

Changes:

```js
({
  flexDirection: 'column-reverse',
  ...styles,
});
```

### justify-start

Aligns content to the start

Changes:

```js
({
  justifyContent: 'flex-start',
  ...styles,
});
```

### justify-end

Aligns content to the end

Changes:

```js
({
  justifyContent: 'flex-end',
  ...styles,
});
```

### justify-center

Aligns content to the center

Changes:

```js
({
  justifyContent: 'center',
  ...styles,
});
```

### justify-between

Distributes space between items

Changes:

```js
({
  justifyContent: 'space-between',
  ...styles,
});
```

### justify-around

Distributes space around items

Changes:

```js
({
  justifyContent: 'space-around',
  ...styles,
});
```

### justify-evenly

Distributes space evenly between items

Changes:

```js
({
  justifyContent: 'space-evenly',
  ...styles,
});
```

### justify-items-start

Aligns items to the start in their line

Changes:

```js
({
  justifyItems: 'flex-start',
  ...styles,
});
```

### justify-items-end

Aligns items to the end in their line

Changes:

```js
({
  justifyItems: 'flex-end',
  ...styles,
});
```

### justify-items-center

Aligns items to the center in their line

Changes:

```js
({
  justifyItems: 'center',
  ...styles,
});
```

### justify-self-start

Aligns the item itself to the start

Changes:

```js
({
  justifySelf: 'flex-start',
  ...styles,
});
```

### justify-self-end

Aligns the item itself to the end

Changes:

```js
({
  justifySelf: 'flex-end',
  ...styles,
});
```

### justify-self-center

Aligns the item itself to the center

Changes:

```js
({
  justifySelf: 'center',
  ...styles,
});
```

### align-content-start

Aligns content to the start on the cross axis

Changes:

```js
({
  alignContent: 'flex-start',
  ...styles,
});
```

### align-content-end

Aligns content to the end on the cross axis

Changes:

```js
({
  alignContent: 'flex-end',
  ...styles,
});
```

### align-content-center

Aligns content to the center on the cross axis

Changes:

```js
({
  alignContent: 'center',
  ...styles,
});
```

### align-content-stretch

Stretches the content across the cross axis

Changes:

```js
({
  alignContent: 'stretch',
  ...styles,
});
```

### align-content-between

Distributes space between lines on the cross axis

Changes:

```js
({
  alignContent: 'space-between',
  ...styles,
});
```

### align-content-around

Distributes space around lines on the cross axis

Changes:

```js
({
  alignContent: 'space-around',
  ...styles,
});
```

### items-start

Aligns items to the start on the cross axis

Changes:

```js
({
  alignItems: 'flex-start',
  ...styles,
});
```

### items-end

Aligns items to the end on the cross axis

Changes:

```js
({
  alignItems: 'flex-end',
  ...styles,
});
```

### items-center

Aligns items to the center on the cross axis

Changes:

```js
({
  alignItems: 'center',
  ...styles,
});
```

### items-stretch

Stretches items across the cross axis

Changes:

```js
({
  alignItems: 'stretch',
  ...styles,
});
```

### items-baseline

Aligns items along the baseline

Changes:

```js
({
  alignItems: 'baseline',
  ...styles,
});
```

### align-self-auto

Sets the default alignment for the item

Changes:

```js
({
  alignSelf: 'auto',
  ...styles,
});
```

### align-self-start

Sets the default alignment for the item

Changes:

```js
({
  alignSelf: 'start',
  ...styles,
});
```

### align-self-end

Sets the default alignment for the item

Changes:

```js
({
  alignSelf: 'end',
  ...styles,
});
```

### align-self-center

Sets the default alignment for the item

Changes:

```js
({
  alignSelf: 'center',
  ...styles,
});
```

### align-self-stretch

Sets the default alignment for the item

Changes:

```js
({
  alignSelf: 'stretch',
  ...styles,
});
```

### align-self-baseline

Sets the default alignment for the item

Changes:

```js
({
  alignSelf: 'baseline',
  ...styles,
});
```

## Utils for texts

### text

Changes the font size of a text

`size: number`

Changes:

```js
({
  fontSize: size,
  ...styles,
});
```

### text-xs

Changes the font size of a text

Changes:

```js
({
  fontSize: 12,
  ...styles,
});
```

### text-sm

Changes the font size of a text

Changes:

```js
({
  fontSize: 14,
  ...styles,
});
```

### text-md

Changes the font size of a text

Changes:

```js
({
  fontSize: 16,
  ...styles,
});
```

### text-lg

Changes the font size of a text

Changes:

```js
({
  fontSize: 20,
  ...styles,
});
```

### text-xl

Changes the font size of a text

Changes:

```js
({
  fontSize: 24,
  ...styles,
});
```

### text-2xl

Changes the font size of a text

Changes:

```js
({
  fontSize: 30,
  ...styles,
});
```

### text-3xl

Changes the font size of a text

Changes:

```js
({
  fontSize: 40,
  ...styles,
});
```

### text-4xl

Changes the font size of a text

Changes:

```js
({
  fontSize: 50,
  ...styles,
});
```

### italic

Makes the text italic

Changes:

```js
({
  fontStyle: 'italic',
  ...styles,
});
```

### not-italic

Makes the text normal (not italic)

Changes:

```js
({
  fontStyle: 'normal',
  ...styles,
});
```

### uppercase

Makes the text uppercase

Changes:

```js
({
  textTransform: 'uppercase',
  ...styles,
});
```

### lowercase

Makes the text lowercase

Changes:

```js
({
  textTransform: 'lowercase',
  ...styles,
});
```

### capitalize

Makes the text capitalized

Changes:

```js
({
  textTransform: 'capitalize',
  ...styles,
});
```

### normal-case

Makes the text normal-cased

Changes:

```js
({
  textTransform: 'none',
  ...styles,
});
```

### font-thin

Sets the font weight of the text

Changes:

```js
({
  fontWeight: '100',
  ...styles,
});
```

### font-extralight

Sets the font weight of the text

Changes:

```js
({
  fontWeight: '200',
  ...styles,
});
```

### font-light

Sets the font weight of the text

Changes:

```js
({
  fontWeight: '300',
  ...styles,
});
```

### font-normal

Sets the font weight of the text

Changes:

```js
({
  fontWeight: '400',
  ...styles,
});
```

### font-medium

Sets the font weight of the text

Changes:

```js
({
  fontWeight: '500',
  ...styles,
});
```

### font-semibold

Sets the font weight of the text

Changes:

```js
({
  fontWeight: '600',
  ...styles,
});
```

### font-bold

Sets the font weight of the text

Changes:

```js
({
  fontWeight: '700',
  ...styles,
});
```

### font-extrabold

Sets the font weight of the text

Changes:

```js
({
  fontWeight: '800',
  ...styles,
});
```

### font-black

Sets the font weight of the text

Changes:

```js
({
  fontWeight: '900',
  ...styles,
});
```

### leading

Sets the line height of the text

`lineHeight: number`

Changes:

```js
({
  lineHeight: lineHeight,
  ...styles,
});
```

### text-left

Sets the text align of the text

Changes:

```js
({
  textAlign: 'left',
  ...styles,
});
```

### text-center

Sets the text align of the text

Changes:

```js
({
  textAlign: 'center',
  ...styles,
});
```

### text-right

Sets the text align of the text

Changes:

```js
({
  textAlign: 'right',
  ...styles,
});
```

### text-justify

Sets the text align of the text

Changes:

```js
({
  textAlign: 'justify',
  ...styles,
});
```

### underline

Adds an underline to the text

Changes:

```js
({
  textDecorationLine: 'underline',
  ...styles,
});
```

### line-through

Adds a line in the middle of the text

Changes:

```js
({
  textDecorationLine: 'line-through',
  ...styles,
});
```

### no-underline

Removes all lines from the text

Changes:

```js
({
  textDecorationLine: 'none',
  ...styles,
});
```

## Other Utils

### aspect

Sets the aspect ratio

`aspectRatio: number`

Changes:

```js
({
  aspectRatio: aspectRatio,
  ...styles,
});
```

### aspect-square

Makes the element a square

Changes:

```js
({
  aspectRatio: 1,
  ...styles,
});
```

### aspect-video

Makes the element video-shaped

Changes:

```js
({
  aspectRatio: 16,
  ...styles,
});
```

### dir-ltr

Changes the direction to left-to-right

Changes:

```js
({
  direction: 'ltr',
  ...styles,
});
```

### dir-rtl

Changes the direction to right-to-left

Changes:

```js
({
  direction: 'rtl',
  ...styles,
});
```

### overflow-visible

Changes overflow / how the element is measured and displayed

Changes:

```js
({
  overflow: 'visible',
  ...styles,
});
```

### overflow-hidden

Changes overflow / how the element is measured and displayed

Changes:

```js
({
  overflow: 'hidden',
  ...styles,
});
```

### overflow-scroll

Changes overflow / how the element is measured and displayed

Changes:

```js
({
  overflow: 'scroll',
  ...styles,
});
```

### scale

Changes the scale of an element

`scale: number`

Changes:

```js
({
  transform: [...transform, { scale: scale }],
  ...styles,
});
```

### scale-x

Changes the scale of an element

`scaleX: number`

Changes:

```js
({
  transform: [...transform, { scaleX: scaleX }],
  ...styles,
});
```

### scale-y

Changes the scale of an element

`scaleY: number`

Changes:

```js
({
  transform: [...transform, { scaleY: scaleY }],
  ...styles,
});
```

## Position & Size Utils

### inset

Sets top, right, bottom, and left to the same value

``inset: number | `${number}%```

Changes:

```js
({
  top: inset,
  right: inset,
  bottom: inset,
  left: inset,
  ...styles,
});
```

### inset-x

Sets left and right to the same value

``insetX: number | `${number}%```

Changes:

```js
({
  left: insetX,
  right: insetX,
  ...styles,
});
```

### inset-y

Sets top and bottom to the same value

``insetY: number | `${number}%```

Changes:

```js
({
  top: insetY,
  bottom: insetY,
  ...styles,
});
```

### start

Sets the start position

``start: number | `${number}%```

Changes:

```js
({
  start: start,
  ...styles,
});
```

### end

Sets the end position

``end: number | `${number}%```

Changes:

```js
({
  end: end,
  ...styles,
});
```

### left

Sets the left position

``left: number | `${number}%```

Changes:

```js
({
  left: left,
  ...styles,
});
```

### right

Sets the right position

``right: number | `${number}%```

Changes:

```js
({
  right: right,
  ...styles,
});
```

### top

Sets the top position

``top: number | `${number}%```

Changes:

```js
({
  top: top,
  ...styles,
});
```

### bottom

Sets the bottom position

``bottom: number | `${number}%```

Changes:

```js
({
  bottom: bottom,
  ...styles,
});
```

### absolute

Sets position to 'absolute'

Changes:

```js
({
  position: 'absolute',
  ...styles,
});
```

### relative

Sets position to 'relative'

Changes:

```js
({
  position: 'relative',
  ...styles,
});
```

### w

Sets width

``width: number | `${number}%```

Changes:

```js
({
  width: width,
  ...styles,
});
```

### h

Sets height

``height: number | `${number}%```

Changes:

```js
({
  height: height,
  ...styles,
});
```

### area

Sets width & height

``area: number | `${number}%```

Changes:

```js
({
  width: area,
  height: area,
  ...styles,
});
```

### w-full

Sets width to '100%'

Changes:

```js
({
  width: '100%',
  ...styles,
});
```

### h-full

Sets height to '100%'

Changes:

```js
({
  height: '100%',
  ...styles,
});
```

### max-w

Sets maximum width

``maxWidth: number | `${number}%```

Changes:

```js
({
  maxWidth: maxWidth,
  ...styles,
});
```

### max-h

Sets maximum height

``maxHeight: number | `${number}%```

Changes:

```js
({
  maxHeight: maxHeight,
  ...styles,
});
```

### min-w

Sets minimum width

``minWidth: number | `${number}%```

Changes:

```js
({
  minWidth: minWidth,
  ...styles,
});
```

### min-h

Sets minimum height

``minHeight: number | `${number}%```

Changes:

```js
({
  minHeight: minHeight,
  ...styles,
});
```

### z

Sets z-index

`zIndex: number`

Changes:

```js
({
  zIndex: zIndex,
  ...styles,
});
```

## Utils for margin, padding & co

### p

Sets padding for all sides

``padding: number | `${number}%```

Changes:

```js
({
  padding: padding,
  ...styles,
});
```

### pt

Sets paddingTop

``paddingTop: number | `${number}%```

Changes:

```js
({
  paddingTop: paddingTop,
  ...styles,
});
```

### pb

Sets paddingBottom

``paddingBottom: number | `${number}%```

Changes:

```js
({
  paddingBottom: paddingBottom,
  ...styles,
});
```

### pl

Sets paddingLeft

``paddingLeft: number | `${number}%```

Changes:

```js
({
  paddingLeft: paddingLeft,
  ...styles,
});
```

### pr

Sets paddingRight

``paddingRight: number | `${number}%```

Changes:

```js
({
  paddingRight: paddingRight,
  ...styles,
});
```

### ps

Sets paddingStart

``paddingStart: number | `${number}%```

Changes:

```js
({
  paddingStart: paddingStart,
  ...styles,
});
```

### pe

Sets paddingEnd

``paddingEnd: number | `${number}%```

Changes:

```js
({
  paddingEnd: paddingEnd,
  ...styles,
});
```

### px

Sets horizontal padding (left and right)

``paddingHorizontal: number | `${number}%```

Changes:

```js
({
  paddingHorizontal: paddingHorizontal,
  ...styles,
});
```

### py

Sets vertical padding (top and bottom)

``paddingVertical: number | `${number}%```

Changes:

```js
({
  paddingVertical: paddingVertical,
  ...styles,
});
```

### m

Sets margin for all sides

``margin: number | `${number}%```

Changes:

```js
({
  margin: margin,
  ...styles,
});
```

### mt

Sets margin-top

``marginTop: number | `${number}%```

Changes:

```js
({
  marginTop: marginTop,
  ...styles,
});
```

### mb

Sets margin-bottom

``marginBottom: number | `${number}%```

Changes:

```js
({
  marginBottom: marginBottom,
  ...styles,
});
```

### ml

Sets margin-left

``marginLeft: number | `${number}%```

Changes:

```js
({
  marginLeft: marginLeft,
  ...styles,
});
```

### mr

Sets margin-right

``marginRight: number | `${number}%```

Changes:

```js
({
  marginRight: marginRight,
  ...styles,
});
```

### ms

Sets margin-start

``marginStart: number | `${number}%```

Changes:

```js
({
  marginStart: marginStart,
  ...styles,
});
```

### me

Sets margin-end

``marginEnd: number | `${number}%```

Changes:

```js
({
  marginEnd: marginEnd,
  ...styles,
});
```

### mx

Sets horizontal margin (left and right)

``marginHorizontal: number | `${number}%```

Changes:

```js
({
  marginHorizontal: marginHorizontal,
  ...styles,
});
```

### my

Sets vertical margin (top and bottom)

``marginVertical: number | `${number}%```

Changes:

```js
({
  marginVertical: marginVertical,
  ...styles,
});
```

### gap

Sets the gap between elements

`gap: number`

Changes:

```js
({
  gap: gap,
  ...styles,
});
```

### gap-x

Sets the gap between columns

`columnGap: number`

Changes:

```js
({
  columnGap: columnGap,
  ...styles,
});
```

### gap-y

Sets the gap between rows

`rowGap: number`

Changes:

```js
({
  rowGap: rowGap,
  ...styles,
});
```

## Utils for borders

### rounded

Sets border radius

`borderRadius: true | number`

Changes:

```js
({
  borderRadius: borderRadius,
  ...styles,
});
```

### rounded-md

Sets border radius to medium

Changes:

```js
({
  borderRadius: 15,
  ...styles,
});
```

### rounded-lg

Sets border radius to large

Changes:

```js
({
  borderRadius: 20,
  ...styles,
});
```

### rounded-xl

Sets border radius to extra large

Changes:

```js
({
  borderRadius: 30,
  ...styles,
});
```

### rounded-full

Sets border radius to full circle

Changes:

```js
({
  borderRadius: 9999,
  ...styles,
});
```

### rounded-tl

Sets border radius for the top-left corner

`borderTopLeftRadius: number`

Changes:

```js
({
  borderTopLeftRadius: borderTopLeftRadius,
  ...styles,
});
```

### rounded-tr

Sets border radius for the top-right corner

`borderTopRightRadius: number`

Changes:

```js
({
  borderTopRightRadius: borderTopRightRadius,
  ...styles,
});
```

### rounded-bl

Sets border radius for the bottom-left corner

`borderBottomLeftRadius: number`

Changes:

```js
({
  borderBottomLeftRadius: borderBottomLeftRadius,
  ...styles,
});
```

### rounded-br

Sets border radius for the bottom-right corner

`borderBottomRightRadius: number`

Changes:

```js
({
  borderBottomRightRadius: borderBottomRightRadius,
  ...styles,
});
```

### border

Sets the width of the border to a specified number or 1

`borderWidth: true | number`

Changes:

```js
({
  borderWidth: borderWidth,
  ...styles,
});
```

### border-x

Sets the width of the border on the left & right side

`borderWidth: number`

Changes:

```js
({
  borderLeftWidth: borderWidth,
  borderRightWidth: borderWidth,
  ...styles,
});
```

### border-y

Sets the width of the border on the top & bottom side

`borderWidth: number`

Changes:

```js
({
  borderTopWidth: borderWidth,
  borderBottomWidth: borderWidth,
  ...styles,
});
```

### border-l

Sets the width of the border on the left side

`borderLeftWidth: number`

Changes:

```js
({
  borderLeftWidth: borderLeftWidth,
  ...styles,
});
```

### border-r

Sets the width of the border on the right side

`borderRightWidth: number`

Changes:

```js
({
  borderRightWidth: borderRightWidth,
  ...styles,
});
```

### border-t

Sets the width of the border on the top side

`borderTopWidth: number`

Changes:

```js
({
  borderTopWidth: borderTopWidth,
  ...styles,
});
```

### border-b

Sets the width of the border on the bottom side

`borderBottomWidth: number`

Changes:

```js
({
  borderBottomWidth: borderBottomWidth,
  ...styles,
});
```

### border-color

Sets the color of the border

`borderColor: string | Colord`

Changes:

```js
({
  borderColor: colors[borderColor],
  ...styles,
});
```
