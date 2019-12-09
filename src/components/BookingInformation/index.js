import React from 'react';

import {
  Container,
  BookingInformationContainer,
  Title,
  DetailInformationContainer,
  Resume,
  IconBooking,
} from './styles';

const BookingInformation = () => {
  return (
    <Container>
      <BookingInformationContainer>
        <Title>Timeslot</Title>
        <DetailInformationContainer>
          <IconBooking iconName="timer" />
          <Resume>6 pm</Resume>
        </DetailInformationContainer>
      </BookingInformationContainer>

      <BookingInformationContainer>
        <Title># in Party</Title>
        <DetailInformationContainer>
          <IconBooking iconName="person" />
          <Resume>4</Resume>
        </DetailInformationContainer>
      </BookingInformationContainer>

      <BookingInformationContainer>
        <Title>Parties before you</Title>
        <DetailInformationContainer>
          <IconBooking iconName="person" />
          <Resume>2</Resume>
        </DetailInformationContainer>
      </BookingInformationContainer>

    </Container>
  );
};

export default BookingInformation;
