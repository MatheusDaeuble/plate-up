import React, { useState, useMemo } from 'react';
import Button from 'designSystem/components/atoms/Button';
import { InputProps } from 'designSystem/components/atoms/Input/types';
import Modal from 'designSystem/components/organisms/Modal';
import SafeAreaKeyboard from 'designSystem/containers/SafeAreaKeyboard';
import ScrollKeyboardDismiss from 'designSystem/containers/ScrollKeyboardDismiss';
import { Container, Avatar, Form, Input, Title, Subtitle } from './styles';

interface ProfileForm {
  name: string;
  email: string;
  city: string;
  country: string;
}

const emptyForm: ProfileForm = {
  name: 'Matheus Daeuble Cavalcante',
  email: 'matheusdaeuble@gmail.com',
  country: 'Brazil',
  city: 'Fortaleza',
};

const ProfileScreen = () => {
  const [form, setForm] = useState(emptyForm);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const setInput = (key: keyof ProfileForm, value: string) =>
    setForm({ ...form, [key]: value });

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
    <SafeAreaKeyboard>
      <ScrollKeyboardDismiss>
        <Container>
          <Title>Edit your profile</Title>
          <Subtitle>Update information</Subtitle>
          <Avatar />
          <Form>
            {inputs.map(props => (
              <Input key={props.label} {...props} />
            ))}
          </Form>
          <Button label="SAVE" onPress={() => setIsOpenModal(true)} />
        </Container>
      </ScrollKeyboardDismiss>
      <Modal
        title="Success"
        description="Profile edited successfully"
        icon="check-outline"
        isVisible={isOpenModal}
        button={{
          label: 'OK',
          onPress: () => setIsOpenModal(false),
        }}
      />
    </SafeAreaKeyboard>
  );
};

export default ProfileScreen;
