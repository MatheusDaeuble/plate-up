import React from 'react';
import Icon from '../Icon';
import { colorMap } from 'designSystem/theme/colors';

import { InputStyled, Container } from './styles';

export interface SearchInputProps {
  variant?: 'filled';
  placeholder?: string;
  value?: string;
  onChangeText: (value: string) => void;
}

const SearchInput = ({ ...props }: SearchInputProps) => {
  return (
    <Container>
      <InputStyled placeholderTextColor={colorMap['gray-medium']} {...props} />
      <Icon name="search" color="primary" size={28} />
    </Container>
  );
};

export default SearchInput;
