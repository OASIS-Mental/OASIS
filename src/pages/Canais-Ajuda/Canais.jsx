import React from "react";
import { useNavigate } from 'react-router-dom';

import { Header, ImagemLogo, NavHeader, NavLink } from './components/header-canais';
import { Main, IntroducaoCanais, TitleCanais } from './components/main-canais';
import { ContainerCanais, Canais, TitleG1, DivG1, ContainerG1, ListaCanais, ImagemEstresse } from './components/main-canais';
import { FooterTem } from './components/footer-canais';

import LogoOASIS from "../../assets/imgAbout/logo.svg";
import ImgMG1 from "../../assets/imgCanaisAjuda/g1.svg";
import Maps from "../../assets/imgCanaisAjuda/map.svg";
import Peoples from "../../assets/imgCanaisAjuda/image20.svg";
import Cell from "../../assets/imgCanaisAjuda/image23.svg";
import Consulta from "../../assets/imgCanaisAjuda/image22.svg";
import Psitto from "../../assets/imgCanaisAjuda/image17.svg";
import CVV from "../../assets/imgCanaisAjuda/image16.svg";
import Psy from "../../assets/imgCanaisAjuda/image15.svg";

export default function Transtonos() {
    const navigate = useNavigate();

    function goBackPage() {
        navigate('/');
    }

    async function addActionLogin() {
        navigate("/logar")
    }

    async function addActionCadastrar() {
        navigate("/cadastro")
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
                                <ListaCanais>O G1 disponibiliza um mapa com indicações de serviços de atenção psicossocial em todos os estados do Brasil e no Distrito Federal. Você pode encontrar opções de atendimento gratuito ou por “valor social” (preço reduzido). Muitos locais estão atendendo de forma on-line.<a href="https://g1.globo.com/bemestar/viva-voce/noticia/2021/04/25/veja-onde-buscar-atendimento-psicologico-on-line-gratuito-ou-pagando-valor-social.ghtml" target="_blank"> Para navegar no mapa, dê zoom no seu estado e clique nas bolinhas para ver as opções.</a></ListaCanais>
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
                                    Nela você agenda consultas online e gratuitas no site:<a href="https://www.psitto.com.br/psicologo/" target="_blank"> Psicólogo Online | Conheça agora os profissionais da Psitto</a></ListaCanais>
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
                                <ListaCanais>O CW realiza apoio emocional e prevenção do suicídio, atendendo voluntária e gratuitamente todas as pessoas que querem e precisam conversar.<a href="https://cvv.org.br/" target="_blank"> Você pode entrar em contato por telefone, e-mail, chat e voip 24 horas por dia, todos os dias3</a></ListaCanais>
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
                                    Nosso serviço foi pensado para ser acessível a quem mais precisa: você! Veja em <a href="https://www.psymeetsocial.com/" target="_blank"> Terapia Online Social - PsyMeet</a></ListaCanais>
                            </ContainerG1>
                        </DivG1>
                    </Canais>
                </ContainerCanais>
            </Main>
            <FooterTem />


        </>
    )
}
