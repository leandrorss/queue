import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dimensions} from 'react-native';

var {height} = Dimensions.get('window');

export const Container = styled.View`
  background: #2d4189;
  padding: ${getStatusBarHeight()}px 30px 0px 30px;
  height: ${(height * 88) / 100};
  border-bottom-right-radius: 45px;
  border-bottom-left-radius: 45px;
`;

export const Top = styled.View`
  flex-direction: row;
  padding-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const AppName = styled.Text`
  font-size: 32px;
  color: white;
  font-family: 'Roboto Slab';
`;

export const RedText = styled.Text`
  font-size: 32px;
  color: #f45249;
  font-family: 'Roboto Slab';
`;

export const ConfigurationButton = styled(Icon).attrs({
  name: 'more-vert',
  size: 32,
  color: '#fff',
})`
  padding-top: 12px;
`;

export const RestaurantContainer = styled.View`
  margin-top: 50px;
  flex-direction: column;
`;
export const SpotText = styled.Text`
  font-family: 'Roboto Slab';
  color: rgba(255, 255, 254, 0.8);
  font-size: 20px;
`;
export const RestaurantName = styled.Text`
  font-family: 'Roboto Slab';
  font-weight: 900;
  color: white;
  font-size: 35px;
`;

export const RestaurantIcon = styled(Icon).attrs({
  name: 'restaurant',
  size: 32,
  color: '#fff',
})``;
