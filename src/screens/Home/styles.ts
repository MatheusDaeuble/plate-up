import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Icon } from 'designSystem/components/atoms';
import { BoxProps } from 'designSystem/components/atoms/Box';
import { Spacing } from 'designSystem/theme';
import { colorMap } from 'designSystem/theme/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colorMap.white};
  padding: ${Spacing.SCALE_24};
  padding-top: ${Spacing.SCALE_8};
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${Spacing.SCALE_20};
`;

export const Space = styled.View`
  width: ${Spacing.SCALE_16};
`;

export const BoxList = styled(FlatList as new () => FlatList<BoxProps>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
})`
  margin-top: ${Spacing.SCALE_24};
  width: 100%;
  height: 120px;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  flex: 1;
`;

export const CryIcon = styled(Icon).attrs({
  name: 'cry',
  size: 56,
  color: 'gray-medium',
})`
  margin-bottom: ${Spacing.SCALE_8};
`;
