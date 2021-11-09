import React from 'react';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { Color } from 'designSystem/theme/colors';
import { Icon } from '../../atoms';
import { Container, ActionBox } from './styles';
import SafeAreaKeyboard from 'designSystem/containers/SafeAreaKeyboard';

type HeaderProps = {
  backgroundColor?: Color;
  iconColor?: Color;
} & DrawerHeaderProps;

const Header = ({ navigation }: HeaderProps) => {
  return (
    <>
      <SafeAreaKeyboard />
      <Container>
        <ActionBox>
          <Icon
            name="menu"
            size={32}
            onPress={navigation.openDrawer}
            color="gray-dark"
          />
        </ActionBox>
      </Container>
    </>
  );
};

export default Header;
