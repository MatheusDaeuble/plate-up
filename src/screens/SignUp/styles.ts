import styled from 'styled-components/native';
import {
  Typography,
  Input as InputComponent,
} from 'designSystem/components/atoms';
import { Spacing } from 'designSystem/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${Spacing.SCALE_24};
  padding-top: ${Spacing.SCALE_16};
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  margin-top: ${Spacing.SCALE_18};
  margin-bottom: ${Spacing.SCALE_28};
`;

export const Input = styled(InputComponent)``;

export const Welcome = styled(Typography).attrs({
  variant: 'h1',
  color: 'gray-darker',
})``;

export const Subtitle = styled(Typography).attrs({
  variant: 'h4',
  color: 'primary',
})``;

export const CreateAccountText = styled(Typography).attrs({
  variant: 'subtitle4',
})`
  margin-top: ${Spacing.SCALE_20};
  margin-bottom: ${Spacing.SCALE_20};
`;
