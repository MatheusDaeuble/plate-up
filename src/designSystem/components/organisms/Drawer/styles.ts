import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Spacing } from 'designSystem/theme';
import { colorMap } from 'designSystem/theme/colors';
import { Typography } from '../../atoms';

interface MenuItem {
  name: string;
  key: string;
}

export const Container = styled.View`
  align-items: flex-start;
  width: 100%;
  padding-bottom: ${Spacing.SCALE_16};
  padding-top: ${Spacing.SCALE_16};
  flex: 1;
`;

export const Profile = styled.View`
  margin-left: ${Spacing.SCALE_16};
`;

export const Name = styled(Typography).attrs({
  variant: 'h3',
})`
  margin-top: ${Spacing.SCALE_12};
`;

export const Email = styled(Typography).attrs({
  variant: 'body2',
})``;

export const Line = styled.View`
  margin-top: ${Spacing.SCALE_16};
  margin-bottom: ${Spacing.SCALE_16};
  width: 100%;
  height: 1px;
  background-color: ${colorMap['gray-medium']};
`;

export const Item = styled.TouchableOpacity<{
  isFocus?: boolean;
  end?: boolean;
}>`
  width: 100%;
  padding-left: ${Spacing.SCALE_12};
  height: ${Spacing.SCALE_48};
  background: ${({ isFocus }) => (isFocus ? colorMap.primary : 'transparent')};
  flex-direction: row;
  align-items: center;
`;

export const RouteName = styled(Typography).attrs({ variant: 'subtitle3' })`
  margin-left: ${Spacing.SCALE_12};
`;

export const Menu = styled(FlatList as new () => FlatList<MenuItem>)`
  width: 100%;
`;

export const Space = styled.View`
  height: ${Spacing.SCALE_4};
`;
