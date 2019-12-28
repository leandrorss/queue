import React from 'react';

import {
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

const Modal = props => {
  return (
    <TableIsReadyModal visible={props.visible}>
      <ModalContainer>
        <InnerContainer>
          <TopModalContainer>
            <SmileModalContainer>
              <IconSmileModal />
            </SmileModalContainer>
            <CloseModalContainer>
              <CloseModalButton
                onPress={() => {
                  props.OnSetModalVisible(false);
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
  );
};

export default Modal;
