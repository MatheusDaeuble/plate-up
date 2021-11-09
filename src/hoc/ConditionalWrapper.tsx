import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) => (condition ? wrapper(children) : children);

const KeyboardAvoidingConditional = ({
  children,
  offset = 90,
}: {
  children: React.ReactNode | React.ReactNode[];
  offset?: number;
}) => (
  <ConditionalWrapper
    condition={Platform.OS === 'ios'}
    wrapper={(child: React.ReactNode) => (
      <KeyboardAvoidingView
        keyboardVerticalOffset={offset}
        style={styles.safeArea}
        behavior={'padding'}
      >
        {child}
      </KeyboardAvoidingView>
    )}
  >
    {children}
  </ConditionalWrapper>
);

export { KeyboardAvoidingConditional };
export default ConditionalWrapper;
