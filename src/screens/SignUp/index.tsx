import React, { useState, useMemo } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  Welcome,
  Subtitle,
  Container,
  Form,
  Input,
  CreateAccountText,
} from './styles';
import Button from 'designSystem/components/atoms/Button';
import { Typography } from 'designSystem/components/atoms';
import { InputProps } from 'designSystem/components/atoms/Input/types';
import { NavigationSignUp } from 'routes/types';
import Modal from 'designSystem/components/organisms/Modal';
import SafeAreaKeyboard from 'designSystem/containers/SafeAreaKeyboard';
import ScrollKeyboardDismiss from 'designSystem/containers/ScrollKeyboardDismiss';

interface SignUpForm {
  name: string;
  email: string;
  password: string;
  city: string;
  country: string;
}

const emptyForm: SignUpForm = {
  name: '',
  email: '',
  password: '',
  country: '',
  city: '',
};

const SignUp = () => {
  const [form, setForm] = useState(emptyForm);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigation = useNavigation<NavigationSignUp>();

  const setInput = (key: keyof SignUpForm, value: string) =>
    setForm({ ...form, [key]: value });

  const buttonDisabled = useMemo(
    () => !!Object.values(form).filter(value => value === '').length,
    [form],
  );

  const inputs = useMemo<InputProps[]>(
    () => [
      {
        label: 'Name',
        icon: 'person-outline',
        placeholder: 'John Due',
        value: form.name,
        onChangeText: value => setInput('name', value),
      },
      {
        label: 'Email',
        icon: 'email',
        placeholder: 'example@email.com',
        value: form.email,
        onChangeText: value => setInput('email', value),
      },
      {
        label: 'Password',
        icon: 'lock',
        type: 'password',
        placeholder: '********',
        value: form.password,
        onChangeText: value => setInput('password', value),
      },
      {
        label: 'Country',
        icon: 'location',
        placeholder: 'United State',
        value: form.country,
        onChangeText: value => setInput('country', value),
      },
      {
        label: 'City',
        icon: 'location',
        placeholder: 'New York',
        value: form.city,
        onChangeText: value => setInput('city', value),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form],
  );

  return (
    <>
      <SafeAreaKeyboard>
        <ScrollKeyboardDismiss>
          <Container>
            <Welcome>Create Account</Welcome>
            <Subtitle>Enjoy a healthier life!</Subtitle>
            <Form>
              {inputs.map(props => (
                <Input key={props.label} {...props} />
              ))}
            </Form>
            <Button
              label="CREATE ACCOUNT"
              disabled={buttonDisabled}
              onPress={() => setIsOpenModal(true)}
            />
            <CreateAccountText>
              Already have a account?{' '}
              <Typography
                variant="subtitle4"
                color="primary"
                onPress={() => navigation.navigate('SignIn')}
              >
                Sign In
              </Typography>
            </CreateAccountText>
          </Container>
        </ScrollKeyboardDismiss>
      </SafeAreaKeyboard>
      <Modal
        title="Success"
        description="Account created successfully"
        icon="check-outline"
        isVisible={isOpenModal}
        button={{
          label: 'OK',
          onPress: () => {
            setIsOpenModal(false);
            navigation.navigate('SignIn');
          },
        }}
      />
    </>
  );
};

export default SignUp;
