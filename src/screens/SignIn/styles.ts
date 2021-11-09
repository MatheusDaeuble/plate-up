import styled from 'styled-components/native';
import {
  Typography,
  Input as InputComponent,
} from 'designSystem/components/atoms';
import AvatarComponent from 'designSystem/components/atoms/Avatar';
import { Spacing } from 'designSystem/theme';

export const Avatar = styled(AvatarComponent)`
  margin-top: ${Spacing.SCALE_28};
  margin-bottom: ${Spacing.SCALE_12};
`;

export const Container = styled.View`
  flex: 1;
  flex-grow: 1;
  align-items: center;
  padding: ${Spacing.SCALE_24};
  justify-content: center;
`;

export const Form = styled.View`
  width: 100%;
  flex-grow: 1;
  margin-top: ${Spacing.SCALE_12};
  margin-bottom: ${Spacing.SCALE_28};
`;

export const Welcome = styled(Typography).attrs({
  variant: 'h1',
  color: 'primary',
})``;

export const Subtitle = styled(Typography).attrs({
  variant: 'h4',
})``;

export const Input = styled(InputComponent)``;

export const CreateAccountText = styled(Typography).attrs({
  variant: 'subtitle4',
  align: 'center',
})`
  margin-top: ${Spacing.SCALE_20};
`;
