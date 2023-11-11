import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type Style = any;
export type StyleHelp = Style | ImageStyle | TextStyle | ViewStyle;
export type Color = string;
export type Colors = Record<Color, string>;
