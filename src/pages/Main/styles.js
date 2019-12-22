import styled from 'styled-components/native';
import Colors from '~/constants/Colors';
import {Dimensions} from 'react-native';
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
  margin-bottom: 30px;
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
