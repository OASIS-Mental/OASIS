import styled from 'styled-components';

export const Main = styled.main`
   display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IntroducaoArtigos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  margin-top: 100px;
  margin-bottom: 150px;

`;

export const TitleArtigos = styled.h1`
    width: 600px;
    font-family: 'Lemon';
    font-style: normal;
    font-size: 45px;
    line-height: 59px;
    text-align: center;
    color: #65BBAD;
    margin-bottom: 100px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const ParagrafoDesenvolvimento = styled.p`
    width: 1000px;
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 56px;
    text-align: justify;
    color: #000000;
`;

export const ContainerArtigos = styled.div`
     display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const Artigos = styled.div`
   width: 80vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const DivArtigos = styled.div`
  display: flex;
    gap: 80px;
    align-items: center; 
    margin: auto;
`;

export const Container = styled.div`
   margin-left: 50px;
    width: 850px;
`;


export const ListaDeArtigos = styled.p`
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 47px;
    color: #000000;
    width: 780px;
    a {
        color: #65BBAD;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #1ca4b9;
        }
    }
`;

export const Imagens = styled.img`
    width: 15vw;
    height: auto; 
    margin: auto;
`;
