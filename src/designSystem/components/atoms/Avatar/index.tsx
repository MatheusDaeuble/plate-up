import React from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';
import { images } from 'assets/index';
import { AvatarImage } from './styles';

interface AvatarProps {
  image?: ImageSourcePropType;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

const Avatar = ({ image = null, size = 81, style }: AvatarProps) => {
  return (
    <AvatarImage
      style={style}
      size={size}
      source={image || images.defaultAvatar}
    />
  );
};

export default Avatar;
