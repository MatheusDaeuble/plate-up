import React from 'react';
import { Icon } from './styles';

interface BackButtonProps {
  onPress?: () => void;
}

const BackButton = (props: BackButtonProps) => {
  return <Icon {...props} />;
};

export default BackButton;
