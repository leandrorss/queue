import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

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
  List,
} from './styles';

import {PERSON_QUEUE} from '~/data/dummy-data';

const QueueList = () => {
  const offset = 67;
  let positions = 0;

  const translateY = new Animated.Value(0);

  const [actualPosition, setActualPosition] = useState(PERSON_QUEUE.find(p => p.selected).position);
  const [positionValue] = useState(offset);

  const [positionSelectedHighlight, setPositionSelectedHighlight] = useState(17 + 67 * (PERSON_QUEUE.find(p => p.selected).position - 1));

  useEffect(() => {
    setTimeout(() => {
      checkQueue();
    // }, Math.floor(Math.random() * 10) * 1000);
    }, 1000);
  }, [actualPosition]);

  const checkQueue = () => {
    if (PERSON_QUEUE.find(p => p.selected).position > 1) {
      Animated.timing(translateY, {
        toValue: -positionValue,
        duration: 350,
        useNativeDriver: true,
      }).start(() => {
        PERSON_QUEUE.find(p => p.selected).position =
          PERSON_QUEUE.find(p => p.selected).position - 1;
        const initial = 17 + 67 * (PERSON_QUEUE.find(p => p.selected).position - 1);
        setPositionSelectedHighlight(initial);
        setActualPosition(PERSON_QUEUE.find(p => p.selected).position);
      });
    }
  };

  return (
    <Container>
      <QueueItemSelected
        selectedItem={positionSelectedHighlight}
        style={{
          transform: [
            {
              translateY,
            },
          ],
        }}>
        <QueueNumberContainerSelected>
          <QueueNumberSelected>{actualPosition}</QueueNumberSelected>
        </QueueNumberContainerSelected>
        <QueueIconContainerSelected>
          <QueueIconSelected />
        </QueueIconContainerSelected>
      </QueueItemSelected>
      <List
        data={PERSON_QUEUE}
        keyExtractor={item => String(item.id)}
        scrollEnabled={false}
        renderItem={({item}) => {
          positions++;

          return (
            <QueueItem>
              <QueueNumberContainer>
                <QueueNumber>{positions}</QueueNumber>
              </QueueNumberContainer>
              <QueueIconContainer>
                <QueueIcon />
              </QueueIconContainer>
            </QueueItem>
          );
        }}
      />
    </Container>
  );
};

export default QueueList;
