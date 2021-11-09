import React from 'react';
import { Container, Label } from './styles';

export interface ButtonProps {
  label: string;
  variant?: 'filled';
  color?: 'primary';
  onPress?: () => void;
  disabled?: boolean;
}

const Button = ({
  label,
  variant = 'filled',
  color = 'primary',
  disabled = false,
  onPress = () => {},
  ...props
}: ButtonProps) => {
  return (
    <Container
      onPress={onPress}
      disabled={disabled}
      color={color}
      variant={variant}
      {...props}
    >
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
