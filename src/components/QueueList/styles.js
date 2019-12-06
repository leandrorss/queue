import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '~/constants/Colors';

export const Container = styled.View`
  align-items: flex-end;
`;
export const QueueItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  width: 90px;
`;
export const QueueNumberContainer = styled.View`
  width: 20px;
  height: 20px;
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
export const QueueNumber = styled.Text`
  color: ${Colors.white};
  font-weight: bold;
  font-size: 18px;
`;
export const QueueIconContainer = styled.View`
  height: 55px;
  width: 50px;
  border-radius: 10px;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: center;
`;
export const QueueIcon = styled(Icon).attrs({
  name: 'person',
  size: 32,
  color: Colors.primary,
})``;
