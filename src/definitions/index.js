import { default as colors } from './colors';

import { default as display } from './display';

import { default as font } from './font';

import { default as other } from './other';

import { default as position } from './position';

import { default as spacing } from './spacing';
import { default as border } from './border';

export default {
  ...colors,
  ...font,
  ...spacing,
  ...display,
  ...position,
  ...border,
  ...other,
};
