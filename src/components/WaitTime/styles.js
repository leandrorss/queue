import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '~/constants/Colors';

export const Container = styled.View`
  align-items: center;
`;

export const BottomContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
