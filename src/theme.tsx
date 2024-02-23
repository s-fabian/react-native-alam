import React from 'react';
import type { Colors, DynColor, DynColors } from './types';

const ThemeContext = React.createContext<DynColors>({
  resolve(_) {
    return undefined;
  },
} as DynColors);

export function ThemeProvider<T extends Colors = Colors>({
  children,
  colors,
}: {
  children?: any;
  colors: T;
}) {
  const dynColors: DynColors = {
    resolve(arg: DynColor) {
      if (typeof arg === 'string') {
        return colors[arg];
      } else if (typeof arg === 'object') {
        return arg.toHex();
      } else {
        return undefined;
      }
    },
    ...colors,
  };

  return (
    <ThemeContext.Provider value={dynColors}>{children}</ThemeContext.Provider>
  );
}

export function useTheme<T extends Colors = Colors>(): T {
  return React.useContext(ThemeContext) as unknown as T;
}
