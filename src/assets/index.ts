/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ImageSourcePropType } from 'react-native';

export const images: { [key: string]: ImageSourcePropType } = {
  salad: require('./images/foods/salad.jpeg'),
  banana: require('./images/foods/banana.jpeg'),
  chicken: require('./images/foods/chicken.jpeg'),
  apple: require('./images/foods/apple.jpeg'),
  bread: require('./images/foods/bread.jpeg'),
  iceCream: require('./images/foods/ice-cream.jpeg'),
  avatar: require('./images/profile/avatar.jpeg'),
  defaultAvatar: require('./images/profile/default.png'),
  background: require('./images/general/background.png'),
};
