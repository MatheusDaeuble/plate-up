import { IconName } from '../../atoms/Icon/types';

export interface InputProps {
  variant?: 'filled';
  placeholder?: string;
  value?: string;
  caption?: string;
  label?: string;
  icon?: IconName;
  type?: 'normal' | 'password';
  secureTextEntry?: boolean;
  onChangeText: (value: string) => void;
  editable?: boolean;
}
