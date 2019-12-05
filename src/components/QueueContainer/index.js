import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import {
  Container,
  Top,
  AppName,
  RedText,
  ConfigurationButton,
  RestaurantContainer,
  SpotText,
  RestaurantName,
  DashBar,
} from './styles';

const QueueContainer = () => {
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const onHandlerStateChanged = event => {};

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChanged}>
      <Container
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [-320, 0, 1],
                outputRange: [-320, 0, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
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
        <DashBar />
      </Container>
    </PanGestureHandler>
  );
};

export default QueueContainer;
