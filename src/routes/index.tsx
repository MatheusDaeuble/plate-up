import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import Header from '../designSystem/components/molecules/Header';
import DrawerComponent from '../designSystem/components/organisms/Drawer';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import AuthContext from '../contexts/Auth';
import { BackButton } from '../designSystem/components/atoms';
import { styles } from './styles';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Routes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <DrawerComponent {...props} />}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{ header: props => <Header {...props} /> }}
          />
          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ header: props => <Header {...props} /> }}
          />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: null,
              headerStyle: styles.empty,
              headerLeft: ({ onPress }) => <BackButton onPress={onPress} />,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
