import { Dimensions } from 'react-native';
import RNModal from 'react-native-modal';
import styled from 'styled-components/native';
import { Spacing } from 'designSystem/theme';
import { colorMap } from 'designSystem/theme/colors';
import { Button as ButtonComponent, Icon as IconComponent } from '../../atoms';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const Container = styled(RNModal).attrs({
  hideModalContentWhileAnimating: true,
  deviceWidth: deviceWidth,
  deviceHeight: deviceHeight,
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  useNativeDriver: true,
  backdropTransitionOutTiming: 0,
})``;

export const Content = styled.View`
  align-items: center;
  border-radius: ${Spacing.SCALE_8};
  background-color: ${colorMap.white};
  padding-top: ${Spacing.SCALE_24};
  padding-bottom: ${Spacing.SCALE_24};
  padding-left: ${Spacing.SCALE_18};
  padding-right: ${Spacing.SCALE_18};
  padding-bottom: ${Spacing.SCALE_18};
`;

export const Button = styled(ButtonComponent)`
  margin-top: ${Spacing.SCALE_20};
`;

export const Icon = styled(IconComponent)`
  margin-bottom: ${Spacing.SCALE_8};
`;
