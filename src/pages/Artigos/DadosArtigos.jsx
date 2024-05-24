import React from "react";
import { useNavigate } from 'react-router-dom';

import { Header, ImagemLogo, NavHeader, NavLink } from './components/header-artigos';
import { Main, IntroducaoArtigos, TitleArtigos,ParagrafoDesenvolvimento } from './components/main-artigos';
import { ContainerArtigos, Artigos,DivArtigos, Container, ListaDeArtigos, Imagens } from './components/main-artigos';
import { FooterTem } from './components/footer-artigos';

import LogoOASIS from "../../assets/imgAbout/logo.svg";
import Imagem1 from "../../assets/imgArtigos/image13.svg";
import Imagem2 from "../../assets/imgArtigos/image11.svg";
import Imagem3 from "../../assets/imgArtigos/image12.svg";

export default function DadosArtigos() {
    const navigate = useNavigate();

    function goBackPage() {
        navigate('/');
    }

    return (
        <>
            <Header>
                <ImagemLogo src={LogoOASIS} alt="Logo OASIS" />
                <NavHeader>
                    <NavLink onClick={goBackPage}>Home</NavLink>
                    <NavLink href="#login">Login</NavLink>
                    <NavLink href="#register">Cadastrar</NavLink>
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
                                O bem-estar psicológico, baseado em teorias do desenvolvimento humano, saúde mental e psicologia humanista-existencial, engloba autoaceitação, relacionamentos positivos, autonomia e propósito na vida. Este artigo revisa sua definição, origens e métodos de avaliação, destacando sua associação com a saúde. Há uma necessidade identificada de mais estudos sobre o bem-estar psicológico no Brasil. Saiba mais em:<a href="https://www.scielo.br/j/estpsi/a/J448bhT3RqFYwBDMgMqDPqg/#"> SciELO - Brasil - Bem-estar psicológico: definição, avaliação e principais correlatos Bem-estar psicológico: definição, avaliação e principais correlatos  </a></ListaDeArtigos>
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
                                Regulação emocional: entenda como esse conceito funciona e qual é o papel da psicoterapia no site<a href="https://blog.cognitivo.com/regulacao-emocional/"> Regulação emocional: entenda como esse conceito funciona e qual é o papel da psicoterapia</a>
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
                                Como Lidar com Traumas: Técnicas Eficazes de Enfrentamento<br/>
                                <br/>O enfrentamento de traumas é uma jornada desafiadora, mas essencial para a saúde mental e emocional. Afinal, como lidar com experiências traumáticas de forma eficaz? Quais são as técnicas mais recomendadas para superar os efeitos devastadores? Visite:<a href="https://psicanaliseblog.com.br/lidar-traumas-tecnicas-eficazes-enfrentamento/">Lidar-traumas-tecnicas-eficazes-enfrentamento</a> <br/>
                                <br/>Assista também, Luto: como lidar com a dor da perda // Viver Bem  <a href="https://www.bing.com/videos/riverview/relatedvideo?q=como%20lidar%20com%20a%20dor%20da%20perda&mid=244A16DC283195701AC1244A16DC283195701AC1&ajaxhist=0">Bing Vídeos</a>
                                
                                </ListaDeArtigos>
                                
                       
                            </Container>
                            <Imagens src={Imagem3} alt="Imagem de Como Lidar com Traumas" />
                        </DivArtigos>
                    </Artigos>
                </ContainerArtigos>
                  </Main>
            <FooterTem />
        </>
    );
}