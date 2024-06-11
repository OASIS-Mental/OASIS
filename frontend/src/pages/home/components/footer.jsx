import styled from "styled-components";
import BackgroundFooter from "../../../assets/imgHome/rodape.svg";

export const Footer = styled.footer`
    background: url("${BackgroundFooter}") no-repeat center center/cover;
    height: 60vh;
    box-shadow: 0px 0px 24px 17px rgba(0, 0, 0, 0.25);
    border-radius: 27px 27px 0px 0px;

    @media screen and (max-width: 1700px) {
        height: 54vh;
    }

    @media screen and (max-width: 1300px) {
        height: 48vh;

    }

    @media screen and (max-width: 1200px) {
        height: 100%;
    }

    @media screen and (max-width: 768px) {
        height: 100%;
      }

    @media screen and (max-width: 480px) {
        height: 30vh;
    }
`;

export const FooterTitle = styled.h1`
    display: flex;
    margin-bottom: 45px;
    justify-content: center;
    align-items: center;
    font-family: 'Lemon';
    font-style: normal;
    font-size: 48px;
    line-height: 63px;
    text-align: center;
    color: #0c0808;
    padding: 15px 0 0 0;
    text-shadow: 0 0 5px #1c8676, 0 0 10px #1c8676, 0 0 20px #1c8676, 0 0 40px #4CAF50;

    @media screen and (max-width: 1700px) {
        font-size: 5vh;
    }

    @media screen and (max-width: 1300px) {
        font-size: 5vh;
    }

    @media screen and (max-width: 1200px) {
        font-size: 5vh;
    }

    @media screen and (max-width: 768px) {
        font-size: 4vh;
        height: 3px;
    }

    @media screen and (max-width: 480px) {
        font-size: 3.6vh;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;

    @media screen and (max-width: 1700px) {
        height: 30vh;
        gap: 130px;
    }

    @media screen and (max-width: 1300px) {
        height: 28vh;
    }

    @media screen and (max-width: 1200px) {
        height: 47vh;
        gap: 50px;
    }

    @media screen and (max-width: 768px) {
        height: auto;
        margin-bottom: 20px;
        flex-direction: column;
    }


`;

export const FooterList = styled.div`
    display: flex;
    flex-direction: column;
    height: 440px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 27px 27px 36px 36px;
    background-color: #2E554F;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-3px); 
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    }

    &:hover:active {
        transform: translateY(0);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width: 1700px) {
        height: 38vh;
        width: 14vw;
    }

    @media screen and (max-width: 1300px) {
        height: 45vh;
    }

    @media screen and (max-width: 1200px) {
        height: 40vh;
        width: 24vw;
    }

    @media screen and (max-width: 768px) {
        height: auto;
        width: 40vw;
        margin-bottom: 20px;
    }


`;

export const Imagens = styled.img`
    height: 33vh;

    @media screen and (max-width: 1700px) {
        height: auto;
        width: 14vw;
    }

    @media screen and (max-width: 1300px) {
        height: 32vh;
    }

    @media screen and (max-width: 1200px) {
        height: auto;
        width: 24vw;
    }

    @media screen and (max-width: 768px) {
        height: auto;
        width: 40vw;
        margin-bottom: 20px;
    }

`;

export const FooterItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lemon';
    font-style: normal;
    width: 100%;
    height: 59px;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: auto;
    cursor: pointer;

    img {
        display: flex;
        margin-left: 5px;
        height: 30px;
    }



    @media screen and (max-width: 1700px) {
        height: 38vh;
        width: 14vw;
    }

    @media screen and (max-width: 1300px) {
        height: 45vh;
    }

    @media screen and (max-width: 1200px) {
        font-size: 2vh;
        height: auto;
        margin: auto;
    }

    @media screen and (max-width: 768px) {
        font-size: 2vh;
        height: auto;
        margin-bottom: 20px;
    }


`;
