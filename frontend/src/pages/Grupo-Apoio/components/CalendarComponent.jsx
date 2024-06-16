import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Button = styled.button`
  color: white;
  background-color: #5BB1A4;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
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
    color: white;
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

const ConfirmationMessage = styled.p`
  margin-top: 15px; 
  color: green;
`;

export default function CalendarComponent({ onClose }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleDateChange = (date) => {
    if (selectedDate && selectedDate.getTime() === date.getTime()) {
      setSelectedDate(null); // Desmarca a data se a mesma data for clicada novamente
    } else {
      setSelectedDate(date);
    }
  };

  const handleButtonClick = () => {
    if (selectedDate) {
      console.log("Botão 'Perfeito' clicado. Data selecionada:", selectedDate);
      setConfirmationMessage(`Agendamento marcado para ${selectedDate.toLocaleDateString()} às 19h`);
    }
  };

  const tileClassName = ({ date }) => {
    const isSelected = selectedDate && selectedDate.getTime() === date.getTime();
    return isSelected ? 'react-calendar__tile--active' : null;
  };

  return (
    <CalendarWrapper>
      <StyledCalendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
      />

      <ButtonContainer>
        {selectedDate && <Button onClick={handleButtonClick}>Perfeito</Button>}
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ButtonContainer>
      {confirmationMessage && <ConfirmationMessage>{confirmationMessage}</ConfirmationMessage>}
    </CalendarWrapper>
  );
}
