import React from 'react';
import {
  NutrientsContainer,
  NutrientsBoxContainer,
  NutrientsBox,
  FoodImage,
  HeaderLeft,
  Header,
  Label,
  Value,
  Container,
  HealthyLevel,
  styles,
  ProgressBar,
  getProgressColor,
} from './styles';
import Typography from '../../atoms/Typography';
import { ImageSourcePropType } from 'react-native';

interface FoodDetailsProps {
  id: number;
  name: string;
  description: string;
  image: ImageSourcePropType;
  healthyPercent: number;
  nutrition: {
    kcal: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  information: string;
}

const FoodDetails = ({
  name,
  description,
  healthyPercent,
  nutrition,
  information,
  image,
}: FoodDetailsProps) => {
  return (
    <Container style={styles.shadow}>
      <Header>
        <HeaderLeft>
          <Typography variant="h2" align="center">
            {name + ' '}
            <Typography variant="h4" align="center">
              (100g)
            </Typography>
          </Typography>
          <Typography variant="paragraph2">{description}</Typography>
        </HeaderLeft>
        <FoodImage image={image} size={100} />
      </Header>
      <HealthyLevel>Healthy level</HealthyLevel>
      <ProgressBar
        progress={healthyPercent}
        color={getProgressColor(healthyPercent)}
      />
      <NutrientsContainer style={styles.shadow}>
        <Typography variant="h3" color="white">
          Nutrients
        </Typography>
        <NutrientsBoxContainer>
          <NutrientsBox>
            <Label>Kcal</Label>
            <Value>{nutrition.kcal}</Value>
          </NutrientsBox>
          <NutrientsBox>
            <Label>Protein</Label>
            <Value>{nutrition.protein}g</Value>
          </NutrientsBox>
          <NutrientsBox>
            <Label>Carbs</Label>
            <Value>{nutrition.carbs}g</Value>
          </NutrientsBox>
          <NutrientsBox>
            <Label>Fat</Label>
            <Value>{nutrition.fat}g</Value>
          </NutrientsBox>
        </NutrientsBoxContainer>
      </NutrientsContainer>
      <Typography variant="h2">Information</Typography>
      <Typography variant="paragraph1">
        {information.slice(0, 150)}{' '}
        {information.length > 150 && (
          <>
            {'... '}
            <Typography color="primary" variant="paragraph1" onPress={() => {}}>
              Read more
            </Typography>
          </>
        )}
      </Typography>
    </Container>
  );
};

export default FoodDetails;
