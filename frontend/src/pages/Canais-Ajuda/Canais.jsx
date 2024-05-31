import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Header, ImagemLogo, NavHeader, NavLink } from './components/header-canais';
import { Main, IntroducaoCanais, TitleCanais } from './components/main-canais';
import { ContainerCanais, Canais, TitleG1, DivG1, ContainerG1, ListaCanais, ImagemEstresse } from './components/main-canais';
import { FooterTem } from './components/footer-canais';
import { StyledOverlay, StyledMessageBox, StyledButtonOK } from '../../components/mensage';
import UserAvatar from "../../components/UserAvatar";

import LogoOASIS from "../../assets/imgAbout/logo.svg";
import ImgMG1 from "../../assets/imgCanaisAjuda/g1.svg";
import Maps from "../../assets/imgCanaisAjuda/map.svg";
import Peoples from "../../assets/imgCanaisAjuda/image20.svg";
import Cell from "../../assets/imgCanaisAjuda/image23.svg";
import Consulta from "../../assets/imgCanaisAjuda/image22.svg";
import Psitto from "../../assets/imgCanaisAjuda/image17.svg";
import CVV from "../../assets/imgCanaisAjuda/image16.svg";
import Psy from "../../assets/imgCanaisAjuda/image15.svg";

export default function CanaisAjuda() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoginMessage, setShowLoginMessage] = useState(false);
    const [setShowSuccessMessage] = useState(false); // Estado para mensagem de sucesso
    const [setShowErrorMessage] = useState(false); // Estado para mensagem de erro
    const [name, setName] = useState('');

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
        console.log('Editar Usuário');
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

    const handleLinkClick = (event) => {
        if (!isAuthenticated) {
            event.preventDefault();
            setShowLoginMessage(true);
        }
    };

    return (
        <>
            <Header>
                <ImagemLogo onClick={() => navigate("/")} src={LogoOASIS} alt="Logo" />
                <NavHeader>

                    <NavLink onClick={() => navigate("/")}>Home</NavLink>
                    {!isAuthenticated ? (
                        <>
                            <NavLink onClick={() => { navigate("/logar"); setShowLoginMessage(true); }}>Login</NavLink>
                            <NavLink onClick={() => navigate("/cadastro")}>Cadastrar</NavLink> </>
                    ) : (
                        <UserAvatar
                            userName={name}
                            onEdit={handleEditUser}
                            onLogout={handleLogout}
                        />
                    )}

                </NavHeader>
            </Header>

            <Main>
                <IntroducaoCanais>
                    <TitleCanais>Canais de Ajuda Profissional</TitleCanais>
                </IntroducaoCanais>

                <ContainerCanais>
                    <Canais>
                        <TitleG1>
                            <img src={ImgMG1} alt="G1 Logo" />
                            <h2>G1</h2>
                        </TitleG1>
                        <DivG1>
                            <ContainerG1>
                                <ListaCanais>O G1 disponibiliza um mapa com indicações de serviços de atenção psicossocial em todos os estados do Brasil e no Distrito Federal. Você pode encontrar opções de atendimento gratuito ou por “valor social” (preço reduzido). Muitos locais estão atendendo de forma on-line.<a href="https://g1.globo.com/bemestar/viva-voce/noticia/2021/04/25/veja-onde-buscar-atendimento-psicologico-on-line-gratuito-ou-pagando-valor-social.ghtml" target="_blank" onClick={handleLinkClick}> Continuar lendo sobre ...</a></ListaCanais>
                            </ContainerG1>
                            <ImagemEstresse src={Maps} />
                        </DivG1>
                    </Canais>
                </ContainerCanais>

                <ContainerCanais>
                    <Canais>
                        <DivG1>
                            <ImagemEstresse src={Peoples} />
                            <ContainerG1>
                                <TitleG1>
                                    <img src={Psitto} alt="Psitto Logo" />
                                    <h2>Psitto</h2>
                                </TitleG1>
                                <ListaCanais> Psitto é uma plataforma cuidadosamente elaborada para fornecer terapia online, reconhecendo que a vida cotidiana muitas vezes nos impede de priorizar nosso bem-estar emocional. Desde a abertura do primeiro consultório físico em 2010, a Psitto tem se dedicado a aprimorar suas estratégias de atendimento, priorizando a qualidade oferecida aos pacientes.
                                    Nela você agenda consultas online e gratuitas no site:<a href="https://www.psitto.com.br/psicologo/" target="_blank" onClick={handleLinkClick}> Conheça agora os profissionais da Psitto</a></ListaCanais>
                            </ContainerG1>
                        </DivG1>
                    </Canais>
                </ContainerCanais>

                <ContainerCanais>
                    <Canais>
                        <TitleG1>
                            <img src={CVV} alt="CVV Logo" />
                            <h2>Centro de Valorização da Vida (CVV)</h2>
                        </TitleG1>
                        <DivG1>
                            <ContainerG1>
                                <ListaCanais>O CW realiza apoio emocional e prevenção do suicídio, atendendo voluntária e gratuitamente todas as pessoas que querem e precisam conversar.<a href="https://cvv.org.br/" target="_blank" onClick={handleLinkClick}> Você pode entrar em contato por telefone, e-mail, chat e voip 24 horas por dia, todos os dias.</a></ListaCanais>
                            </ContainerG1>
                            <ImagemEstresse src={Cell} />
                        </DivG1>
                    </Canais>
                </ContainerCanais>

                <ContainerCanais>
                    <Canais>
                        <DivG1>
                            <ImagemEstresse src={Consulta} />
                            <ContainerG1>
                                <TitleG1>
                                    <img src={Psy} alt="PsyMeet Logo" />
                                    <h2>PsyMeet</h2>
                                </TitleG1>
                                <ListaCanais>PsyMeet: A PsyMeet Social oferece um meio simples e direto de contatar psicólogos profissionais.
                                    Procure um especialista de acordo com área de atuação e entre em contato imediatamente para agendar seu atendimento!
                                    Nosso serviço foi pensado para ser acessível a quem mais precisa: você! Veja em <a href="https://www.psymeetsocial.com/" target="_blank" onClick={handleLinkClick}> Terapia Online Social</a></ListaCanais>
                            </ContainerG1>
                        </DivG1>
                    </Canais>
                </ContainerCanais>
            </Main>
            <FooterTem />

            {/* Passar `show` condicionalmente */}
            <StyledOverlay show={showLoginMessage ? 1 : 0}>
                <StyledMessageBox>
                    <p>É necessário fazer login para navegar.</p>
                    <StyledButtonOK onClick={closeLoginMessage}>OK</StyledButtonOK>
                </StyledMessageBox>
            </StyledOverlay>
        </>
    )
}
