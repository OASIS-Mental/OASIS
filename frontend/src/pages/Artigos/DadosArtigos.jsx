import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Header, ImagemLogo, NavHeader, NavLink } from './components/header-artigos';
import { Main, IntroducaoArtigos, TitleArtigos, ParagrafoDesenvolvimento } from './components/main-artigos';
import { ContainerArtigos, Artigos, DivArtigos, Container, ListaDeArtigos, Imagens } from './components/main-artigos';
import { FooterTem } from './components/footer-artigos';
import { StyledOverlay, StyledMessageBox, StyledButtonOK } from '../../components/mensage';

import UserAvatar from "../../components/UserAvatar";
import LogoOASIS from "../../assets/imgAbout/logo.svg";
import Imagem1 from "../../assets/imgArtigos/image13.svg";
import Imagem2 from "../../assets/imgArtigos/image11.svg";
import Imagem3 from "../../assets/imgArtigos/image12.svg";

export default function DadosArtigos() {
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
                <IntroducaoArtigos>
                    <TitleArtigos>
                        Navegando pelas Águas da Saúde Mental: Artigos, Dados e Estratégias Práticas
                    </TitleArtigos>
                    <ParagrafoDesenvolvimento>
                        Em um mundo onde o estresse e as pressões da vida cotidiana podem parecer avassaladores, é essencial ter acesso a recursos confiáveis ​​e estratégias práticas para cuidar da saúde mental. Neste artigo, vamos explorar como encontrar artigos informativos, dados relevantes e maneiras eficazes de promover o bem-estar emocional.
                    </ParagrafoDesenvolvimento>
                </IntroducaoArtigos>

                <ContainerArtigos>
                    <Artigos>
                        <DivArtigos>
                            <Container>
                                <ListaDeArtigos>
                                    O bem-estar psicológico, baseado em teorias do desenvolvimento humano, saúde mental e psicologia humanista-existencial, engloba autoaceitação, relacionamentos positivos, autonomia e propósito na vida. Este artigo revisa sua definição, origens e métodos de avaliação, destacando sua associação com a saúde. Há uma necessidade identificada de mais estudos sobre o bem-estar psicológico no Brasil. Saiba mais em:<a href="https://www.scielo.br/j/estpsi/a/J448bhT3RqFYwBDMgMqDPqg/#" target="_blank" onClick={handleLinkClick}> SciELO - Brasil - Bem-estar psicológico: definição, avaliação e principais correlatos Bem-estar psicológico: definição, avaliação e principais correlatos  </a></ListaDeArtigos>
                            </Container>
                            <Imagens src={Imagem1} alt="Imagem de Bem-estar psicológico" />
                        </DivArtigos>
                    </Artigos>
                </ContainerArtigos>

                <ContainerArtigos>
                    <Artigos>
                        <DivArtigos>
                            <Imagens src={Imagem2} alt="Imagem de Regulação emocional" />
                            <Container>
                                <ListaDeArtigos>
                                    Regulação emocional: entenda como esse conceito funciona e qual é o papel da psicoterapia no site<a href="https://blog.cognitivo.com/regulacao-emocional/" target="_blank" onClick={handleLinkClick}> Regulação emocional: entenda como esse conceito funciona e qual é o papel da psicoterapia</a>
                                </ListaDeArtigos>
                            </Container>
                        </DivArtigos>
                    </Artigos>
                </ContainerArtigos>

                <ContainerArtigos>
                    <Artigos>
                        <DivArtigos>
                            <Container>
                                <ListaDeArtigos>
                                    Como Lidar com Traumas: Técnicas Eficazes de Enfrentamento<br />
                                    <br />O enfrentamento de traumas é uma jornada desafiadora, mas essencial para a saúde mental e emocional. Afinal, como lidar com experiências traumáticas de forma eficaz? Quais são as técnicas mais recomendadas para superar os efeitos devastadores? Visite:<a href="https://psicanaliseblog.com.br/lidar-traumas-tecnicas-eficazes-enfrentamento/" target="_blank" onClick={handleLinkClick}>Lidar-traumas-tecnicas-eficazes-enfrentamento</a> <br />
                                    <br />Assista também, Luto: como lidar com a dor da perda // Viver Bem  <a href="https://www.bing.com/videos/riverview/relatedvideo?q=como%20lidar%20com%20a%20dor%20da%20perda&mid=244A16DC283195701AC1244A16DC283195701AC1&ajaxhist=0" target="_blank" onClick={handleLinkClick}>Bing Vídeos</a>

                                </ListaDeArtigos>


                            </Container>
                            <Imagens src={Imagem3} alt="Imagem de Como Lidar com Traumas" onClick={handleLinkClick}/>
                        </DivArtigos>
                    </Artigos>
                </ContainerArtigos>
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
    );
}