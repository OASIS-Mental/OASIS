import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Header, ImagemLogo, NavHeader, NavLink } from './components/header-apoio';
import { Main, IntroducaoApoio, TitleApoio, DescriptionApoio, TitleSub, Paragrafo, Span } from './components/main-apoio';
import { InfoApoio, ListaApoio, ItemApoio, Imagem, MapaApoio, DivFinal, ParagrafoFinal, Linha } from './components/main-apoio';
import { Calendaroverlay, CalendarContainer } from './components/main-apoio';
import { StyledOverlay, StyledMessageBox, StyledButtonOK } from '../../components/mensage';
import { FooterTem } from './components/footer-apoio';

import CalendarComponent from './components/CalendarComponent';
import CalendarWrapper from './components/CalendarWrapper';


import LogoOASIS from "../../assets/imgAbout/logo.svg";
import Calendario from "../../assets/imgApoio/calendario.svg";
import Group from "../../assets/imgApoio/group.svg";
import Pin from "../../assets/imgApoio/pin.svg";
import Whatsapp from "../../assets/imgApoio/whatsapp.svg";
import UserAvatar from "../../components/UserAvatar";

export default function Apoio() {
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoginMessage, setShowLoginMessage] = useState(false);
    const [setShowSuccessMessage] = useState(false); // Estado para mensagem de sucesso
    const [setShowErrorMessage] = useState(false); // Estado para mensagem de erro
    const [name, setName] = useState('');

    const [showCalendar, setShowCalendar] = useState(false);
    const [showMeetingCalendar, setShowMeetingCalendar] = useState(false);
    const [markedDates, setMarkedDates] = useState([new Date(2023, 4, 3), new Date(2023, 4, 10)]); // Exemplos de datas marcadas
    const [selectedDate, setSelectedDate] = useState(null);


    useEffect(() => {
        checkAuthentication();
    }, []);

    async function checkAuthentication() {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            const userNameFromLocalStorage = localStorage.getItem('userName');
            setName(userNameFromLocalStorage || '');
        }
    }

    async function handleLogin() {
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            setIsAuthenticated(true);

            // Verifique se a resposta do servidor contém os dados esperados
            const { user, token } = response.data;
            if (user && token) {
                // Armazena os dados do usuário no localStorage
                localStorage.setItem('user', JSON.stringify(user));

                // Armazena o token de autenticação no localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('userName', user.name);

                // Atualiza o estado do nome do usuário
                setName(user.name);

                navigate('/');
            } else {
                setErrorMessage('Resposta do servidor inválida.');
            }
        } catch (error) {
            setErrorMessage('Email ou senha incorretos.');
        }
    }

    function handleLogout() {
        setEmail('');
        setPassword('');
        setErrorMessage(''); // Agora está correta
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('userName');
        setIsAuthenticated(false);
        setName(''); // Limpa o nome do usuário no estado
        navigate('/');
    }

    function handleEditUser() {
        navigate('/reset-users');
    }

    function redirectUser(path) {
        navigate(path);
    }

    function closeLoginMessage() {
        setShowLoginMessage(false);
    }

    function closeCustomMessage() {
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
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

    const handleLinkClick = (event) => {
        if (!isAuthenticated) {
            event.preventDefault();
            setShowLoginMessage(true);
        }
    };

    function handleCalendarioClick() {
        if (isAuthenticated) {
            setShowCalendar(true);
            setShowMeetingCalendar(false);
        } else {
            setShowLoginMessage(true);
        }
    }
    
    function handlePinClick() {
        if (isAuthenticated) {
            setShowMeetingCalendar(true);
            setShowCalendar(false);
        } else {
            setShowLoginMessage(true);
        }
    }
    

    return (
        <>
            <Header>
                <ImagemLogo onClick={() => navigate("/")} src={LogoOASIS} alt="Logo" />
                <NavHeader>

                    <NavLink onClick={() => navigate("/")}>Home</NavLink>
                    {!isAuthenticated ? (
                        <>
                            <NavLink onClick={() => { navigate("/logar"); setShowLoginMessage(true); }}>Login</NavLink>
                            <NavLink onClick={() => navigate("/cadastro")}>Cadastrar</NavLink>
                        </>
                    ) : (
                        <UserAvatar
                            userName={name}
                            onEdit={handleEditUser}
                            onLogout={handleLogout}
                        />
                    )}

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

                <InfoApoio authenticated={isAuthenticated ? 'true' : undefined}>
                    <ListaApoio>
                        <ItemApoio>
                            <Imagem src={Whatsapp} onClick={handleLinkClick} /> Entrar no Grupo do WhatsApp: Conecte-se com outros membros do grupo para compartilhar experiências e oferecer apoio mútuo em tempo real.
                        </ItemApoio>
                        <ItemApoio >
                            <Imagem src={Calendario} onClick={handleCalendarioClick} /> Reuniões Online: Escolha um dia conveniente, horário sempre às 19h, inscreva-se e participe.
                        </ItemApoio>
                        <ItemApoio >
                            <Imagem src={Pin} onClick={handlePinClick} /> Participação Presencial
                            {isAuthenticated && (
                                <Span>: Temos no momento em Belo Horizonte, MG, Parque Municipal. Explore no calendário as datas dos encontros de acordo com o mês, são os marcados. Os horários são todos às 15h.</Span>
                            )}
                        </ItemApoio>
                    </ListaApoio>
                    {isAuthenticated && (
                        <MapaApoio src={Group} />
                    )}
                </InfoApoio>

                {isAuthenticated && (
                    <DivFinal>
                        <Linha />
                        <ParagrafoFinal>Esperamos vê-lo em nossas reuniões presenciais, onde você pode compartilhar, apoiar e encontrar solidariedade em sua jornada emocional.</ParagrafoFinal>
                    </DivFinal>
                )}
            </Main>

             {showCalendar && isAuthenticated && (
                <Calendaroverlay>
                    <CalendarContainer>
                        <CalendarComponent onClose={toggleCalendar} />
                    </CalendarContainer>
                </Calendaroverlay>
            )}

            {showMeetingCalendar && isAuthenticated && (
                <Calendaroverlay>
                    <CalendarContainer>
                        <CalendarWrapper
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

            <StyledOverlay show={showLoginMessage ? 1 : 0}>
                <StyledMessageBox>
                    <p>É necessário fazer login para navegar.</p>
                    <StyledButtonOK onClick={closeLoginMessage}>OK</StyledButtonOK>
                </StyledMessageBox>
            </StyledOverlay>
        </>
    );
}
