import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BottomContainer,
  CancelWaitButton,
  CancelWaitButtonText,
  CallButton,
} from './styles';
import QueueContainer from '~/components/QueueContainer';

const Main = () => {
  return (
    <Container>
      <QueueContainer />
      <BottomContainer>
        <CancelWaitButton onPress={() => {}}>
          <Icon name="exit-to-app" size={28} color="#F45249" />
          <CancelWaitButtonText>Cancel Wait</CancelWaitButtonText>
        </CancelWaitButton>
        <CallButton onPress={() => {}}>
          <Icon name="call" size={28} color="#F45249" />
        </CallButton>
      </BottomContainer>
    </Container>
  );
};

export default Main;
