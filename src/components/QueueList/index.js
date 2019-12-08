import React, {useState} from 'react';
import {TouchableOpacity, Animated} from 'react-native';

import {
  Container,
  QueueItem,
  QueueIconContainer,
  QueueNumberContainer,
  QueueNumber,
  QueueIcon,
  QueueItemSelected,
  QueueIconContainerSelected,
  QueueNumberContainerSelected,
  QueueNumberSelected,
  QueueIconSelected,
} from './styles';

const QueueList = () => {
  let offset = 67;
  let positionValue = offset;
  const [measurements, setMeasurements] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [newYPosition, setNewYPosition] = useState(0);
  const translateY = new Animated.Value(0);

  const onHandlerUpdatePosition = () => {
    Animated.timing(translateY, {
      toValue: -positionValue,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      positionValue += offset;
    });
  };

  return (
    <Container>
      <QueueItemSelected
        onLayout={({nativeEvent}) => {
          setMeasurements(nativeEvent.layout);
        }}
        style={{
          transform: [
            {
              translateY
            }
          ]
        }}
        >
        <QueueNumberContainerSelected>
          <QueueNumberSelected>1</QueueNumberSelected>
        </QueueNumberContainerSelected>
        <QueueIconContainerSelected>
          <QueueIconSelected />
        </QueueIconContainerSelected>
      </QueueItemSelected>
      <TouchableOpacity onPress={onHandlerUpdatePosition}>
        <QueueItem>
          <QueueNumberContainer>
            <QueueNumber>1</QueueNumber>
          </QueueNumberContainer>
          <QueueIconContainer>
            <QueueIcon />
          </QueueIconContainer>
        </QueueItem>
      </TouchableOpacity>

      <QueueItem>
        <QueueNumberContainer>
          <QueueNumber>2</QueueNumber>
        </QueueNumberContainer>
        <QueueIconContainer>
          <QueueIcon />
        </QueueIconContainer>
      </QueueItem>

      <QueueItem>
        <QueueNumberContainer>
          <QueueNumber>3</QueueNumber>
        </QueueNumberContainer>
        <QueueIconContainer>
          <QueueIcon />
        </QueueIconContainer>
      </QueueItem>

      <QueueItem>
        <QueueNumberContainer>
          <QueueNumber>4</QueueNumber>
        </QueueNumberContainer>
        <QueueIconContainer>
          <QueueIcon />
        </QueueIconContainer>
      </QueueItem>

      <QueueItem>
        <QueueNumberContainer>
          <QueueNumber>5</QueueNumber>
        </QueueNumberContainer>
        <QueueIconContainer>
          <QueueIcon />
        </QueueIconContainer>
      </QueueItem>

      <QueueItem>
        <QueueNumberContainer>
          <QueueNumber>6</QueueNumber>
        </QueueNumberContainer>
        <QueueIconContainer>
          <QueueIcon />
        </QueueIconContainer>
      </QueueItem>

      <QueueItem>
        <QueueNumberContainer>
          <QueueNumber>7</QueueNumber>
        </QueueNumberContainer>
        <QueueIconContainer>
          <QueueIcon />
        </QueueIconContainer>
      </QueueItem>
    </Container>
  );
};

export default QueueList;
