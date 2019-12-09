import React, {useState, useEffect, useRef} from 'react';
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
import PersonQueue from '~/models/person-queue';

const QueueList = () => {
  const offset = 67;
  let positionValue = offset;

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

  useEffect(() => {

    Animated.timing(translateY, {
      toValue: -positionValue,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      positionValue += offset;

    });

  }, []);

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
          return (
            <QueueItem>
              <QueueNumberContainer>
                <QueueNumber>{item.position}</QueueNumber>
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
