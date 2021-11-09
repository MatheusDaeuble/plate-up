import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colorMap } from 'designSystem/theme/colors';
import { Container } from './styles';

const LoadingTemplate = () => {
  return (
    <Container>
      <ActivityIndicator color={colorMap.primary} size="large" />
    </Container>
  );
};

export default LoadingTemplate;
