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
} from './styles';
import QueueContainer from '~/components/QueueContainer';
import Colors from '~/constants/Colors';

import {AnimatedCircularProgress} from 'react-native-circular-progress';

const Main = () => {
  return (
    <Container>
      <QueueContainer />
      <TimerContainer>
        <AnimatedCircularProgress
          style={{position: 'absolute', bottom: 40}}
          size={200}
          width={12}
          fill={60}
          tintColor={Colors.secondary}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor={Colors.grayTransparent}
          lineCap="round"
          arcSweepAngle={240}
          rotation={240}>
          {fill => <Timer>{'00:25'}</Timer>}
        </AnimatedCircularProgress>
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
