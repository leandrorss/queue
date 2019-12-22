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
  WaitTimeText,
  Timer,
  CircularProgress,
} from './styles';
import QueueContainer from '~/components/QueueContainer';
import Colors from '~/constants/Colors';

const Main = () => {
  return (
    <Container>
      <QueueContainer />
      <TimerContainer>
        <CircularProgress
          onAnimationComplete={() => console.log('onAnimationComplete')}>
          {fill => <Timer>{'00:25'}</Timer>}
        </CircularProgress>
        <IconTimer />
        <WaitTimeText>Wait Time</WaitTimeText>
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
