import React from 'react';
import { View, StyleSheet, ScrollView, ScrollViewProps } from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
  },
});

interface ScrollContainerProps extends ScrollViewProps {
  children: React.ReactNode | React.ReactNode[];
}

export const ScrollContainer = ({
  children,
  ...props
}: ScrollContainerProps) => (
  <ScrollView
    alwaysBounceVertical={false}
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps={'handled'}
    contentContainerStyle={styles.scrollContainer}
    {...props}
  >
    <View style={styles.container}>{children}</View>
  </ScrollView>
);
