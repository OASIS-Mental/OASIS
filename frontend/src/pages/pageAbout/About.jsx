import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Header, ImagemLogo, NavHeader, NavLink } from './components/header-about';
import { Main, ImagemPeople, DivContiner, DivTitler, DivText } from './components/main-about';
import { Footer, FooterTitle, FooterCarrocel, FooterCardContainer, FooterDiv, FooterTitleContainer, ImagemUsers, FooterDivText, FooterDivPersona, ImagemCitar } from './components/footer-about';

import LogoOASIS from "../../assets/imgAbout/logo.svg";
import People from "../../assets/imgAbout/people.svg";
import Users from "../../assets/imgAbout/users.svg";
import Citar from "../../assets/imgAbout/citar.svg";
import UserAvatar from "../../components/UserAvatar";

export default function About() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoginMessage, setShowLoginMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
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

    const [dragging, setDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const carrosselRef = useRef(null);

    const [autoScroll, setAutoScroll] = useState(true);

    useEffect(() => {
        const carrossel = carrosselRef.current;
        let animationFrameId;
    
        const scrollCarrossel = () => {
            if (autoScroll) {
                carrossel.scrollLeft += 1; // Ajuste a velocidade de rolagem alterando o valor aqui
                if (carrossel.scrollLeft >= carrossel.scrollWidth / 2) {
                    // Reinicia a rolagem quando metade do carrossel foi percorrido
                    carrossel.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scrollCarrossel);
        };
    
        animationFrameId = requestAnimationFrame(scrollCarrossel);
    
        return () => cancelAnimationFrame(animationFrameId);
    }, [autoScroll]);

    const handleMouseDown = (event) => {
        setDragging(true);
        setDragStartX(event.clientX);
        setScrollLeft(carrosselRef.current.scrollLeft);
        setAutoScroll(false); // Stop auto scrolling when dragging starts
    };

    const handleMouseMove = (event) => {
        if (!dragging) return;
        const distance = event.clientX - dragStartX;
        carrosselRef.current.scrollLeft = scrollLeft - distance;
    };

    const handleMouseUp = () => {
        setDragging(false);
        setTimeout(() => setAutoScroll(true), 2000); // Restart auto scrolling after 2 seconds
    };

    const handleMouseEnter = () => {
        setAutoScroll(false); // Stop auto scrolling when mouse enters the carrossel
    };

    const handleMouseLeave = () => {
        setTimeout(() => setAutoScroll(true), 2000); // Restart auto scrolling after 2 seconds
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
                <ImagemPeople src={People} alt="People" />
                <DivContiner>
                    <DivTitler>Descubra Seu Potencial: Um Convite à Jornada de Autodescoberta</DivTitler>
                    <DivText>Um site dedicado ao apoio e ao aprimoramento pessoal pode servir como um farol de orientação para aqueles que buscam uma jornada de autodescoberta e desenvolvimento. Nesse espaço, os visitantes encontrarão uma ampla gama de recursos cuidadosamente selecionados, desde artigos inspiradores até ferramentas práticas, todos destinados a capacitá-los em sua busca por uma vida mais significativa e satisfatória. Seja através de exercícios de reflexão, dicas de autoaperfeiçoamento, recomendações de leitura ou até mesmo a oportunidade de se conectar com uma comunidade de apoio, cada elemento do site é projetado com um único propósito: ajudar os usuários a descobrirem seu potencial máximo e a trilharem um caminho de autoconhecimento e realização pessoal.</DivText>
                </DivContiner>
            </Main>

            <Footer>

                <FooterTitleContainer>
                    <FooterTitle>DEPOIMENTOS DOS NOSSOS INTEGRANTES</FooterTitle>
                </FooterTitleContainer>

                <FooterCarrocel
                    ref={carrosselRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Original items */}
                    <FooterCardContainer>
                        <FooterDiv>
                            <ImagemCitar src={Citar} alt="" />
                            <FooterDivText>O site me ajudou a lidar com o estresse da faculdade. As dicas de relaxamento me deram mais confiança.</FooterDivText>
                            <FooterDivPersona><ImagemUsers src={Users} alt="" />Ana Clara</FooterDivPersona>
                        </FooterDiv>
                    </FooterCardContainer>

                    <FooterCardContainer>
                        <FooterDiv>
                            <ImagemCitar src={Citar} alt="" />
                            <FooterDivText>Consegui melhorar meus relacionamentos graças às dicas do site. Aprendi a estabelecer limites e me comunicar melhor.</FooterDivText>
                            <FooterDivPersona><ImagemUsers src={Users} alt="" />Pedro Lucas</FooterDivPersona>
                        </FooterDiv>
                    </FooterCardContainer>

                    <FooterCardContainer>
                        <FooterDiv>
                            <ImagemCitar src={Citar} alt="" />
                            <FooterDivText>Depois de perder meu emprego, o site me ajudou a definir novas metas e encontrar um propósito. Estou animada com o futuro.</FooterDivText>
                            <FooterDivPersona><ImagemUsers src={Users} alt="" />Sofia Lara</FooterDivPersona>
                        </FooterDiv>
                    </FooterCardContainer>

                    <FooterCardContainer>
                        <FooterDiv>
                            <ImagemCitar src={Citar} alt="" />
                            <FooterDivText>Encontrei apoio para minha ansiedade e depressão no site. As técnicas de relaxamento e mindfulness me ajudaram a enfrentar os desafios.</FooterDivText>
                            <FooterDivPersona><ImagemUsers src={Users} alt="" /><p>João Mark</p></FooterDivPersona>
                        </FooterDiv>
                    </FooterCardContainer>

                    <FooterCardContainer>
                        <FooterDiv>
                            <ImagemCitar src={Citar} alt="" />
                            <FooterDivText>Encontrei apoio para minha ansiedade e depressão no site. As técnicas de relaxamento e mindfulness me ajudaram a enfrentar os desafios.</FooterDivText>
                            <FooterDivPersona><ImagemUsers src={Users} alt="" /><p>Carlos Augusto</p></FooterDivPersona>
                        </FooterDiv>
                    </FooterCardContainer>

                    {/* Cloned items for infinite loop */}
                    <FooterCardContainer>
                        <FooterDiv>
                            <ImagemCitar src={Citar} alt="" />
                            <FooterDivText>O site me ajudou a lidar com o estresse da faculdade. As dicas de relaxamento me deram mais confiança.</FooterDivText>
                            <FooterDivPersona><ImagemUsers src={Users} alt="" />Ana Clara</FooterDivPersona>
                        </FooterDiv>
                    </FooterCardContainer>

                    <FooterCardContainer>
                        <FooterDiv>
                            <ImagemCitar src={Citar} alt="" />
                            <FooterDivText>Consegui melhorar meus relacionamentos graças às dicas do site. Aprendi a estabelecer limites e me comunicar melhor.</FooterDivText>
                            <FooterDivPersona><ImagemUsers src={Users} alt="" />Pedro Lucas</FooterDivPersona>
                        </FooterDiv>
                    </FooterCardContainer>

                    <FooterCardContainer>
                        <FooterDiv>
                            <ImagemCitar src={Citar} alt="" />
                            <FooterDivText>Depois de perder meu emprego, o site me ajudou a definir novas metas e encontrar um propósito. Estou animada com o futuro.</FooterDivText>
                            <FooterDivPersona><ImagemUsers src={Users} alt="" />Sofia Lara</FooterDivPersona>
                        </FooterDiv>
                    </FooterCardContainer>

                    <FooterCardContainer>
                        <FooterDiv>
                            <ImagemCitar src={Citar} alt="" />
                            <FooterDivText>Encontrei apoio para minha ansiedade e depressão no site. As técnicas de relaxamento e mindfulness me ajudaram a enfrentar os desafios.</FooterDivText>
                            <FooterDivPersona><ImagemUsers src={Users} alt="" /><p>João Mark</p></FooterDivPersona>
                        </FooterDiv>
                    </FooterCardContainer>

                    <FooterCardContainer>
                        <FooterDiv>
                            <ImagemCitar src={Citar} alt="" />
                            <FooterDivText>Encontrei apoio para minha ansiedade e depressão no site. As técnicas de relaxamento e mindfulness me ajudaram a enfrentar os desafios.</FooterDivText>
                            <FooterDivPersona><ImagemUsers src={Users} alt="" /><p>Carlos Augusto</p></FooterDivPersona>
                        </FooterDiv>
                    </FooterCardContainer>
                </FooterCarrocel>

            </Footer>
        </>
    );
}
