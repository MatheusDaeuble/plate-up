import React, { useMemo, useState } from 'react';
import SafeAreaKeyboard from 'designSystem/containers/SafeAreaKeyboard';
import ScrollKeyboardDismiss from 'designSystem/containers/ScrollKeyboardDismiss';
import { Typography, SearchInput } from 'designSystem/components/atoms';
import Box from 'designSystem/components/atoms/Box';
import { FoodDetails } from 'designSystem/components/molecules';
import {
  Container,
  Content,
  Header,
  BoxList,
  Space,
  EmptyContainer,
  CryIcon,
} from './styles';
import { data } from './data';

const HomeScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [currentFoodId, setCurrentFoodId] = useState(1);
  const foods = useMemo(
    () =>
      data.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  const foodSeleted = useMemo(
    () => data.find(({ id }) => id === currentFoodId),
    [currentFoodId],
  );

  return (
    <SafeAreaKeyboard>
      <ScrollKeyboardDismiss>
        <Container>
          <Header>
            <Content>
              <Typography align="center" variant="h1" color="primary">
                Hello, Matheus
              </Typography>
              <Typography align="center" variant="h2">
                Want to eat healthy food?
              </Typography>
            </Content>
          </Header>
          <SearchInput
            value={search}
            onChangeText={setSearch}
            placeholder="What food are you looking for?"
          />
          <BoxList
            keyExtractor={({ id }) => String(id)}
            ItemSeparatorComponent={() => <Space />}
            data={foods}
            renderItem={({ item }) => (
              <Box
                {...item}
                isSelected={item.id === currentFoodId}
                onPress={id => setCurrentFoodId(id)}
              />
            )}
            ListEmptyComponent={
              <EmptyContainer>
                <CryIcon />
                <Typography variant="subtitle1" align="center">
                  No food found!
                </Typography>
                <Typography variant="h4" align="center" color="primary">
                  We will add more food soon!
                </Typography>
              </EmptyContainer>
            }
          />
          <FoodDetails {...foodSeleted} />
        </Container>
      </ScrollKeyboardDismiss>
    </SafeAreaKeyboard>
  );
};

export default HomeScreen;
