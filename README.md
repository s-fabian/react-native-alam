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

`component.jsx`

```jsx
import { tailwindify, Tw } from 'react-native-alam';

function MySuperComponent({ style }) {
    return (
        <Tw.View style={style}>
            <Tw.Text text-xl text-center>Hello World!</Tw.Text>
        </Tw.View>
    )
}

export default tailwindify(MySuperComponent);
```

`index.jsx`

```jsx
import MySuperComponent from './component';
import { Tw } from 'react-native-alam';

export default function App() {
    return (
        <Tw.View p={20}>
            <MySuperComponent mt={30} />
        </Tw.View>
    )
}
```
