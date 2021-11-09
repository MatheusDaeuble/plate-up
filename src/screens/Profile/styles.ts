import styled from 'styled-components/native';
import { images } from 'assets/index';
import AvatarComponent from 'designSystem/components/atoms/Avatar';
import { Spacing } from 'designSystem/theme';
import { colorMap } from 'designSystem/theme/colors';
import InputComponent from 'designSystem/components/atoms/Input';
import Typography from 'designSystem/components/atoms/Typography';

export const Container = styled.View`
  flex: 1;
  background-color: ${colorMap.white};
  padding: ${Spacing.SCALE_16};
  padding-bottom: ${Spacing.SCALE_20};
  padding-top: ${Spacing.SCALE_20};
  align-items: center;
`;

export const Avatar = styled(AvatarComponent).attrs({
  image: images.avatar,
  size: 132,
})``;

export const Form = styled.View`
  width: 100%;
  margin-top: ${Spacing.SCALE_12};
  margin-bottom: ${Spacing.SCALE_28};
`;

export const Input = styled(InputComponent)``;

export const Title = styled(Typography).attrs({
  variant: 'h1',
  color: 'primary',
})``;

export const Subtitle = styled(Typography).attrs({
  variant: 'h4',
})`
  margin-bottom: ${Spacing.SCALE_16};
`;
