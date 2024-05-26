import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const StyledCalendar = styled(Calendar)`
  &.react-calendar {
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .react-calendar__navigation button {
    color: #156B5D;
  }

  .react-calendar__tile {
    border-radius: 6px;
    height: 50px;
  }

  .react-calendar__tile--active,
  .react-calendar__tile--now {
    background: #c69c02;
    color: #ffffff;
  }

  .react-calendar__tile--meeting-date {
    background: #156B5D;
    color: white;
  }

  .react-calendar__tile--selected-date {
    background: #65BBAD;
    color: white;
  }

  .react-calendar__tile--available-date:hover {
    background: #5BB1A4;
    color: white;
  }

  .react-calendar__tile--disabled {
    background: #F4F4F4;
    color: #D3D3D3;
    pointer-events: none;
  }

  .react-calendar__tile--hasActive {
    background: #156B5D;
    color: white;
  }

  .react-calendar__tile {
    &:hover {
      background: #65BBAD !important;
    }
  }

  .react-calendar__tile--active {
    background: #156B5D !important;
    color: white !important;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ConfirmButton = styled.button`
  background-color: #65BBAD;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
`;

const CloseButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
`;

const MeetingCalendar = ({ markedDates, selectedDate, onDateSelect, onClose }) => {
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const tileClassName = ({ date }) => {
    const isMarked = markedDates.some(mark => mark.getTime() === date.getTime());
    const isSelected = selectedDate && selectedDate.getTime() === date.getTime();
    return isMarked ? 'meeting-date' : isSelected ? 'selected-date' : null;
  };

  const handleDateClick = (date) => {
    const isMarked = markedDates.some(mark => mark.getTime() === date.getTime());
    if (isMarked) {
      onDateSelect(date);
    }
  };

  const handleButtonClick = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString();
      const selectedName = 'Nome Inserido'; // Substitua isso pela lógica real
      setConfirmationMessage(`Agendamento marcado para ${formattedDate} com ${selectedName}`);
    }
  };

  return (
    <>
      <StyledCalendar
        tileClassName={tileClassName}
        onClickDay={handleDateClick}
      />
      <ButtonContainer>
        <ConfirmButton onClick={handleButtonClick}>Perfeito</ConfirmButton>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ButtonContainer>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </>
  );
};

export default MeetingCalendar;
