import React from 'react';
import { ImageSourcePropType } from 'react-native';
import Typography from '../Typography';
import { Container, Image } from './styles';

export interface BoxProps {
  id: number;
  name: string;
  isSelected?: boolean;
  onPress?: (id: number) => void;
  image?: ImageSourcePropType | null;
}

const Box = ({
  id,
  name,
  image = null,
  onPress = () => {},
  isSelected = false,
}: BoxProps) => {
  return (
    <Container onPress={() => onPress(id)}>
      <Image resizeMode="cover" source={image} />
      <Typography variant={isSelected ? 'subtitle2' : 'subtitle3'}>
        {name}
      </Typography>
    </Container>
  );
};

export default Box;
