import { Color } from 'designSystem/theme/colors';

export type IconName =
  | 'menu'
  | 'home'
  | 'person'
  | 'exit-outline'
  | 'person-outline'
  | 'location'
  | 'email'
  | 'arrow-left'
  | 'cry'
  | 'search'
  | 'check-outline'
  | 'lock';

export type IconColor = Color;

export type IconProps = {
  name: IconName;
  color?: IconColor;
  size?: number;
  onPress?: () => void;
};
