import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Introducao = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;

export const Title = styled.h1`
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
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const Estresse = styled.div`
    width: 80vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const TitleEstresse = styled.h3`
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
    margin-bottom: 30px;
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
        width: 90%;
        font-size: 20px;
    }
`;

export const DivEstresse = styled.div`
    display: flex;
    gap: 80px;
    align-items: center; 

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: flex-start;    
    }

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

export const ContainerEstresse = styled.ul`
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
`;

export const ListaEstresse = styled.li`
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 47px;
    color: #000000;

    @media screen and (max-width: 1700px) {
        font-size: 18px;
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
        width: 25vw;
    }

    @media screen and (max-width: 1200px) {
        width: 30vw;
        margin: auto;
    }

    @media screen and (max-width: 768px) {
        width: 40vw;
        margin: auto;
    }
`;
