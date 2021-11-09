import React from 'react';
import InputBase from '../InputBase';
import { InputProps } from '../types';

const InputPassword = (props: InputProps) => {
  return <InputBase placeholder={'••••••••'} {...props} secureTextEntry />;
};

export default InputPassword;
