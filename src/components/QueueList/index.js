import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

import redArrow from '../../../assets/images/red-arrow.png';

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
  ArrowIndicator,
  ContentArrowIndicatorContainer,
} from './styles';

import {PERSON_QUEUE} from '~/data/dummy-data';

const QueueList = () => {
  let positions = 0;
  const offset = 67;
  const margin = 17;

  const translateY = new Animated.Value(0);

  const personQueue = PERSON_QUEUE.find(p => p.selected);

  const [actualPosition, setActualPosition] = useState(personQueue.position);
  const [positionValue] = useState(offset);

  const [positionSelectedHighlight, setPositionSelectedHighlight] = useState(
    margin + offset * (personQueue.position - 1),
  );

  useEffect(() => {
    setTimeout(() => {
      checkQueue();
    }, Math.floor(Math.random() * 10) * 1000);
  }, [actualPosition]);

  const checkQueue = () => {
    if (personQueue.position > 1) {
      Animated.timing(translateY, {
        toValue: -positionValue,
        duration: 350,
        useNativeDriver: true,
      }).start(() => {
        personQueue.position = personQueue.position - 1;
        const initial = margin + offset * (personQueue.position - 1);
        setPositionSelectedHighlight(initial);
        setActualPosition(personQueue.position);
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
          <ArrowIndicator source={redArrow}>
            <ContentArrowIndicatorContainer>
              <QueueNumberSelected>{actualPosition}</QueueNumberSelected>
            </ContentArrowIndicatorContainer>
          </ArrowIndicator>
        </QueueNumberContainerSelected>
        <QueueIconContainerSelected>
          <QueueIconSelected />
        </QueueIconContainerSelected>
      </QueueItemSelected>
      <List
        data={PERSON_QUEUE}
        keyExtractor={item => String(item.id)}
        scrollEnabled={false}
        renderItem={() => {
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
