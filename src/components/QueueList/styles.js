import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '~/constants/Colors';
import {Animated, ImageBackground} from 'react-native';

export const Container = styled.View`
  align-items: flex-end;
  width: 200px;
`;
export const QueueItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 90px;
  margin-top: 17px;
`;
export const QueueNumberContainer = styled.View`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
export const QueueNumber = styled.Text`
  color: ${Colors.whiteTransparent03};
  font-weight: bold;
  font-size: 18px;
`;
export const QueueIconContainer = styled.View`
  height: 55px;
  width: 50px;
  border-radius: 10px;
  background-color: 'rgba(255, 255, 255, 0.100)';
  align-items: center;
  justify-content: center;
`;
export const QueueIcon = styled(Icon).attrs({
  name: 'person',
  size: 32,
  color: Colors.secondary,
})``;

export const RestaurantIcon = styled(Icon).attrs({
  name: 'restaurant',
  size: 32,
  color: Colors.white,
})`
  align-content: center;
`;

export const QueueItemSelected = styled(Animated.View)`
  position: absolute;
  top: ${props => props.selectedItem};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 90px;
  z-index: 2;
`;
export const QueueNumberContainerSelected = styled.View`
  flex: 1;
  height: 55px;
  width: 50px;
  justify-content: center;
`;
export const QueueNumberSelected = styled.Text`
  color: ${Colors.white};
  font-weight: bold;
  font-size: 18px;
`;
export const QueueIconContainerSelected = styled.View`
  height: 55px;
  width: 50px;
  border-radius: 10px;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: center;
`;
export const QueueIconSelected = styled(Icon).attrs({
  name: 'person',
  size: 32,
  color: Colors.primary,
})``;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})``;

export const ArrowIndicator = styled(ImageBackground)`
  width: 30px;
  height: 20px;
  justify-content: center;
`;

export const ContentArrowIndicatorContainer = styled.View`
  flex: 1;
  padding-left: 5px;
`;
