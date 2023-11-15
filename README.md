# react-native-alam

A tailwind-like solution for react native

## Installation

```sh
npm install --save react-native-alam
yarn add react-native-alam
pnpm add react-native-alam
bun add react-native-alam
cargo add react-native-alam # wait
```

## Usage

`component.tsx`

```tsx
import { alam, Alam, type Style } from 'react-native-alam';

function MySuperComponent({ style }: { style?: Style }) {
  return (
    <Alam.View style={style}>
      <Alam.Text text-xl text-center>
        Hello World!
      </Alam.Text>
    </Alam.View>
  );
}

export default alam(MySuperComponent);
```

`index.tsx`

```tsx
import MySuperComponent from './component';
import { Alam } from 'react-native-alam';

export default function App() {
  return (
    <Alam.View p={20}>
      <MySuperComponent mt={30} />
    </Alam.View>
  );
}
```

## Advanced Usage

`alam.tsx`

```tsx
import {
  createAlamComponents,
  defaultAlam,
  type ExtendedAlam,
  type Style,
} from 'react-native-alam';

const extended = {
  'custom-extended': (_: true, style: Style) => ({
    color: 'red',
    ...style,
  }),
  ...defaultAlam,
} satisfies ExtendedAlam;

// The default react native components
export const Alam = createAlamComponents(extended);
// To extend own components with custom alam attributes
export const alam = createAlam(extended);
```

`index.tsx`

```tsx
import { Alam } from './alam';

export default function App() {
  return (
    <Alam.View p={20}>
      <Alam.Text mt={30} custom-extended>
        Red Text
      </Alam.Text>
    </Alam.View>
  );
}
```

## With colors

`root.tsx`

```tsx
import { ThemeProvider } from 'react-native-alam';
import { Appearance } from 'react-native';

export const enum Colors {
  Background = 'background',
  Foreground = 'foreground',
  Primary = 'primary',
}

export default function Root({ component }) {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const theme: Record<Colors, string> = isDarkMode
    ? {
        background: '#000000',
        foreground: '#eeeeee',
        primary: '#eee8aa',
      }
    : {
        background: '#ffffff',
        foreground: '#111111',
        primary: '#daa520',
      };

  return <ThemeProvider colors={theme}>{component}</ThemeProvider>;
}
```

`index.tsx`

```tsx
import { Alam } from 'react-native-alam';
import { Colors } from './root';

export default function App() {
  return (
    <Alam.View bg={Colors.Background} p={20}>
      <Alam.Text color={Colors.Primary}>Primary Text</Alam.Text>
      <Alam.Text color={Colors.Foreground}>Foreground Text</Alam.Text>
    </Alam.View>
  );
}
```
