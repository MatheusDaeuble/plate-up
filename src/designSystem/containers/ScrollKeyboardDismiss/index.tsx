import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  ScrollViewProps,
} from 'react-native';
import { ScrollContainer } from './styled';

interface ScrollKeyboardDismissProps extends ScrollViewProps {
  children: React.ReactNode;
}

const ScrollKeyboardDismiss = ({
  children,
  ...props
}: ScrollKeyboardDismissProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollContainer {...props}>{children}</ScrollContainer>
    </TouchableWithoutFeedback>
  );
};

export default ScrollKeyboardDismiss;
