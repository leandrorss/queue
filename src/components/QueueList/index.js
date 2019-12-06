import React from 'react';

import {
  Container,
  QueueItem,
  QueueIconContainer,
  QueueNumberContainer,
  QueueNumber,
  QueueIcon,
} from './styles';

const QueueList = () => {
  return (
    <Container>
      <QueueItem>
        <QueueNumberContainer>
          <QueueNumber>1</QueueNumber>
        </QueueNumberContainer>
        <QueueIconContainer>
          <QueueIcon />
        </QueueIconContainer>
      </QueueItem>
    </Container>
  );
};

export default QueueList;
