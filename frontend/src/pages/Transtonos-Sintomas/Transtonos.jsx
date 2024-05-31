import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Header, ImagemLogo, NavHeader, NavLink } from './components/header-transtornos';
import { Introducao, Title } from './components/main-transtornos';
import { Main, Estresse, DivEstresse, TitleEstresse, Container, ContainerEstresse, ListaEstresse, ImagemEstresse } from './components/main-transtornos';
import { FooterTem } from './components/footer-transtorno';
import UserAvatar from "../../components/UserAvatar";

import LogoOASIS from "../../assets/imgAbout/logo.svg";
import Imagem1 from "../../assets/imgTranstornos/foto1.svg"
import Imagem2 from "../../assets/imgTranstornos/foto2.svg"
import Imagem3 from "../../assets/imgTranstornos/foto3.svg"
import Imagem4 from "../../assets/imgTranstornos/foto4.svg"
import Imagem5 from "../../assets/imgTranstornos/foto5.svg"
import Imagem6 from "../../assets/imgTranstornos/foto6.svg"
import Imagem7 from "../../assets/imgTranstornos/foto7.svg"
import Imagem8 from "../../assets/imgTranstornos/foto8.svg"

export default function Transtonos() {
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

                <Introducao>
                    <Title>Explorando a Complexidade da Saúde Mental: Conheça os Diversos Transtornos e Sintomas</Title>
                </Introducao>

                <Container>

                    <Estresse>
                        <DivEstresse>
                            <ContainerEstresse>
                                <TitleEstresse>Estresse no Dia a Dia</TitleEstresse>
                                <ListaEstresse>Dificuldade em concentrar-se nas tarefas.</ListaEstresse>
                                <ListaEstresse>Tensão muscular persistente, como dores nas costas ou no pescoço.</ListaEstresse>
                                <ListaEstresse>Mudanças no apetite, como comer em excesso ou falta de apetite.</ListaEstresse>
                                <ListaEstresse>Desânimo constante, falta de motivação para realizar atividades do dia a dia.</ListaEstresse>
                                <ListaEstresse>Problemas digestivos, como azia, refluxo ou síndrome do intestino irritável.</ListaEstresse>
                            </ContainerEstresse>
                            <ImagemEstresse src={Imagem1} />
                        </DivEstresse>
                    </Estresse>

                    <Estresse>
                        <DivEstresse>
                            <ImagemEstresse src={Imagem2} />
                            <ContainerEstresse>
                                <TitleEstresse>Ansiedade</TitleEstresse>
                                <ListaEstresse>Preocupações excessivas com eventos futuros, mesmo os de pequena importância.</ListaEstresse>
                                <ListaEstresse>Sensação de nervosismo ou apreensão constante.</ListaEstresse>
                                <ListaEstresse>Medo irracional de situações específicas, como viajar de avião ou falar em público.</ListaEstresse>
                                <ListaEstresse>Insônia ou dificuldade em dormir devido a pensamentos ansiosos.</ListaEstresse>
                                <ListaEstresse>Sintomas físicos, como palpitações cardíacas, sudorese excessiva ou tremores.</ListaEstresse>
                            </ContainerEstresse>
                        </DivEstresse>
                    </Estresse>

                    <Estresse>

                        <DivEstresse>
                            <ContainerEstresse>
                                <TitleEstresse>Depressão</TitleEstresse>
                                <ListaEstresse>Sentimentos de desesperança ou vazio persistente.</ListaEstresse>
                                <ListaEstresse>Perda de interesse em atividades que antes eram prazerosas.</ListaEstresse>
                                <ListaEstresse>Alterações no peso ou apetite, como ganho ou perda significativa de peso sem motivo aparente.</ListaEstresse>
                                <ListaEstresse>Fadiga extrema ou falta de energia, mesmo após um bom sono.</ListaEstresse>
                                <ListaEstresse>Dificuldade em se concentrar ou tomar decisões simples.</ListaEstresse>
                            </ContainerEstresse>
                            <ImagemEstresse src={Imagem3} />
                        </DivEstresse>
                    </Estresse>

                    <Estresse>

                        <DivEstresse>
                            <ImagemEstresse src={Imagem4} />
                            <ContainerEstresse>
                                <TitleEstresse>Solidão e Isolamento Social</TitleEstresse>
                                <ListaEstresse>Sensação de desconexão ou distanciamento dos outros, mesmo quando cercado por pessoas..</ListaEstresse>
                                <ListaEstresse>Falta de interesse em fazer planos sociais ou participar de atividades em grupo.</ListaEstresse>
                                <ListaEstresse>Sentimento de vazio emocional, mesmo em situações sociais.</ListaEstresse>
                                <ListaEstresse>Dificuldade em iniciar ou manter relacionamentos significativos.</ListaEstresse>
                                <ListaEstresse>Impacto na autoestima e autoconfiança devido à falta de interação social.</ListaEstresse>
                            </ContainerEstresse>
                        </DivEstresse>
                    </Estresse>

                    <Estresse>
                        <DivEstresse>
                            <ContainerEstresse>
                                <TitleEstresse>Transtorno Obsessivo-Compulsivo (TOC)</TitleEstresse>
                                <ListaEstresse>Pensamentos obsessivos persistentes e indesejados, como preocupações com germes, segurança ou ordem.</ListaEstresse>
                                <ListaEstresse>Comportamentos compulsivos repetitivos, como lavar as mãos, verificar constantemente as fechaduras das portas ou organizar itens de forma específica.</ListaEstresse>
                                <ListaEstresse>Sentimentos de ansiedade intensa ou desconforto quando os rituais compulsivos não são realizados.</ListaEstresse>
                                <ListaEstresse>Impacto significativo nas atividades diárias e relacionamentos devido ao TOC.</ListaEstresse>
                            </ContainerEstresse>
                            <ImagemEstresse src={Imagem5} />
                        </DivEstresse>
                    </Estresse>

                    <Estresse>

                        <DivEstresse>
                            <ImagemEstresse src={Imagem6} />
                            <ContainerEstresse>
                                <TitleEstresse>Transtorno de Estresse Pós-Traumático (TEPT)</TitleEstresse>
                                <ListaEstresse>Flashbacks perturbadores ou intrusivos de um evento traumático passado.</ListaEstresse>
                                <ListaEstresse>Pesadelos frequentes relacionados ao trauma.</ListaEstresse>
                                <ListaEstresse>Evitação de lugares, pessoas ou atividades que lembrem o evento traumático.</ListaEstresse>
                                <ListaEstresse>Hipervigilância ou sensação constante de perigo iminente.</ListaEstresse>
                                <ListaEstresse>Mudanças de humor, incluindo irritabilidade, raiva ou sentimentos de culpa.</ListaEstresse>
                            </ContainerEstresse>

                        </DivEstresse>
                    </Estresse>

                    <Estresse>
                        <DivEstresse>
                            <ContainerEstresse>
                                <TitleEstresse>Transtorno Bipolar</TitleEstresse>
                                <ListaEstresse>Mudanças extremas de humor, incluindo períodos de mania, euforia ou hipomania seguidos por episódios de depressão.</ListaEstresse>
                                <ListaEstresse>Aumento da atividade ou energia durante os episódios de mania, como falar rápido demais, agitação ou comportamento impulsivo.</ListaEstresse>
                                <ListaEstresse>Baixa energia, fadiga e falta de motivação durante os episódios depressivos.</ListaEstresse>
                                <ListaEstresse>Flutuações no sono e no apetite.</ListaEstresse>
                                <ListaEstresse>Dificuldade em manter relacionamentos e manter um emprego estável.</ListaEstresse>
                            </ContainerEstresse>
                            <ImagemEstresse src={Imagem7} />
                        </DivEstresse>
                    </Estresse>

                    <Estresse>

                        <DivEstresse>
                            <ImagemEstresse src={Imagem8} />
                            <ContainerEstresse>
                                <TitleEstresse>Transtorno de Personalidade Borderline (TPB)</TitleEstresse>
                                <ListaEstresse>Instabilidade emocional intensa, incluindo mudanças rápidas de humor e sentimentos de vazio.</ListaEstresse>
                                <ListaEstresse>Relacionamentos instáveis ​​e intensos, caracterizados por idealização e desvalorização de outras pessoas.</ListaEstresse>
                                <ListaEstresse>Comportamentos impulsivos, como gastos excessivos, abuso de substâncias, comportamento sexual de risco ou autolesão.</ListaEstresse>
                                <ListaEstresse>Medo intenso de abandono e esforços frenéticos para evitar o abandono.</ListaEstresse>
                                <ListaEstresse>Alterações na autoimagem, autoimagem instável e sentimentos crônicos de vazio.</ListaEstresse>
                            </ContainerEstresse>
                        </DivEstresse>
                    </Estresse>

                </Container>

                <FooterTem />

            </Main>
        </>
    )
}