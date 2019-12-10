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
import PersonQueue from '~/models/person-queue';

const QueueList = () => {
  const offset = 67;
  let positionValue = offset;
  let positions = 0;

  const [personsQueue, setPersonsQueue] = useState(PERSON_QUEUE);

  const [initialPositionY, setInitialPositionY] = useState(0);

  const translateY = new Animated.Value(0);

  const [actualPositionNumber, setActualPositionNumber] = useState();

  var personIndex = personsQueue.findIndex(p => p.selected);

  useEffect(() => {
    const initial = 17 + offset * personIndex;
    setInitialPositionY(initial);
    setActualPositionNumber(personsQueue[personIndex].position);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      checkQueue();
    }, 2000);
  }, [personsQueue, actualPositionNumber]);


  const checkQueue = () => {
    if (personsQueue[personIndex].position > 1) {
      Animated.timing(translateY, {
        toValue: -positionValue,
        duration: 350,
        useNativeDriver: true,
      }).start(() => {
        positionValue += offset;

        const positionSelected = personsQueue[personIndex].position - 1;

        const updatedPerson = new PersonQueue(
          personsQueue[personIndex].id,
          positionSelected,
          personsQueue[personIndex].selected,
        );

        const updatedPersonsQueue = [...personsQueue];
        updatedPersonsQueue[personIndex] = updatedPerson;

        setPersonsQueue(updatedPersonsQueue);
        setActualPositionNumber(positionSelected);

        const initial = 17 + offset * positionSelected;
        setInitialPositionY(initial);

      });
    }
  };

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
        data={personsQueue}
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
