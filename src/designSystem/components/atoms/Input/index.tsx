import React from 'react';
import { InputProps } from './types';
import InputBase from './InputBase';
import InputPassword from './types/Password';

const Input = ({ type = 'normal', ...props }: InputProps) => {
  const renderInput = () => {
    switch (type) {
      case 'password':
        return <InputPassword {...props} />;
      default:
        return <InputBase {...props} />;
    }
  };
  return renderInput();
};

export default Input;
