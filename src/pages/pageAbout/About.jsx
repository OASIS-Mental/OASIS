import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, ImagemLogo, NavHeader, NavLink } from './components/header-about';
import { Main, ImagemPeople, DivContiner, DivTitler, DivText } from './components/main-about';
import { Footer, FooterTitle, FooterCarrocel, FooterCardContainer, FooterDiv, FooterTitleContainer, ImagemUsers, FooterDivText, FooterDivPersona, ImagemCitar } from './components/footer-about';

import LogoOASIS from "../../assets/imgAbout/logo.svg";
import People from "../../assets/imgAbout/people.svg";
import Users from "../../assets/imgAbout/users.svg";
import Citar from "../../assets/imgAbout/citar.svg";

export default function About() {
    const navigate = useNavigate();

    function goBackPage() {
        navigate('/');
    }
    async function addActionLogin() {
        navigate("/logar" )
      }
      
      async function addActionCadastrar() {
        navigate("/cadastro")
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
                if (carrossel.scrollLeft >= carrossel.scrollWidth / 2) {
                    carrossel.scrollLeft = 0;
                } else {
                    carrossel.scrollLeft += 1;
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
        setAutoScroll(false); 
    };

    const handleMouseMove = (event) => {
        if (!dragging) return;
        const distance = event.clientX - dragStartX;
        carrosselRef.current.scrollLeft = scrollLeft - distance;
    };

    const handleMouseUp = () => {
        setDragging(false);
        setTimeout(() => setAutoScroll(true), 2000); 
    };

    const handleMouseEnter = () => {
        setAutoScroll(false); 
    };

    const handleMouseLeave = () => {
        setTimeout(() => setAutoScroll(true), 2000); 
    };

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