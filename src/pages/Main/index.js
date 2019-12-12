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
import Colors from '~/constants/Colors';

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
          <Icon name="exit-to-app" size={28} color={Colors.primary} />
          <CancelWaitButtonText>Cancel Wait</CancelWaitButtonText>
        </CancelWaitButton>
        <CallButton onPress={() => {}}>
          <Icon name="call" size={28} color={Colors.primary} />
        </CallButton>
      </ButtonContainer>
    </Container>
  );
};

export default Main;
