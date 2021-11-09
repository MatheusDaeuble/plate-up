import { colorMap } from 'designSystem/theme/colors';
import styled from 'styled-components/native';
import { Spacing, Typography } from 'designSystem/theme';
import TypographyComponent from '../Typography';
import { InputProps } from './types';

export const INPUT_HEIGHT = 62;

export const Container = styled.View`
  width: 100%;
  margin-top: ${Spacing.SCALE_8};
  margin-bottom: ${Spacing.SCALE_8};
`;

export const InputContainer = styled.View<{
  isFocused: boolean;
  editable: boolean;
}>`
  padding-right: ${Spacing.SCALE_16};
  padding-left: ${Spacing.SCALE_16};
  background-color: ${({ editable }) =>
    colorMap[editable ? 'white' : 'whitish']};
  width: 100%;
  height: ${INPUT_HEIGHT}px;
  border-width: 1px;
  border-color: ${({ isFocused }) =>
    colorMap[isFocused ? 'primary' : 'gray-lighter']};
  border-radius: ${Spacing.SCALE_4};
  align-items: center;
  flex-direction: row;
`;

export const Label = styled(TypographyComponent)<{ isFocused: boolean }>`
  margin-bottom: ${Spacing.SCALE_8};
  margin-left: ${Spacing.SCALE_4};
`;

export const Content = styled.View`
  flex: 1;
  padding-left: ${Spacing.SCALE_12};
  padding-right: ${Spacing.SCALE_12};
`;

export const InputStyled = styled.TextInput.attrs({
  autoCompleteType: 'off',
  selectionColor: colorMap.primary,
  autoCapitalize: 'none',
})<InputProps>`
  width: 100%;
  align-items: flex-start;
  margin: 0px;
  padding-bottom: 4px;
  color: ${colorMap['gray-dark']};
  font-family: ${Typography.FONT_FAMILY_MEDIUM};
  font-size: ${Typography.FONT_SIZE_18}px;
  line-height: ${Typography.FONT_SIZE_16 * 1.5}px;
`;

export const Caption = styled(TypographyComponent).attrs({
  variant: 'caption2',
  color: 'primary',
})`
  padding-top: ${Spacing.SCALE_8};
  align-self: flex-end;
`;
