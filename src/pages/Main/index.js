import React, {useState} from 'react';
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
  TableIsReadyModal,
  ModalContainer,
  InnerContainer,
  CloseModalButton,
  IconCloseModal,
  IconSmileModal,
  TopModalContainer,
  SmileModalContainer,
  CloseModalContainer,
  MiddleModalContainer,
  TextTableIsReady,
  BottomModalContainer,
  CheckinButtonText,
  CheckinButton,
} from './styles';
import QueueContainer from '~/components/QueueContainer';
import Colors from '~/constants/Colors';

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const waitTimeFinished = () => {
    setModalVisible(true);
  };

  return (
    <Container>
      <TableIsReadyModal visible={modalVisible}>
        <ModalContainer>
          <InnerContainer>
            <TopModalContainer>
              <SmileModalContainer>
                <IconSmileModal />
              </SmileModalContainer>
              <CloseModalContainer>
                <CloseModalButton
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <IconCloseModal />
                </CloseModalButton>
              </CloseModalContainer>
            </TopModalContainer>
            <MiddleModalContainer>
              <TextTableIsReady>Your table is now ready!</TextTableIsReady>
            </MiddleModalContainer>
            <BottomModalContainer>
              <CheckinButton>
                <CheckinButtonText>Check In</CheckinButtonText>
              </CheckinButton>
            </BottomModalContainer>
          </InnerContainer>
        </ModalContainer>
      </TableIsReadyModal>
      <QueueContainer onWaitTimeFinished={waitTimeFinished} />
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
