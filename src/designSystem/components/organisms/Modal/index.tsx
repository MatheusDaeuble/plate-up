import React from 'react';
import { ModalProps } from './types';
import { Typography } from '../../atoms';
import { Container, Content, Button, Icon } from './styles';

const Modal = ({ isVisible, icon, title, description, button }: ModalProps) => {
  return (
    <Container isVisible={isVisible}>
      <Content>
        {!!icon && <Icon name={icon} color="primary" size={60} />}
        {!!title && (
          <Typography align="center" variant="h2">
            {title}
          </Typography>
        )}
        {!!description && (
          <Typography align="center" variant="subtitle1">
            {description}
          </Typography>
        )}
        <Button {...button} />
      </Content>
    </Container>
  );
};

export default Modal;
