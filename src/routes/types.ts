import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type NavigationSignIn = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

export type NavigationSignUp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;
