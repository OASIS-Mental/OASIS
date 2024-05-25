import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Header, ImagemLogo, NavHeader, NavLink } from './components/header-auto-ajuda';
import { Main, ContainerPartePrinci, TitleDesenvolvimento, ParagrafoDesenvolvimento, Container, ContainerFinal, Pessoal, Tropicos, TitleTropicos, TitlePessoal, ParagrafoFinal, ParagrafoPessoal } from './components/main-auto-ajuda';
import { ImagemDireita, FooterTemplate } from './components/footer-auto-ajuda';

import LogoOASIS from "../../assets/imgAbout/logo.svg";
import ImagemD from "../../assets/imgAutoajuda/imgDireita.svg";


export default function AutoAjuda() {
    const navigate = useNavigate();

    async function goBackPage() {
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

                <ContainerPartePrinci>
                    <TitleDesenvolvimento>Desenvolvimento Pessoal e Autoajuda: Transformando Desafios em Oportunidades de Crescimento</TitleDesenvolvimento>
                    <ParagrafoDesenvolvimento>No mundo moderno, enfrentamos desafios pessoais e profissionais complexos. Porém, cada desafio traz consigo uma oportunidade de crescimento. Neste artigo, discutiremos estratégias de autoajuda e desenvolvimento pessoal para encarar esses desafios com confiança e resiliência.</ParagrafoDesenvolvimento>
                </ContainerPartePrinci>

                <Container>
                    <ContainerFinal>
                        <Pessoal>
                            <TitlePessoal>1. Entendendo o Desenvolvimento Pessoal:</TitlePessoal>
                            <ParagrafoPessoal>O desenvolvimento pessoal é um processo contínuo de autodescoberta, aprendizado e crescimento que nos permite alcançar nosso potencial máximo e levar uma vida mais plena e significativa. Envolve o aprimoramento de habilidades, a expansão de conhecimentos, o fortalecimento de relacionamentos e o cultivo de uma mentalidade positiva.</ParagrafoPessoal>
                        </Pessoal>

                        <Pessoal>
                            <TitlePessoal>2. Definindo Metas e Criando um Plano de Ação:</TitlePessoal>
                            <ParagrafoPessoal>Um dos primeiros passos para o desenvolvimento pessoal é definir metas claras e alcançáveis ​​para o que você deseja realizar. Isso pode incluir metas relacionadas à carreira, educação, saúde, relacionamentos ou desenvolvimento pessoal. Uma vez definidas as metas, é importante criar um plano de ação detalhado que inclua etapas específicas que você pode tomar para alcançar esses objetivos.</ParagrafoPessoal>
                        </Pessoal>

                        <Pessoal>
                            <TitlePessoal>3. Cultivando Hábitos Positivos:</TitlePessoal>
                            <ParagrafoPessoal>Os hábitos têm um poder tremendo em nossa vida. Cultivar hábitos positivos, como exercitar-se regularmente, praticar a gratidão, manter um diário de reflexão ou meditar, pode ter um impacto significativo em nossa saúde mental e bem-estar emocional. Ao incorporar esses hábitos em nossa rotina diária, podemos fortalecer nossa resiliência e capacidade de lidar com o estresse e os desafios da vida.</ParagrafoPessoal>
                        </Pessoal>

                        <Pessoal>
                            <TitlePessoal>4. A Importância da Resiliência:</TitlePessoal>
                            <ParagrafoPessoal>Os hábitos têm um poder tremendo em nossa vida. Cultivar hábitos positivos, como exercitar-se regularmente, praticar a gratidão, manter um diário de reflexão ou meditar, pode ter um impacto significativo em nossa saúde mental e bem-estar emocional. Ao incorporar esses hábitos em nossa rotina diária, podemos fortalecer nossa resiliência e capacidade de lidar com o estresse e os desafios da vida.</ParagrafoPessoal>
                        </Pessoal>

                        <Pessoal>
                            <TitlePessoal>5. Recursos de Autoajuda e Desenvolvimento Pessoal:</TitlePessoal>
                            <ParagrafoPessoal>Existem inúmeros recursos disponíveis para ajudá-lo em sua jornada de autoajuda e desenvolvimento pessoal. Isso inclui livros inspiradores, cursos online, podcasts motivacionais, vídeos educativos e aplicativos de mindfulness. Aqui estão alguns exemplos de vídeos inspiradores que você pode encontrar online:</ParagrafoPessoal>

                            <Tropicos>
                                <TitleTropicos> "O Poder do Agora" - Palestra de Eckhart Tolle sobre viver no momento presente e encontrar paz interior.</TitleTropicos>
                                <TitleTropicos> "A Magia da Gratidão" - Vídeo animado que explora os benefícios da prática da gratidão diária em nossa vida.</TitleTropicos>
                                <TitleTropicos> "Encontrando sua Paixão" - Ted Talk de Elizabeth Gilbert sobre descobrir e seguir sua paixão na vida.</TitleTropicos>
                            </Tropicos>

                            <ParagrafoFinal>Desenvolvimento pessoal é uma jornada única e individual, onde cultivar hábitos positivos, estabelecer metas claras, desenvolver resiliência e buscar apoio podem transformar desafios em oportunidades de crescimento, levando a uma vida mais significativa e satisfatória.</ParagrafoFinal>
                        </Pessoal>
                    </ContainerFinal>

                    <ImagemDireita src={ImagemD} />
                </Container>

                <FooterTemplate />

            </Main>
        </>
    )
}