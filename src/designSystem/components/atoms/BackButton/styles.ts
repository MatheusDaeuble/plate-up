import styled from 'styled-components/native';
import { Spacing } from 'designSystem/theme';
import IconComponent from '../Icon';

export const Icon = styled(IconComponent).attrs({
  name: 'arrow-left',
  color: 'primary',
  size: 32,
})`
  margin-left: ${Spacing.SCALE_16};
`;
