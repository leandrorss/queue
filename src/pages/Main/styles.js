import styled from 'styled-components/native';
import Colors from '~/constants/Colors';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

var {height, width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
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
  margin-bottom: 20px;
`;

export const IconTimer = styled(Icon).attrs({
  name: 'timer',
  size: 30,
  color: Colors.secondary,
})``;

export const Timer = styled.Text`
  color: ${Colors.secondary};
  font-size: 20px;
  font-family: 'Ubuntu';
  letter-spacing: 1px;
`;
