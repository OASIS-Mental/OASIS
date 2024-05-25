import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Header, ImagemLogo, NavHeader, NavLink } from './components/header-apoio';
import { Main, IntroducaoApoio, TitleApoio, DescriptionApoio, TitleSub, Paragrafo } from './components/main-apoio';
import { InfoApoio, ListaApoio, ItemApoio, Imagem, MapaApoio, DivFinal, ParagrafoFinal, Linha } from './components/main-apoio';
import { Calendaroverlay, CalendarContainer } from './components/main-apoio';
import { FooterTem } from './components/footer-apoio';

import CalendarComponent from './components/CalendarComponent';
import MeetingCalendar from './components/MeetingCalendar';

import LogoOASIS from "../../assets/imgAbout/logo.svg";
import Calendario from "../../assets/imgApoio/calendario.svg";
import Group from "../../assets/imgApoio/group.svg";
import Pin from "../../assets/imgApoio/pin.svg";
import Whatsapp from "../../assets/imgApoio/whatsapp.svg";


export default function Apoio() {
    const navigate = useNavigate();
    const [showCalendar, setShowCalendar] = useState(false);
    const [showMeetingCalendar, setShowMeetingCalendar] = useState(false);
    const [markedDates, setMarkedDates] = useState([new Date(2023, 4, 3), new Date(2023, 4, 10)]); // Exemplos de datas marcadas
    const [selectedDate, setSelectedDate] = useState(null);

    function goBackPage() {
        navigate('/');
    }
    async function addActionLogin() {
        navigate("/logar" )
      }
      
      async function addActionCadastrar() {
        navigate("/cadastro")
      }
      

    function toggleCalendar() {
        setShowCalendar(!showCalendar);
    }

    function toggleMeetingCalendar() {
        setShowMeetingCalendar(!showMeetingCalendar);
    }

    function handleDateHover(date) {
        console.log("Hovered date:", date);
    }

    function handleDateSelect(date) {
        setSelectedDate(date);
    }

    return (
        <>
            <Header>
                <ImagemLogo onClick={goBackPage} src={LogoOASIS} alt="Logo" />
                <NavHeader>
                    <NavLink onClick={goBackPage}>Home</NavLink>
                    <NavLink onClick={addActionLogin}>Login</NavLink>
                    <NavLink onClick={addActionCadastrar}>Cadastrar</NavLink>
                </NavHeader>
            </Header>
            <Main className={showCalendar || showMeetingCalendar ? "blurred" : ""}>
                <IntroducaoApoio>
                    <TitleApoio>Grupo de Apoio</TitleApoio>
                </IntroducaoApoio>
                <DescriptionApoio>
                    <TitleSub>Selecione sua forma de participação:</TitleSub>
                    <Paragrafo>Clique no ícone para participar de todas as opções disponíveis.</Paragrafo>
                </DescriptionApoio>
                <InfoApoio>
                    <ListaApoio>
                        <ItemApoio>
                            <Imagem src={Whatsapp} /> Entrar no Grupo do WhatsApp: Conecte-se com outros membros do grupo para compartilhar experiências e oferecer apoio mútuo em tempo real.
                        </ItemApoio>
                        <ItemApoio >
                            <Imagem src={Calendario} onClick={toggleCalendar} /> Reuniões Online: Escolha um dia conveniente, horário sempre às 20h, inscreva-se e participe.
                        </ItemApoio>
                        <ItemApoio >
                            <Imagem src={Pin}onClick={toggleMeetingCalendar} /> Participação Presencial: Temos no momento em Belo Horizonte, MG, Parque Municipal. Explore no calendário as datas dos encontros de acordo com o mês, são os marcados. Os horários são todos às 15h.
                        </ItemApoio>
                    </ListaApoio>
                    <MapaApoio src={Group} />
                </InfoApoio>
                <DivFinal>
                    <Linha />
                    <ParagrafoFinal>Esperamos vê-lo em nossas reuniões presenciais, onde você pode compartilhar, apoiar e encontrar solidariedade em sua jornada emocional.</ParagrafoFinal>
                </DivFinal>
            </Main>
            {showCalendar && (
                <Calendaroverlay>
                    <CalendarContainer>
                        <CalendarComponent onClose={toggleCalendar} />
                    </CalendarContainer>
                </Calendaroverlay>
            )}
            {showMeetingCalendar && (
                <Calendaroverlay>
                    <CalendarContainer>
                        <MeetingCalendar
                            markedDates={markedDates}
                            selectedDate={selectedDate}
                            onDateSelect={handleDateSelect}
                            onDateHover={handleDateHover}
                            onClose={toggleMeetingCalendar}
                        />
                    </CalendarContainer>
                </Calendaroverlay>
            )}
            <FooterTem />
        </>
    );
}