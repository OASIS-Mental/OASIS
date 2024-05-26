import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


import { Header, Container, Logo, Nav, NavLink } from './components/home'
import { Title, Subtitle, Paragrafo, ContainerIcons, IconLink, IconContainer, AutoajudaIcon, TranstornoIcon, InformacoesIcon, Label } from './components/main/main'
import { ContainerAbout,ImageCerebro, ContentAbout, TitleAbout, About, Button } from './components/main/about'
import { Footer, FooterContainer, FooterTitle, FooterList, FooterItem,Imagens } from './components/footer'


import LogoOASIS from "../../assets/imgHome/logoo.svg"
import AutoIcons from "../../assets/imgHome/autoajuda.svg"
import TranstornoIcons from "../../assets/imgHome/transtornos.svg"
import InformacoesIcons from "../../assets/imgHome/prevencao.svg"
import Cerebro from "../../assets/imgHome/sobre.svg"
import Ajuda from "../../assets/imgHome/canaisDeAjuda.svg"
import Artigo from "../../assets/imgHome/artigo.svg"
import Apoio from "../../assets/imgHome/grupoDeApoio.svg"
import WhatsApp from "../../assets/imgHome/whatsApp.svg"


export default function App() {

  const navigate = useNavigate();

  async function addActionLerMais() {
    navigate("/lermais")
  }
  async function addActionAutoAjuda() {
    navigate("/autoajuda")
  }
  async function addActionInfo() {
    navigate("/info")
  }
  
  async function addActionTranstornos() {
    navigate("/transtornosSintomas")
  }
  
  async function addActionAjuda() {
    navigate("/canaisAjuda")
  }
  
  async function addActionArtigos() {
    navigate("/artigosDeDados")
  }
  
  async function addActionApoio() {
    navigate("/gruposApoio")
  }
  
  async function addActionLogin() {
    navigate("/logar" )
  }
  
  async function addActionCadastrar() {
    navigate("/cadastro")
  }
  

  return (
    <>
       <Header>
        <Container>
          <Logo src={LogoOASIS} alt="Lixeira" />
          <Nav>
            <NavLink onClick={addActionLogin}>Login</NavLink>
            <NavLink onClick={addActionCadastrar}>Cadastrar</NavLink>
          </Nav>
        </Container>
      </Header>

      <main>
        <Title>
          <Subtitle>Mente Plena:</Subtitle>
          <Subtitle>Informações e Apoio</Subtitle>
        </Title>
        <Paragrafo>Explore a jornada da saúde mental: informação, apoio e desenvolvimento pessoal em um só lugar.</Paragrafo>



        <ContainerIcons>

          <IconContainer onClick={addActionAutoAjuda}>
            <IconLink>
              <AutoajudaIcon src={AutoIcons} />
            </IconLink>
            <Label>Autoajuda e desenvolvimento pessoal</Label>
          </IconContainer>

          <IconContainer onClick={addActionTranstornos}>
              <TranstornoIcon src={TranstornoIcons} />
            <IconLink  >
            </IconLink>
            <Label>Transtornos e sintomas</Label>
          </IconContainer>

          <IconContainer onClick={addActionInfo}>
            <IconLink >
              <InformacoesIcon src={InformacoesIcons} />
            </IconLink>
            <Label>Informações e prevenção</Label>
          </IconContainer>

        </ContainerIcons>



        <ContainerAbout>

          <ImageCerebro src={Cerebro} />
          <ContentAbout>
            <TitleAbout>Sobre nós</TitleAbout>
            <About>OÁSIS Mental: é um espaço dedicado à saúde mental, oferecendo informações, recursos e apoio para promover o bem-estar emocional. Explore conteúdos sobre  desenvolvimento pessoal, transtornos mentais e estratégias de prevenção. Encontre orientações para cultivar uma mente saudável e equilibrada em sua jornada de autocuidado.</About>
            <Button onClick={addActionLerMais}>Ler Mais</Button>
          </ContentAbout>

        </ContainerAbout>



        <Footer>
          <FooterTitle>Nossos serviços</FooterTitle>
          <FooterContainer>
            
            <FooterList onClick={addActionAjuda}>
              <Imagens src={Ajuda} alt="" />
              <FooterItem>Canais de ajuda e profissionais</FooterItem>
            </FooterList>

            <FooterList onClick={addActionArtigos}>
              <Imagens src={Artigo} alt="" />
              <FooterItem>Artigos</FooterItem>
            </FooterList>

            <FooterList onClick={addActionApoio}>
              <Imagens src={Apoio} alt="" />
              <FooterItem>Grupos de apoio <img src={WhatsApp} /></FooterItem>
            </FooterList>

          </FooterContainer>
        </Footer>
      </main>
    </>
  )
}
