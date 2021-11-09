import React from 'react';
import { Text } from './styles';
import { TypographyProps } from './types';

const Typography = ({
  variant = 'body2',
  color = 'gray-dark',
  align = 'left',
  children,
  ...props
}: TypographyProps) => (
  <Text variant={variant} color={color} align={align} {...props}>
    {children}
  </Text>
);

export default Typography;
