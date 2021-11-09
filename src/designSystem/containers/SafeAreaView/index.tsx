import React from 'react';
import {
  SafeAreaView as ReactSafeAreaView,
  Keyboard,
  View,
  TouchableWithoutFeedback,
  StatusBar,
  ScrollView,
  Platform,
} from 'react-native';
import { Color, colorMap } from '../../theme/colors';

interface SafeAreaViewProps {
  children?: React.ReactNode;
  backgroundColor?: Color;
  hasScroll?: boolean;
}

const SafeAreaView = ({
  children,
  backgroundColor = 'white',
  hasScroll = false,
}: SafeAreaViewProps) => {
  // return (
  //   <ReactSafeAreaView
  //     style={{
  //       flex: 1,
  //       backgroundColor: colorMap[backgroundColor],
  //       paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  //     }}
  //   >
  //     <KeyboardAwareScrollView
  //       contentContainerStyle={{ flexGrow: 1 }}
  //       style={{ flex: 1 }}
  //       extraHeight={20}
  //       extraScrollHeight={20}
  //       enableOnAndroid
  //     >
  //       {children}
  //     </KeyboardAwareScrollView>
  //   </ReactSafeAreaView>
  // );
  return (
    <ReactSafeAreaView
      style={{
        flex: 1,
        backgroundColor: colorMap[backgroundColor],
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      {/* <KeyboardAvoidingView
        style={{ flex: 1 }}
        keyboardVerticalOffset={20}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      > */}
      {hasScroll ? (
        <ScrollView style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>{children}</View>
          </TouchableWithoutFeedback>
        </ScrollView>
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>{children}</View>
        </TouchableWithoutFeedback>
      )}
      {/* </KeyboardAvoidingView> */}
    </ReactSafeAreaView>
  );
};

export default SafeAreaView;
