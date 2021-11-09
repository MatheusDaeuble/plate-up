import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { KeyboardAvoidingConditional } from 'hoc/ConditionalWrapper';
import { colorMap } from 'designSystem/theme/colors';

interface SafeAreaKeyboardProps {
  children?: React.ReactNode | React.ReactNode[];
  offset?: number;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorMap.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

const SafeAreaKeyboard = ({
  children = <></>,
  offset = 90,
}: SafeAreaKeyboardProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingConditional offset={offset}>
        {children}
      </KeyboardAvoidingConditional>
    </SafeAreaView>
  );
};

export default SafeAreaKeyboard;
