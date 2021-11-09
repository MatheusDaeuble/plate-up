import { colorMap } from 'designSystem/theme/colors';
import styled from 'styled-components/native';

interface AvatarImageProps {
  size: number;
}

export const AvatarImage = styled.Image<AvatarImageProps>`
  border-radius: ${({ size }) => size / 2}px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-color: ${colorMap['gray-lighter']};
  border-width: 1px;
`;
