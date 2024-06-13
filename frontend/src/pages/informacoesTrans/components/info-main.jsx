import styled from "styled-components";
import Fundo from "../../../assets/imgInfo/imageFundo.svg";

export const Main = styled.div`
    background: url("${Fundo}") no-repeat center center;
    background-size: cover;
`;

export const Introducao = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1700px) {
        margin-top: 80px;
    }

    @media screen and (max-width: 1300px) {
        margin-top: 60px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 40px;
    }
`;

export const Title = styled.h1`
    font-family: 'Lemon';
    font-style: normal;
    font-size: 45px;
    line-height: 59px;
    text-align: center;
    color: #65BBAD;
    margin-bottom: 100px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 1700px) {
        font-size: 40px;
        margin-bottom: 80px;
    }

    @media screen and (max-width: 1300px) {
        font-size: 35px;
        margin-bottom: 60px;
    }

    @media screen and (max-width: 768px) {
        font-size: 30px;
        margin-bottom: 40px;
    }
`;

export const ParagrafoInfo = styled.p`
    width: 1284px;
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 49px;
    text-align: center;
    margin-bottom: 90px;
    color: #000000;

    @media screen and (max-width: 1700px) {
        width: 1100px;
        font-size:16px;
        margin-bottom: 70px;
    }

    @media screen and (max-width: 1300px) {
        width: 900px;
        font-size: 18px;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 768px) {
        width: 90vw;
        font-size: 16px;
        margin-bottom: 30px;
    }
`;

export const Container = styled.div`
    margin: auto;
    width: 1595px;

    @media screen and (max-width: 1700px) {
        width: 1200px;
    }

    @media screen and (max-width: 1300px) {
        width: 1200px;
    }

    @media screen and (max-width: 768px) {
        width: 90vw;
    }
`;

export const TitleDepre = styled.h3`
    width: 560px;
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

    @media screen and (max-width: 1700px) {
        width: 500px;
        font-size: 20px;
    }

    @media screen and (max-width: 1300px) {
        width: 450px;
        font-size: 18px;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
        font-size: 16px;
    }
`;

export const Depre = styled.ul`
    margin-top: 20px;
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 60px;

    @media screen and (max-width: 1700px) {
        padding-left: 15px;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 1300px) {
        padding-left: 10px;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 768px) {
        padding-left: 5px;
        margin-bottom: 30px;
    }
`;

export const ParagrafoDepre = styled.li`
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 49px;
    text-align: justify;
    color: #000000;
    margin-left: 30px;

    a {
        color: #65BBAD;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #1ca4b9;
        }
    }

    @media screen and (max-width: 1700px) {
        font-size: 16px;
        margin-left: 20px;
    }

    @media screen and (max-width: 1300px) {
        font-size: 18px;
        margin-left: 15px;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-left: 10px;
    }
`;

export const Prevenir = styled.h3`
    width: 560px;
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

    @media screen and (max-width: 1700px) {
        width: 500px;
        font-size: 20px;
    }

    @media screen and (max-width: 1300px) {
        width: 450px;
        font-size: 18px;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
        font-size: 16px;
    }
`;

export const ParagrafoPrev = styled.ul`
    margin-top: 20px;
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 60px;

    @media screen and (max-width: 1700px) {
        padding-left: 15px;
        margin-bottom: 50px;
        
    }

    @media screen and (max-width: 1300px) {
        padding-left: 10px;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 768px) {
        padding-left: 5px;
        margin-bottom: 30px;
    }
`;

export const ParagrafoPrevenir = styled.li`
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    margin-left: 30px;
    line-height: 47px;
    color: #000000;

    a {
        color: #65BBAD;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #1ca4b9;
        }
    }

    @media screen and (max-width: 1700px) {
        font-size: 16px;
        margin-left: 20px;
    }

    @media screen and (max-width: 1300px) {
        font-size: 18px;
        margin-left: 15px;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-left: 10px;
    }
`;

export const TitleMeditacao = styled.h3`
    width: 560px;
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

    @media screen and (max-width: 1700px) {
        width: 500px;
        font-size: 20px;
    }

    @media screen and (max-width: 1300px) {
        width: 450px;
        font-size: 18px;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
        font-size: 16px;
    }
`;

export const ParagrafoMeditacao = styled.ul`
    margin-top: 20px;
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 200px;

    @media screen and (max-width: 1700px) {
        padding-left: 15px;
        margin-bottom: 150px;
    }

    @media screen and (max-width: 1300px) {
        padding-left: 10px;
        margin-bottom: 100px;
    }

    @media screen and (max-width: 768px) {
        padding-left: 5px;
        margin-bottom: 50px;
    }
`;

export const ParagrafoMedi = styled.li`
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    margin-left: 30px;
    line-height: 47px;
    color: #000000;

    a {
        color: #65BBAD;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #1ca4b9;
        }
    }

    @media screen and (max-width: 1700px) {
        font-size: 16px;
        margin-left: 20px;
    }

    @media screen and (max-width: 1300px) {
        font-size: 18px;
        margin-left: 15px;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-left: 10px;
    }
`;
