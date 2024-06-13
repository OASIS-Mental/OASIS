import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IntroducaoCanais = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1700px) {
        font-size: 2.9vw;
    }

    @media screen and (max-width: 1300px) {
        font-size: 38px;
    }

    @media screen and (max-width: 1200px) {
        font-size: 34px;
    }

    @media screen and (max-width: 768px) {
        font-size: 28px;
    }
`;

export const TitleCanais = styled.h1`
    width: 1200px;
    font-family: 'Lemon';
    font-style: normal;
    font-size: 45px;
    line-height: 59px;
    text-align: center;
    color: #65BBAD;
    margin-bottom: 100px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 1700px) {
        width: 800px;
        font-size: 30px;
    }

    @media screen and (max-width: 1300px) {
        width: 800px;
        font-size: 35px;
    }

    @media screen and (max-width: 1200px) {
        width: 700px;
        font-size: 32px;
    }

    @media screen and (max-width: 768px) {
        width: 90vw;
        font-size: 28px;
    }

    @media screen and (max-width: 540px) {
        width: 300px;
        font-size: 24px;
        line-height: 36px;
    }
`;

export const ContainerCanais = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;

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
        gap: 45px;
    }
`;

export const Canais = styled.div`
    width: 80vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const TitleG1 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    img {
        margin-left: 80px;
        margin-right: 0.5rem;
        width: 60px;
    }

    h2 {
        width: 465px;
        height: 43px;
        font-family: 'Ledger';
        font-style: normal;
        font-size: 22px;
        line-height: 30px;
        color: #000000;
        border-bottom: 7px solid;
        border-image: linear-gradient(90deg, #156B5D 0%, rgba(41, 209, 183, 0.6) 100%);
        border-image-slice: 1;
        margin-bottom: 25px;
        padding-left: 8px;

        @media screen and (max-width: 1700px) {
            width: 400px;
            font-size: 18px;
        }

        @media screen and (max-width: 1300px) {
            width: 350px;
        }

        @media screen and (max-width: 1200px) {
            width: 300px;
        }

        @media screen and (max-width: 768px) {
            width: 380%;
            font-size: 20px;
        }

        @media screen and (max-width: 540px) {
            width: 300px;
            font-size: 15px;
        }
    }
`;

export const DivG1 = styled.div`
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
`;

export const ContainerG1 = styled.div`
    margin-left: 50px;
    width: 850px;

    @media screen and (max-width: 1700px) {
        width: 650px;
    }

    @media screen and (max-width: 1300px) {
        width: 600px;
    }

    @media screen and (max-width: 1200px) {
        width: 500px;
        margin-left: 0;
    }

    @media screen and (max-width: 768px) {
        width: 380px;
        margin-left: 0;
    }

    @media screen and (max-width: 540px) {
        width: 300px;
        font-size: 24px;
       margin: auto;
    }
`;

export const ListaCanais = styled.p`
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 47px;
    color: #000000;
    width: 780px;

    @media screen and (max-width: 1700px) {
        font-size: 16px;
        width: 680px;
    }
    @media screen and (max-width: 1300px) {
        font-size: 15px;
        width: 520px;
    }
    @media screen and (max-width: 1200px) {
        font-size: 15px;
        width: 520px;
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;
        width: 580px;

    }

    @media screen and (max-width: 540px) {
        width: 300px;
        font-size: 14px;
        line-height: 28px;
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

export const ImagemEstresse = styled.img`
    width: 17vw;
    height: auto; 
    margin: auto;

    @media screen and (max-width: 1700px) {
        width: 16vw;
        
    }

    @media screen and (max-width: 1300px) {
        width: 15vw;

    }

    @media screen and (max-width: 1200px) {
        width: 15vw;
        margin: auto;
    }

    @media screen and (max-width: 768px) {
        width: 40vw;
        margin: auto;
    }
`;
