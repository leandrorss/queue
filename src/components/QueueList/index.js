import React from 'react';

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
  return (
    <Container>
      <QueueItemSelected>
        <QueueNumberContainerSelected>
          <QueueNumberSelected>1</QueueNumberSelected>
        </QueueNumberContainerSelected>
        <QueueIconContainerSelected>
          <QueueIconSelected />
        </QueueIconContainerSelected>
      </QueueItemSelected>

      <QueueItem>
        <QueueNumberContainer>
          <QueueNumber>1</QueueNumber>
        </QueueNumberContainer>
        <QueueIconContainer>
          <QueueIcon />
        </QueueIconContainer>
      </QueueItem>

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
