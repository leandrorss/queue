import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ButtonContainer,
  CancelWaitButton,
  CancelWaitButtonText,
  CallButton,
  TimerContainer,
  IconTimer,
  Timer,
} from './styles';
import QueueContainer from '~/components/QueueContainer';

const Main = () => {
  return (
    <Container>
      <QueueContainer />
      <TimerContainer>
        <IconTimer />
        <Timer>Wait Time</Timer>
      </TimerContainer>
      <ButtonContainer>
        <CancelWaitButton onPress={() => {}}>
          <Icon name="exit-to-app" size={28} color="#F45249" />
          <CancelWaitButtonText>Cancel Wait</CancelWaitButtonText>
        </CancelWaitButton>
        <CallButton onPress={() => {}}>
          <Icon name="call" size={28} color="#F45249" />
        </CallButton>
      </ButtonContainer>
    </Container>
  );
};

export default Main;
