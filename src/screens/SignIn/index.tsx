import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import Button from 'designSystem/components/atoms/Button';
import { Typography } from 'designSystem/components/atoms';
import AuthContext from 'contexts/Auth';
import { NavigationSignIn } from 'routes/types';
import SafeAreaKeyboard from 'designSystem/containers/SafeAreaKeyboard';
import ScrollKeyboardDismiss from 'designSystem/containers/ScrollKeyboardDismiss';
import {
  Avatar,
  Welcome,
  Subtitle,
  Container,
  Form,
  Input,
  CreateAccountText,
} from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('matheusdaeuble@gmail.com');
  const [password, setPassword] = useState('@password123');

  const navigation = useNavigation<NavigationSignIn>();
  const { signIn } = useContext(AuthContext);

  return (
    <SafeAreaKeyboard offset={20}>
      <ScrollKeyboardDismiss>
        <Container>
          <Avatar size={140} />
          <Welcome>Welcome Back</Welcome>
          <Subtitle>Sign to continue</Subtitle>
          <Form>
            <Input
              label="EMAIL"
              value={email}
              onChangeText={setEmail}
              placeholder="example@email.com"
              icon="person-outline"
            />
            <Input
              label="PASSWORD"
              type="password"
              value={password}
              onChangeText={setPassword}
              icon="lock"
              placeholder="Enter password"
              caption="Forgot password?"
            />
          </Form>
          <Button
            label="LOGIN"
            onPress={signIn}
            disabled={!email || !password}
          />
          <CreateAccountText>
            {"Don't have account? "}
            <Typography
              variant="subtitle4"
              color="primary"
              align="center"
              onPress={() => navigation.navigate('SignUp')}
            >
              create a new account
            </Typography>
          </CreateAccountText>
        </Container>
      </ScrollKeyboardDismiss>
    </SafeAreaKeyboard>
  );
};

export default SignIn;
