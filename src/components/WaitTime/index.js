import React from 'react';

import {Container, BottomContainer, IconTimer, Timer} from './styles';

const WaitTime = () => {
  return (
    <Container>
      <BottomContainer>
        <IconTimer />
        <Timer>Wait Time</Timer>
      </BottomContainer>
    </Container>
  );
};

export default WaitTime;
