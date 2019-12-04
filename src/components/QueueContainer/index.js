import React from 'react';

import {
  Container,
  Top,
  AppName,
  RedText,
  ConfigurationButton,
  RestaurantContainer,
  SpotText,
  RestaurantName,
} from './styles';

const QueueContainer = () => {
  return (
    <Container>
      <Top>
        <AppName>
          que<RedText>u</RedText>e
        </AppName>
        <ConfigurationButton />
      </Top>
      <RestaurantContainer>
        <SpotText>Your spot at</SpotText>
        <RestaurantName>El Taco</RestaurantName>
      </RestaurantContainer>
    </Container>
  );
};

export default QueueContainer;
