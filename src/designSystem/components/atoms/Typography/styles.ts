import styled from 'styled-components/native';
import { Typography } from 'designSystem/theme';
import { colorMap } from 'designSystem/theme/colors';
import { TypographyProps } from './types';

const typographyVariant = {
  h1: `
    font-family: ${Typography.FONT_FAMILY_BOLD};
    font-size: ${Typography.FONT_SIZE_36}px;
    line-height: ${Typography.FONT_SIZE_36 * 1.5}px;
  `,
  h2: `
    font-family: ${Typography.FONT_FAMILY_BOLD};
    font-size: ${Typography.FONT_SIZE_24}px;
    line-height: ${Typography.FONT_SIZE_24 * 1.5}px;
  `,
  h3: `
    font-family: ${Typography.FONT_FAMILY_BOLD};  
    font-size: ${Typography.FONT_SIZE_24}px;
    line-height: ${Typography.FONT_SIZE_24 * 1.5}px;
  `,
  h4: `
    font-family: ${Typography.FONT_FAMILY_BOLD};  
    font-size: ${Typography.FONT_SIZE_18}px;
    line-height: ${Typography.FONT_SIZE_18 * 1.5}px;
  `,
  subtitle1: `
    font-family: ${Typography.FONT_FAMILY_MEDIUM};  
    font-size: ${Typography.FONT_SIZE_20}px;
    line-height: 30px;
    `,
  subtitle2: `
    font-family: ${Typography.FONT_FAMILY_MEDIUM};  
    font-size: ${Typography.FONT_SIZE_20}px;
    line-height: ${Typography.FONT_SIZE_20 * 1.5}px;
  `,
  subtitle3: `
  font-family: ${Typography.FONT_FAMILY_REGULAR};  
  font-size: ${Typography.FONT_SIZE_20}px;
  line-height: ${Typography.FONT_SIZE_20 * 1.5}px;
  `,
  subtitle4: `
    font-family: ${Typography.FONT_FAMILY_MEDIUM};  
    font-size: ${Typography.FONT_SIZE_16}px;
    line-height: ${Typography.FONT_SIZE_16 * 1.5}px;
  `,
  paragraph1: `
    font-family: ${Typography.FONT_FAMILY_REGULAR};  
    font-size: ${Typography.FONT_SIZE_16}px;
    line-height: ${Typography.FONT_SIZE_16 * 1.5}px;
  `,
  paragraph2: `
    font-family: ${Typography.FONT_FAMILY_ITALIC};  
    font-size: ${Typography.FONT_SIZE_16}px;
    line-height: ${Typography.FONT_SIZE_16 * 1.5}px;
  `,
  body2: `
    font-family: ${Typography.FONT_FAMILY_REGULAR};  
    font-size: ${Typography.FONT_SIZE_14}px;
    line-height: ${Typography.FONT_SIZE_14 * 1.5}px;
  `,
  caption1: `
    font-family: ${Typography.FONT_FAMILY_MEDIUM};  
    font-size: ${Typography.FONT_SIZE_16}px;
    line-height: ${Typography.FONT_SIZE_14 * 1.5}px;
  `,
  caption2: `
    font-family: ${Typography.FONT_FAMILY_MEDIUM};  
    font-size: ${Typography.FONT_SIZE_16}px;
    line-height: ${Typography.FONT_SIZE_14 * 1.5}px;
    text-decoration-line: underline;
  `,
};

export const Text = styled.Text<TypographyProps>`
  ${({ variant }) => typographyVariant[variant]}
  color: ${({ color }) => colorMap[color]};
  text-align: ${({ align }) => align};
  ${({ onPress }) => (onPress ? 'text-decoration-line: underline;' : '')}
`;
