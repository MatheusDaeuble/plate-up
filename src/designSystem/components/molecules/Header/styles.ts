import styled from 'styled-components/native';
import { Spacing } from 'designSystem/theme';
import { colorMap } from 'designSystem/theme/colors';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.View`
  padding-left: ${Spacing.SCALE_18};
  height: 40px;
  background-color: ${colorMap.white};
  align-items: flex-start;
  justify-content: center;
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0};
`;

export const ActionBox = styled.View`
  align-items: center;
  height: ${Spacing.SCALE_40};
  width: ${Spacing.SCALE_40};
`;
