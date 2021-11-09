import { ButtonProps } from '../../atoms/Button';
import { IconProps } from '../../atoms/Icon/types';

export interface ModalProps {
  isVisible: boolean;
  icon?: IconProps['name'];
  title?: string;
  description?: string;
  onClose?: () => void;
  button: ButtonProps;
}
