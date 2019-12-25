import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import QueueList from '~/components/QueueList';

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
  RestaurantIcon,
  RestaurantItem,
  ContentQueue,
  MainContainer,
} from './styles';

import BookingInformation from '~/components/BookingInformation';

const QueueContainer = props => {
  let offset = 0;
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

  const onHandlerStateChanged = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;
      if (translationY <= 50) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? -320 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? -320 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  };

  return (
    <MainContainer>
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}>
        <Container
          modalIsVisible={props.modalIsVisible}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            overflow: 'hidden',
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
            <RestaurantItem>
              <RestaurantName>El Taco</RestaurantName>
              <RestaurantIcon />
            </RestaurantItem>
          </RestaurantContainer>
          <ContentQueue>
            <BookingInformation />
            <QueueList onWaitTimeFinished={props.onWaitTimeFinished} />
          </ContentQueue>
          {!props.modalIsVisible && <DashBar />}
        </Container>
      </PanGestureHandler>
    </MainContainer>
  );
};

export default QueueContainer;
