import styled from 'styled-components/native';
import { Spacing } from 'designSystem/theme';

export const Container = styled.TouchableOpacity`
  align-items: center;
`;

export const Image = styled.Image`
  height: 86px;
  width: 86px;
  border-radius: 20px;
  margin-bottom: ${Spacing.SCALE_8};
`;
