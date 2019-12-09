import React, {useState, useEffect, useCallback} from 'react';
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
  let positionValue = offset;
  let positions = 0;

  const [personQueue, setPersonQueue] = useState(PERSON_QUEUE);
  const [personSelected, setPersonSelected] = useState(
    personQueue.find(p => p.selected),
  );
  const [initialPositionY, setInitialPositionY] = useState(0);

  const translateY = new Animated.Value(0);

  const [actualPositionNumber, setActualPositionNumber] = useState(5);

  useEffect(() => {
    const initial = 17 + offset * (personSelected.position - 1);
    setInitialPositionY(initial);
  }, [personSelected.position]);

  const checkQueue = useCallback(() => {
    if (personSelected.position !== 1) {
      Animated.timing(translateY, {
        toValue: -positionValue,
        duration: 350,
        useNativeDriver: true,
      }).start(() => {
        positionValue += offset;
        personSelected.position--;
        setActualPositionNumber(personSelected);
      });
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      checkQueue();
    }, 2000);
  }, [checkQueue]);

  return (
    <Container>
      <QueueItemSelected
        selectedItem={initialPositionY}
        style={{
          transform: [
            {
              translateY,
            },
          ],
        }}>
        <QueueNumberContainerSelected>
          <QueueNumberSelected>{actualPositionNumber}</QueueNumberSelected>
        </QueueNumberContainerSelected>
        <QueueIconContainerSelected>
          <QueueIconSelected />
        </QueueIconContainerSelected>
      </QueueItemSelected>

      <List
        data={personQueue}
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
