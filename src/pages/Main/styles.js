import styled from 'styled-components/native';
import Colors from '~/constants/Colors';

export const Container = styled.View`
  flex: 1;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin: 10px 25px 10px 25px;
  justify-content: space-between;
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
