import React, { useContext } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { images } from 'assets/index';
import { Avatar, Icon } from '../../atoms';
import {
  Container,
  Name,
  Email,
  Line,
  Item,
  Profile,
  RouteName,
  Space,
  Menu,
} from './styles';
import AuthContext from 'contexts/Auth';
import SafeAreaKeyboard from 'designSystem/containers/SafeAreaKeyboard';

const iconSize = 28;

const Drawer = (props: DrawerContentComponentProps) => {
  const { signOut } = useContext(AuthContext);

  const index = props.navigation.getState().index;
  const routeIndex = props.navigation.getState().routes[index].key;

  const renderIcon = (name: string, isFocus: boolean) => {
    switch (name) {
      case 'Home':
        return (
          <Icon
            name="home"
            size={iconSize}
            color={isFocus ? 'white' : 'gray-dark'}
          />
        );
      case 'Profile':
        return (
          <Icon
            name="person"
            size={iconSize}
            color={isFocus ? 'white' : 'gray-dark'}
          />
        );
    }
  };

  return (
    <SafeAreaKeyboard>
      <Container>
        <Profile>
          <Avatar image={images.avatar} />
          <Name>Matheus Daeuble</Name>
          <Email>matheusdaeuble@gmail.com</Email>
        </Profile>
        <Line />
        <Menu
          data={props.state.routes}
          keyExtractor={item => item.key}
          ItemSeparatorComponent={() => <Space />}
          renderItem={({ item }) => {
            const isFocus = item.key === routeIndex;
            return (
              <Item
                isFocus={isFocus}
                onPress={() => props.navigation.navigate(item.name)}
              >
                {renderIcon(item.name, isFocus)}
                <RouteName color={isFocus ? 'white' : 'gray-dark'}>
                  {item.name}
                </RouteName>
              </Item>
            );
          }}
        />
        <Item style={{ alignSelf: 'flex-end' }} onPress={signOut}>
          <Icon name="exit-outline" size={iconSize} color="gray-dark" />
          <RouteName>Sign out</RouteName>
        </Item>
      </Container>
    </SafeAreaKeyboard>
  );
};

export default Drawer;
