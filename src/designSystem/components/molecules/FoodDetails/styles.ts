import { StyleSheet, Animated, Dimensions } from 'react-native';
import { Bar } from 'react-native-progress';
import styled from 'styled-components/native';
import { Spacing } from 'designSystem/theme';
import { colorMap } from 'designSystem/theme/colors';
import { Typography } from '../../atoms';
import Avatar from '../../atoms/Avatar';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
  },
});

export const FoodImage = styled(Avatar)`
  margin-top: ${Spacing.SCALE_28};
  margin-bottom: ${Spacing.SCALE_12};
`;

export const NutrientsContainer = styled.View`
  flex: 1;
  background-color: ${colorMap.primary};
  border-radius: ${Spacing.SCALE_24};
  margin-top: ${Spacing.SCALE_18};
  margin-bottom: ${Spacing.SCALE_18};
  margin-left: -${Spacing.SCALE_14};
  margin-right: -${Spacing.SCALE_14};
  padding-left: ${Spacing.SCALE_24};
  padding-right: ${Spacing.SCALE_24};
  padding-top: ${Spacing.SCALE_12};
  padding-bottom: ${Spacing.SCALE_12};
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.View`
  flex: 1;
  align-items: flex-start;
  padding-right: ${Spacing.SCALE_12};
`;

export const Container = styled(Animated.View)`
  flex: 1;
  background-color: ${colorMap.white};
  margin-left: -${Spacing.SCALE_18};
  margin-right: -${Spacing.SCALE_18};
  margin-top: ${Spacing.SCALE_18};
  border-radius: ${Spacing.SCALE_24};
  padding: ${Spacing.SCALE_24};
  padding-top: ${Spacing.SCALE_12};
  padding-bottom: 60px;
`;

export const getProgressColor = (percent: number) => {
  if (percent < 0.3) return colorMap.danger;
  if (percent < 0.5) return colorMap.alert;
  return colorMap.primary;
};

export const ProgressBar = styled(Bar).attrs({
  height: 7,
  width: width - 70,
  borderColor: colorMap['gray-lighter'],
})``;

export const NutrientsBoxContainer = styled.View`
  width: 100%;
  border-radius: 16px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${Spacing.SCALE_8};
  padding-right: ${Spacing.SCALE_8};
`;

export const NutrientsBox = styled.View`
  margin-top: ${Spacing.SCALE_4};
  align-items: center;
  justify-content: center;
`;

export const Value = styled(Typography).attrs({
  color: 'white',
  variant: 'h2',
})``;

export const Label = styled(Typography).attrs({
  color: 'white',
  variant: 'body2',
})``;

export const HealthyLevel = styled(Typography).attrs({
  variant: 'subtitle1',
})`
  margin-bottom: ${Spacing.SCALE_4};
`;
