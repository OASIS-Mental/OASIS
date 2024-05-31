import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Header, Container, Logo, Nav, NavLink } from './components/home';
import { Title, Subtitle, Paragrafo, ContainerIcons, IconLink, IconContainer, AutoajudaIcon, TranstornoIcon, InformacoesIcon, Label } from './components/main/main';
import { ContainerAbout, ImageCerebro, ContentAbout, TitleAbout, About, Button } from './components/main/about';
import { Footer, FooterContainer, FooterTitle, FooterList, FooterItem, Imagens } from './components/footer';

import UserAvatar from "../../components/UserAvatar";
import LogoOASIS from "../../assets/imgHome/logoo.svg";
import AutoIcons from "../../assets/imgHome/autoajuda.svg";
import TranstornoIcons from "../../assets/imgHome/transtornos.svg";
import InformacoesIcons from "../../assets/imgHome/prevencao.svg";
import Cerebro from "../../assets/imgHome/sobre.svg";
import Ajuda from "../../assets/imgHome/canaisDeAjuda.svg";
import Artigo from "../../assets/imgHome/artigo.svg";
import Apoio from "../../assets/imgHome/grupoDeApoio.svg";
import WhatsApp from "../../assets/imgHome/whatsApp.svg";


export default function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erroressage, setErrorMessage] = useState('');
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [name, setName] = useState(''); // Estado para armazenar o nome do usuário

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
    setErrorMessage('');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    setName('');
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

 

  return (
    <>
      <Header>

        <Container>
          <Logo src={LogoOASIS} alt="Lixeira" />
          <Nav>
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
          <IconContainer onClick={() => redirectUser("/autoajuda")}>
            <IconLink>
              <AutoajudaIcon src={AutoIcons} />
            </IconLink>
            <Label>Autoajuda e desenvolvimento pessoal</Label>
          </IconContainer>

          <IconContainer onClick={() => redirectUser("/transtornosSintomas")}>
            <TranstornoIcon src={TranstornoIcons} />
            <IconLink />
            <Label>Transtornos e sintomas</Label>
          </IconContainer>

          <IconContainer onClick={() => redirectUser("/info")}>
            <InformacoesIcon src={InformacoesIcons} />
            <IconLink />
            <Label>Informações e prevenção</Label>
          </IconContainer>
        </ContainerIcons>

        <ContainerAbout>
          <ImageCerebro src={Cerebro} />
          <ContentAbout>
            <TitleAbout>Sobre nós</TitleAbout>
            <About>OÁSIS Mental: é um espaço dedicado à saúde mental, oferecendo informações, recursos e apoio para promover o bem-estar emocional. Explore conteúdos sobre desenvolvimento pessoal, transtornos mentais e estratégias de prevenção. Encontre orientações para cultivar uma mente saudável e equilibrada em sua jornada de autocuidado.</About>
            <Button onClick={() => redirectUser("/lermais")}>Ler Mais</Button>
          </ContentAbout>
        </ContainerAbout>

        <Footer>
          <FooterTitle>Nossos serviços</FooterTitle>
          <FooterContainer>
            <FooterList onClick={() => redirectUser("/canaisAjuda")}>
              <Imagens src={Ajuda} alt="" />
              <FooterItem>Canais de ajuda e profissionais</FooterItem>
            </FooterList>

            <FooterList onClick={() => redirectUser("/artigosDeDados")}>
              <Imagens src={Artigo} alt="" />
              <FooterItem>Artigos</FooterItem>
            </FooterList>

            <FooterList onClick={() => redirectUser("/gruposApoio")}>
              <Imagens src={Apoio} alt="" />
              <FooterItem>Grupos de apoio <img src={WhatsApp} alt="" /></FooterItem>
            </FooterList>
          </FooterContainer>
        </Footer>



      </main>
    </>
  );
}
