import { colorMap } from 'designSystem/theme/colors';
import styled from 'styled-components/native';
import { Spacing } from 'designSystem/theme';

export const INPUT_HEIGHT = 54;

export const InputStyled = styled.TextInput.attrs({
  autoCompleteType: 'off',
  selectionColor: colorMap.primary,
  autoCapitalize: 'none',
})`
  padding-right: ${Spacing.SCALE_8};
  padding-left: ${Spacing.SCALE_16};
  height: 100%;
  flex: 1;
  border-radius: 12px;
`;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: ${INPUT_HEIGHT}px;
  background-color: ${colorMap.whitish};
  border-radius: 12px;
  padding-right: ${Spacing.SCALE_16};
`;
