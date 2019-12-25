import styled from 'styled-components/native';
import Colors from '~/constants/Colors';
import {Dimensions, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {AnimatedCircularProgress} from 'react-native-circular-progress';

var {height, width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: ${height > 700 ? 10 : 0};
  flex-direction: row;
  padding: 10px 25px 10px 25px;
  justify-content: space-between;
  width: ${width};
  z-index: 4;
`;

export const CancelWaitButton = styled.TouchableOpacity`
  background-color: ${Colors.third};
  border-radius: 16px;
  width: 200px;
  height: 60px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const CancelWaitButtonText = styled.Text`
  font-family: 'Ubuntu';
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 1px;
  color: ${Colors.primary};
`;

export const CallButton = styled.TouchableOpacity`
  background-color: ${Colors.thirdLight};
  border-radius: 16px;
  padding: 10px;
  width: 90px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const TimerContainer = styled.View`
  position: absolute;
  bottom: 80;
  width: ${width};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 45px;
`;

export const IconTimer = styled(Icon).attrs({
  name: 'timer',
  size: 40,
  color: Colors.secondary,
})``;

export const WaitTimeText = styled.Text`
  color: ${Colors.secondary};
  font-size: 30px;
  font-family: 'Ubuntu';
  letter-spacing: 1px;
`;

export const Timer = styled.Text`
  color: ${Colors.secondary};
  font-size: 50px;
  font-family: 'Ubuntu';
  letter-spacing: 1px;
`;

export const CircularProgress = styled(AnimatedCircularProgress).attrs({
  size: 200,
  width: 12,
  fill: 60,
  tintColor: Colors.secondary,
  backgroundColor: Colors.grayTransparent,
  lineCap: 'round',
  arcSweepAngle: 240,
  rotation: 240,
})`
  position: absolute;
  bottom: 40;
`;

export const TableIsReadyModal = styled(Modal).attrs(props => ({
  visible: props.visible,
  transparent: true,
  animationType: 'fade',
}))``;

export const ModalContainer = styled.View`
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.296);
`;

export const InnerContainer = styled.View`
  align-self: center;
  height: 270px;
  width: 250px;
  background-color: white;
  border-radius: 15px;
  margin: 0px;
`;

export const CloseModalButton = styled.TouchableOpacity`
  background-color: ${Colors.grayTransparent};
  border-radius: 20px;
  padding: 10px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const IconCloseModal = styled(Icon).attrs({
  name: 'clear',
  size: 20,
  color: Colors.secondary,
})``;

export const IconSmileModal = styled(Icon).attrs({
  name: 'sentiment-satisfied',
  size: 75,
  color: Colors.primary,
})``;

export const TopModalContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px 20px 0px 20px;
`;

export const SmileModalContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-left: 65px;
`;

export const CloseModalContainer = styled.View`
  flex: 1px;
  flex-direction: column;
  align-items: flex-end;
`;

export const MiddleModalContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 20px 0px;
`;

export const TextTableIsReady = styled.Text`
  font-family: 'Ubuntu';
  font-size: 25px;
  text-align: center;
  color: ${Colors.secondary};
`;

export const BottomModalContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const CheckinButtonText = styled.Text`
  font-family: 'Ubuntu';
  font-weight: bold;
  font-size: 17px;
  letter-spacing: 1px;
  color: ${Colors.primary};
`;

export const CheckinButton = styled.TouchableOpacity`
  background-color: ${Colors.third};
  border-radius: 16px;
  width: 190px;
  height: 60px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;
