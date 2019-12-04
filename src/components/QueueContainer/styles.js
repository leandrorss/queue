import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';


// /* topo | direita | inferior | esquerda */
// margin: 2px 1em 0 auto;
export const Container = styled.View`
  flex: 1;
  background: #2d4189;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Top = styled.View``;

export const AppName = styled.Text`
  font-size: 32px;
  color: white;
  margin: 15px 0px 0px 30px;
  font-family: 'Roboto Slab';
`;

export const RedText = styled.Text`
  font-size: 32px;
  color: #F45249;
  font-family: 'Roboto Slab';
`;
