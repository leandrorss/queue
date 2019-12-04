import React from 'react';
import {View, Text} from 'react-native';

import {Container} from './styles';
import QueueContainer from '~/components/QueueContainer';

const Main = () => {
  return (
    <Container>
      <QueueContainer />
    </Container>
  );
};

export default Main;
