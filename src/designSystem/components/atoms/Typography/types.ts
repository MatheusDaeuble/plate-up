import { TextProps, TextStyle } from 'react-native';
import { Color } from 'designSystem/theme/colors';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle4'
  | 'paragraph1'
  | 'paragraph2'
  | 'body2'
  | 'caption1'
  | 'caption2';

export type TypographyColor = Color;

export type TypographyAlign = TextStyle['textAlign'];

export type TypographyProps = {
  variant: TypographyVariant;
  color?: TypographyColor;
  align?: TypographyAlign;
  children: React.ReactNode;
  onPress?: () => void;
} & TextProps;
