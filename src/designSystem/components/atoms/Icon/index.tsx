import React from 'react';
import { IconProps } from './types';
import {
  Ionicons,
  Entypo,
  Feather,
  Fontisto,
  AntDesign,
  FontAwesome5,
  EvilIcons,
} from '@expo/vector-icons';
import { colorMap } from 'designSystem/theme/colors';
import { TouchableOpacity } from 'react-native';

const getIcon = ({
  ...props
}: Omit<IconProps, 'color' | 'onPress'> & { color: string }) => {
  switch (props.name) {
    case 'menu':
      return <Ionicons {...props} name="menu" />;
    case 'home':
      return <Entypo {...props} name="home" />;
    case 'person':
      return <Ionicons {...props} name="person" />;
    case 'exit-outline':
      return <Ionicons {...props} name="exit-outline" />;
    case 'person-outline':
      return <Ionicons {...props} name="ios-person-outline" />;
    case 'lock':
      return <Feather {...props} name="lock" />;
    case 'email':
      return <Fontisto {...props} name="email" />;
    case 'location':
      return <Ionicons {...props} name="location-outline" />;
    case 'arrow-left':
      return <AntDesign {...props} name="arrowleft" />;
    case 'cry':
      return <FontAwesome5 {...props} name="sad-tear" />;
    case 'search':
      return <EvilIcons {...props} name="search" />;
    case 'check-outline':
      return <AntDesign {...props} name="checkcircleo" />;
  }
};

const Icon = ({
  color = 'gray-light',
  size = 24,
  onPress,
  ...props
}: IconProps) => {
  const IconToRender = getIcon({ ...props, size, color: colorMap[color] });

  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      {IconToRender}
    </TouchableOpacity>
  );
};

export default Icon;
