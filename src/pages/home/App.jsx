import React from 'react'
import { useState } from "react";

import { Header, Container, Logo, Nav, NavLink } from './components/home'
import { Title, Subtitle, Paragrafo, ContainerIcons, IconLink, IconContainer, AutoajudaIcon, TranstornoIcon, InformacoesIcon, Label } from './components/home'
import { ContainerAbout, ContentAbout, TitleAbout, About, Button } from './components/home'
import { Footer, FooterContainer, FooterTitle, FooterList, FooterItem } from './components/home'

import LogoOASIS from "../../assets/imgHome/logoo.svg"
import AutoIcons from "../../assets/imgHome/autoajuda.svg"
import TranstornoIcons from "../../assets/imgHome/transtornos.svg"
import InformacoesIcons from "../../assets/imgHome/prevencao.svg"
import Cerebro from "../../assets/imgHome/sobre.svg"


export default function App() {

  return (
    <>
      <Header>
        <Container>
          <Logo src={LogoOASIS} alt="Lixeira" />
          <Nav>
            <NavLink href="#login">Login</NavLink>
            <NavLink href="#register">Cadastrar</NavLink>
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

          <IconContainer>
            <IconLink href="#autoajuda" onClick={(e) => e.preventDefault()}>
              <AutoajudaIcon src={AutoIcons} />
            </IconLink>
            <Label>Autoajuda e desenvolvimento pessoal</Label>
          </IconContainer>

          <IconContainer>
            <IconLink href="#transtorno" onClick={(e) => e.preventDefault()}>
              <TranstornoIcon src={TranstornoIcons} />
            </IconLink>
            <Label>Transtornos e sintomas</Label>
          </IconContainer>

          <IconContainer>
            <IconLink href="#informacoes" onClick={(e) => e.preventDefault()}>
              <InformacoesIcon src={InformacoesIcons} />
            </IconLink>
            <Label>Informações e prevenção</Label>
          </IconContainer>

        </ContainerIcons>



        <ContainerAbout>

          <img src={Cerebro} />
          <ContentAbout>
            <TitleAbout>Sobre nós</TitleAbout>
            <About>OÁSIS Mental: é um espaço dedicado à saúde mental, oferecendo informações, recursos e apoio para promover o bem-estar emocional. Explore conteúdos sobre  desenvolvimento pessoal, transtornos mentais e estratégias de prevenção. Encontre orientações para cultivar uma mente saudável e equilibrada em sua jornada de autocuidado.</About>
            <Button>Ler Mais</Button>
          </ContentAbout>

        </ContainerAbout>



        <Footer>
          <FooterContainer>
            <FooterTitle>Nossos serviços</FooterTitle>

            <FooterList>
              <FooterItem>Canais de ajuda e profissionais</FooterItem>
            </FooterList>

            <FooterList>
              <FooterItem>Artigos</FooterItem>
            </FooterList>

            <FooterList>
              <FooterItem>Grupos de apoio</FooterItem>
            </FooterList>

          </FooterContainer>
        </Footer>
      </main>
    </>
  )
}

