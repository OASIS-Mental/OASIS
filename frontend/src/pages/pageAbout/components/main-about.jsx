import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    margin-bottom: 120px;

    @media screen and (max-width: 1700px) {
        margin-top: 120px;
        margin-bottom: 100px;
    }

    @media screen and (max-width: 1300px) {
        margin-top: 100px;
        margin-bottom: 80px;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        margin-top: 50px;
        margin-bottom: 40px;
    }
`;

export const ImagemPeople = styled.img`
    height: 80vh;

    @media screen and (max-width: 1700px) {
        height: 70vh;
    }

    @media screen and (max-width: 1300px) {
        height: 60vh;
    }

    @media screen and (max-width: 1200px) {
        height: 50vh;
    }

    @media screen and (max-width: 768px) {
        height: 40vh;
    }
`;

export const DivContiner = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 80px;

    @media screen and (max-width: 1700px) {
        margin-left: 60px;
    }

    @media screen and (max-width: 1300px) {
        margin-left: 0;
        align-items: center;
        margin-top: 20px;
    }
`;

export const DivTitler = styled.h1`
    display: flex;
    width: 800px;
    font-family: 'Lemon';
    font-style: normal;
    font-size: 38px;
    line-height: 61px;
    text-align: center;
    color: #65BBAD;
    margin-bottom: 60px;

    @media screen and (max-width: 1700px) {
        width: 700px;
        font-size: 34px;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 1300px) {
        width: 600px;
        font-size: 32px;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 1200px) {
        width: 500px;
        font-size: 28px;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        font-size: 24px;
        margin-bottom: 20px;
    }
`;

export const DivText = styled.div`
    display: flex;
    align-items: center;
    width: 800px;
    height: 600px;
    background: linear-gradient(90deg, rgba(46, 85, 79, 0.16) 0%, rgba(46, 85, 79, 0.16) 100%);
    box-shadow: 17px 17px 24px rgba(0, 0, 0, 0.25);
    border-radius: 38px;
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 49px;
    text-align: center;
    padding: 58px;
    color: #000000;

    @media screen and (max-width: 1700px) {
        width: 700px;
        height: auto;
        font-size: 16px;
        line-height: 40px;
        padding: 50px;
    }

    @media screen and (max-width: 1300px) {
        width: 600px;
        height: auto;
        font-size: 20px;
        line-height: 40px;
        padding: 40px;
    }

    @media screen and (max-width: 1200px) {
        width: 500px;
        font-size: 18px;
        line-height: 35px;
        padding: 30px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        font-size: 16px;
        line-height: 30px;
        padding: 20px;
    }
`;
