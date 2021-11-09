import styled from 'styled-components/native';
import { ButtonProps } from '.';
import Typography from '../Typography';
import { Spacing } from 'designSystem/theme';
import { colorMap } from 'designSystem/theme/colors';

export const BUTTON_HEIGHT = 54;

type ContainerProps = Omit<ButtonProps, 'label'>;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})<ContainerProps>`
  width: 100%;
  height: ${BUTTON_HEIGHT}px;
  background-color: ${({ color, disabled }) =>
    colorMap[disabled ? 'gray-lighter' : color]};
  justify-content: center;
  align-items: center;
  border-radius: ${Spacing.SCALE_4};
`;

export const Label = styled(Typography).attrs({
  variant: 'h4',
  color: 'white',
  align: 'center',
})``;
