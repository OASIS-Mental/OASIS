import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Header, ImagemLogo, NavHeader, NavLink } from './components/info-header';
import { Main, Introducao, ParagrafoInfo, Title, Container, TitleDepre, Depre, ParagrafoDepre,  Prevenir, ParagrafoPrev, ParagrafoPrevenir,  TitleMeditacao, ParagrafoMeditacao, ParagrafoMedi } from './components/info-main';
import { FooterTem } from './components/info-footer';

import LogoOASIS from "../../assets/imgAbout/logo.svg";


export default function Informacoes() {
    const navigate = useNavigate();

    function goBackPage() {
        navigate('/');
    }

    return (
        <>
         
                <Header>
                    <ImagemLogo src={LogoOASIS} alt="Logo" />
                    <NavHeader>
                        <NavLink onClick={goBackPage}>Home</NavLink>
                        <NavLink href="#login">Login</NavLink>
                        <NavLink href="#register">Cadastrar</NavLink>
                    </NavHeader>
                </Header>

        <Main >
                <Introducao>
                    <Title>Informações e prevenção</Title>
                    <ParagrafoInfo>Além da saúde física, cuidar da saúde mental é crucial para prevenir doenças como a depressão, que pode ter consequências graves, incluindo o suicídio. Investir na prevenção é fundamental, assim como fazemos com a saúde física. O psiquiatra Elson Asevedo destaca a importância de dedicar atenção à saúde mental da mesma forma que cuidamos de outros aspectos da saúde, como os dentes, através de visitas regulares ao médico para prevenção.</ParagrafoInfo>
                </Introducao>
               
                <Container>          
                        <TitleDepre>Depressão: como prevenir? </TitleDepre>
                        <Depre>
                            <ParagrafoDepre>Assim como a prática de exercícios fortalece o sistema cardiovascular, melhora o condicionamento físico e, consequentemente, a saúde, alguns hábitos e comportamentos são fundamentais para a saúde mental. Por exemplo, o consumo de frutas, grãos integrais, vegetais, peixes, azeite e laticínios com baixo teor de gordura contribui com a prevenção da depressão. Por outro lado, a dieta rica em caloria, mas com baixo teor nutritivo, como frituras e gorduras saturadas, tem sido associada ao aumento do risco de desenvolvimento da doença.</ParagrafoDepre>
                            <ParagrafoDepre>  Cercar-se de apoio social é crucial para prevenir a depressão, pois o suporte do cônjuge, família e amigos pode proteger contra o transtorno, ajudando a desenvolver resiliência e a lidar com o estresse. É importante     estar atento a sinais de alerta, como angústia, ansiedade, baixa autoestima e mudanças no sono ou no interesse por atividades. Reconhecer e lidar com as próprias emoções é essencial, embora às vezes seja difícil distinguir entre tristeza comum e depressão. Se os sinais persistirem, buscar ajuda profissional é fundamental. Leia mais em: <a href="https://saude.abril.com.br/mente-saudavel/conheca-cuidados-preventivos-que-podem-ajudar-no-combate-a-depressao/" target="_blank">Depressão: cuidados preventivos que podem ajudar no combate.</a></ParagrafoDepre>
                        </Depre>
                              
                        <Prevenir>Como prevenir e controlar a ansiedade </Prevenir>
                        <ParagrafoPrev>
                            <ParagrafoPrevenir>Evite pensamentos negativos: Cultive o otimismo, pois pensamentos positivos atraem coisas boas e pessoas positivas. O excesso de pensamentos negativos pode gerar sensações desagradáveis.</ParagrafoPrevenir>
                            <ParagrafoPrevenir>Pratique Yoga e meditação: Além de afastar os pensamentos negativos, o Yoga e a meditação promovem relaxamento e tranquilidade, controlando o estresse e a ansiedade.</ParagrafoPrevenir>
                            <ParagrafoPrevenir>Exercite-se ao ar livre: Atividades como remar, correr, nadar e andar de bicicleta não só proporcionam lazer, mas também conectam você com a natureza, reequilibrando seu organismo e fortalecendo-o para enfrentar desafios.</ParagrafoPrevenir>
                            <ParagrafoPrevenir>Durma bem: O exercício físico promove um cansaço natural que ajuda a ter uma noite de sono melhor, crucial para o bom desempenho diário. Modificar hábitos, como reduzir o uso do celular e diminuir a carga de trabalho, pode ajudar a reduzir momentos de aflição.</ParagrafoPrevenir>
                            <ParagrafoPrevenir>Alimentação saudável e tempo com entes queridos: Uma alimentação saudável, baseada em alimentos naturais e menos industrializados, aliada a refeições em família ou com pessoas queridas, pode promover bem-estar. Marcar programas relaxantes, como ir ao cinema, também contribui para o equilíbrio emocional.</ParagrafoPrevenir>
                            <ParagrafoPrevenir>Controlar a ansiedade é possível seguindo essas recomendações. Se tornar-se crônica, existem tratamentos disponíveis para ajudar. Compartilhe essas dicas com seus seguidores nas redes sociais para promover o bem-estar.</ParagrafoPrevenir>
                            <ParagrafoPrevenir>Leia mais em: <a href="https://blog.seculus.com.br/ansiedade-saiba-como-se-prevenir-desse-transtorno/#:~:text=Como%20prevenir%20e%20controlar%20a%20ansiedade%201%201.,saud%C3%A1vel%20e%20tempo%20com%20quem%20se%20ama%20" target="_blank">Ansiedade: saiba como se prevenir desse transtorno! </a>  Veja Também:<a href="https://www.bing.com/videos/riverview/relatedvideo?q=ansiedade+como+prevenir&&view=riverview&mmscn=mtsc&mid=1358DB2E1454A85F71141358DB2E1454A85F7114&&aps=26&FORM=VMSOVR" target="_blank"> Bing Videos</a></ParagrafoPrevenir>
                        </ParagrafoPrev>
               
                        <TitleMeditacao>Meditação para transtornos mentais</TitleMeditacao>
                        <ParagrafoMeditacao>
                            <ParagrafoMedi>A meditação desempenha um papel importante na prevenção de transtornos mentais, oferecendo uma abordagem natural para reduzir o estresse, promover o equilíbrio emocional e aumentar a resiliência. Ao praticá-la regularmente, as pessoas podem prevenir condições como ansiedade, depressão e estresse crônico, promovendo um maior bem-estar mental.</ParagrafoMedi>
                            <ParagrafoMedi>Veja também:<a href="https://www.youtube.com/watch?v=32UM11dSves" target="_blank"> ADS05_WAVE02_YT </a></ParagrafoMedi>
                            <ParagrafoMedi><a href="https://www.youtube.com/watch?v=rVTqBPop4LA" target="_blank"> Meditação para acalmar a mente e reconectar à sua essência - Guiada por Mariana Fernandes. </a></ParagrafoMedi>
                            <ParagrafoMedi><a href="https://www.youtube.com/watch?v=ROW9DiPsL98" target="_blank"> Meditação e Paz de Espirito - Música Relaxante e Sons da Natureza Para Dormir e Relaxar - Estudar </a></ParagrafoMedi>
                        </ParagrafoMeditacao>
                     

                </Container >             
            </Main >

            <FooterTem />
        </>
    )
}

