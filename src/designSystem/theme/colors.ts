export enum Colors {
  PRIMARY = '#27AE60',

  WHITE = '#FFFFFF',
  BLACK = '#000000',

  // FEEDBACK COLORS
  DANGER = '#EB5757',
  ALERT = '#FAB42C',

  // GRAY SCALE
  GRAY_DARKER = '#2D3C49',
  GRAY_DARK = '#4F4F4F',
  GRAY_MEDIUM = '#828282',
  GRAY_LIGHT = '#BDBDBD',
  GRAY_LIGHTER = '#E0E0E0',
  WHITISH = '#F2F2F2',
}

export type Color =
  | 'primary'
  | 'white'
  | 'black'
  | 'danger'
  | 'alert'
  | 'gray-darker'
  | 'gray-dark'
  | 'gray-medium'
  | 'gray-light'
  | 'gray-lighter'
  | 'whitish';

export const colorMap: { [key in Color]: string } = {
  primary: Colors.PRIMARY,
  white: Colors.WHITE,
  black: Colors.BLACK,
  danger: Colors.DANGER,
  alert: Colors.ALERT,
  'gray-darker': Colors.GRAY_DARKER,
  'gray-dark': Colors.GRAY_DARK,
  'gray-medium': Colors.GRAY_MEDIUM,
  'gray-light': Colors.GRAY_LIGHT,
  'gray-lighter': Colors.GRAY_LIGHTER,
  whitish: Colors.WHITISH,
};

export const defaultTheme = {
  colors: colorMap,
};
