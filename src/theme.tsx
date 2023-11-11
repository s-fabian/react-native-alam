import React from 'react';
import type { Colors } from './types';

const ThemeContext = React.createContext<Colors>({});

export function ThemeProvider<T extends Colors = Colors>({
  children,
  colors,
}: {
  children?: any;
  colors: T;
}) {
  return (
    <ThemeContext.Provider value={colors}>{children}</ThemeContext.Provider>
  );
}

export function useTheme<T extends Colors = Colors>(): T {
  return React.useContext(ThemeContext) as T;
}
