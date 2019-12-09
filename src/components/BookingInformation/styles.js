import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '~/constants/Colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100px;
  padding: 10px;
`;

export const BookingInformationContainer = styled.View`
  flex-direction: column;
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-family: 'Roboto Slab';
  color: ${Colors.whiteTransparent03};
  font-size: 13px;
`;

export const DetailInformationContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${Colors.whiteTransparent0100};
  padding-bottom: 10px;
`;

export const Resume = styled.Text`
  font-family: 'Roboto Slab';
  color: ${Colors.white};
  font-size: 20px;
  font-weight: bold;
  margin: 8px;
  margin-top: 3px;
`;
export const IconBooking = styled(Icon).attrs(props => ({
  name: props.iconName,
  size: 14,
  color: Colors.whiteTransparent03,
}))``;
