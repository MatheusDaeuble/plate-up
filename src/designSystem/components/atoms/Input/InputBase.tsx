import React, { useRef, useState } from 'react';
import { colorMap } from 'designSystem/theme/colors';
import Icon from '../../atoms/Icon';
import { InputProps } from './types';
import {
  InputStyled,
  Container,
  InputContainer,
  Content,
  Label,
  Caption,
} from './styles';
import { TextInput } from 'react-native';

const InputBase = ({
  variant = 'filled',
  label,
  value,
  icon,
  caption = '',
  editable = true,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  return (
    <Container>
      <Label isFocused={isFocused} variant="subtitle4" color="gray-medium">
        {label}
      </Label>
      <InputContainer isFocused={isFocused} editable={editable}>
        {icon && (
          <Icon
            name={icon}
            color={editable && (isFocused || !!value) ? 'primary' : undefined}
          />
        )}
        <Content>
          <InputStyled
            ref={inputRef}
            value={value}
            editable={editable}
            placeholderTextColor={colorMap['gray-medium']}
            variant={variant}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
        </Content>
      </InputContainer>
      {!!caption && <Caption>{caption}</Caption>}
    </Container>
  );
};

export default InputBase;
