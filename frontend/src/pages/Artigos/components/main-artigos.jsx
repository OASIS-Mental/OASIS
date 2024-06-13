import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IntroducaoArtigos = styled.div`
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

    @media screen and (max-width: 1700px) {
        width: 550px;
        font-size: 2vw;
        line-height: 50px;
    }

    @media screen and (max-width: 1300px) {
        width: 400px;
        font-size: 38px;
        line-height: 50px;
    }

    @media screen and (max-width: 1200px) {
        width: 400px;
        font-size: 34px;
        line-height: 45px;
    }

    @media screen and (max-width: 768px) {
        width: 300px;
        font-size: 28px;
        line-height: 40px;
    }

    @media screen and (max-width: 540px) {
        width: 300px;
        font-size: 24px;
        line-height: 36px;
    }
`;

export const ParagrafoDesenvolvimento = styled.p`
    width: 1000px;
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 56px;
    text-align: justify;
    color: #000000;

    @media screen and (max-width: 1700px) {
        width: 800px;
        font-size: 1.2vw;
        line-height: 50px;
    }

    @media screen and (max-width: 1300px) {
        width: 700px;
        font-size: 20px;
        line-height: 45px;
    }

    @media screen and (max-width: 1200px) {
        width: 600px;
        font-size: 18px;
        line-height: 40px;
    }

    @media screen and (max-width: 768px) {
        width: 500px;
        font-size: 16px;
        line-height: 35px;
    }

    @media screen and (max-width: 540px) {
        width: 300px;
        font-size: 14px;
        line-height: 28px;
    }
`;

export const ContainerArtigos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media screen and (max-width: 1700px) {
        gap: 40px;
    }

    @media screen and (max-width: 1300px) {
        gap: 30px;
    }

    @media screen and (max-width: 768px) {
        gap: 20px;
    }

    @media screen and (max-width: 540px) {
        gap: 10px;
    }
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
    flex-wrap: wrap; /* Permite que os itens se ajustem automaticamente em telas menores */
    margin: auto;

    @media screen and (max-width: 1700px) {
        gap: 60px;
    }

    @media screen and (max-width: 1300px) {
        gap: 40px;
    }

    @media screen and (max-width: 768px) {
        gap: 20px;
    }

    @media screen and (max-width: 540px) {
        gap: 10px;
    }
`;

export const Container = styled.div`
    margin-left: 50px;
    width: 850px;

    @media screen and (max-width: 1700px) {
        width: 600px;
    }

    @media screen and (max-width: 1300px) {
        width: 600px;
    }

    @media screen and (max-width: 1200px) {
        width: 500px;
        margin-left: 0;
    }

    @media screen and (max-width: 768px) {
        width: 500px;
        font-size: 16px;
        line-height: 35px;
      
    }


    @media screen and (max-width: 540px) {
        width: 90vw;
        width: 400px;
    }
`;

export const ListaDeArtigos = styled.p`
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 47px;
    color: #000000;
    width: 780px;

    @media screen and (max-width: 1700px) {
        font-size: 16px;
        width: 600px;
    }

    @media screen and (max-width: 1200px) {
        width: 500px;

    }

    @media screen and (max-width: 768px) {
        width: 500px;
        font-size: 16px;
        line-height: 35px;
      
    }

    @media screen and (max-width: 540px) {
        width: 400px;
        font-size: 16px;
        line-height: 30px;
    }

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

    @media screen and (max-width: 1700px) {
        width: 14vw;
    }

    @media screen and (max-width: 1300px) {
        width: 20vw;
    }

    @media screen and (max-width: 1299px) {
        width: 19vw;
        margin: auto;
    }

    @media screen and (max-width: 768px) {
        width: 30vw;
        margin: auto;
    }

    @media screen and (max-width: 540px) {
        width: 20vw;
        margin: auto;
    }
`;
