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
import { alam, Alam } from 'react-native-alam';

function MySuperComponent({ style }) {
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

`index.jsx`

```jsx
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
