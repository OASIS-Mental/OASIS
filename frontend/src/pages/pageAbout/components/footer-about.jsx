import styled from "styled-components";

export const Footer = styled.div`
    display: flex;
    flex-direction: column;   
`;

export const FooterTitleContainer = styled.div`
    margin-left: 127px;
    width: 500px;
    height: 13px;
    margin-bottom: 150px;
    background: linear-gradient(90deg, #156B5D 0%, rgba(41, 209, 183, 0.6) 100%);

    @media screen and (max-width: 1700px) {
        height: 10px;
    }

    @media screen and (max-width: 1300px) {
        margin-left: 80px;
        height: 8px;
    }

    @media screen and (max-width: 1200px) {
        margin-left: 60px;
        height: 8px;
    }

    @media screen and (max-width: 768px) {
        margin-left: 40px;
        height: 8px;
        width: 400px;
    }
 `;

export const FooterTitle = styled.h1`
    height: 92px;
    font-family: 'Ledger';
    font-style: normal;
    width: 400px;
    font-weight: 400;
    font-size: 30px;
    line-height: 46px;
    padding-top: 50px;
    color: #156B5D;


    @media screen and (max-width: 1700px) {
        width: 380px;
        font-size: 25px;
        line-height: 44px;
    }

    @media screen and (max-width: 1300px) {
        width: 360px;
        font-size: 22px;
        line-height: 42px;
    }

    @media screen and (max-width: 1200px) {
        width: 340px;
        font-size: 22px;
        line-height: 40px;
    }

    @media screen and (max-width: 768px) {
        width: 300px;
        font-size: 22px;
        line-height: 38px;
    }
 
`;

export const FooterCarrocel = styled.div`
    display: flex;
    padding: 100px;
    overflow-x: hidden;  

    @media screen and (max-width: 1700px) {
        padding: 80px;
    }

    @media screen and (max-width: 1300px) {
        padding: 60px;
    }

    @media screen and (max-width: 1200px) {
        padding: 40px;
    }

    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`;

export const FooterCardContainer = styled.div`
    scroll-snap-align: start;

    @media screen and (max-width: 1700px) {
        scroll-snap-align: center;
    }

    @media screen and (max-width: 1300px) {
        scroll-snap-align: center;
    }

    @media screen and (max-width: 1200px) {
        scroll-snap-align: center;
    }

    @media screen and (max-width: 768px) {
        scroll-snap-align: center;
    }
`;


export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 500px;
    background: linear-gradient(180deg, #156B5D -4.28%, #5BB1A4 95.72%);
    box-shadow: 0px 17px 24px rgba(0, 0, 0, 0.25);
    border-radius: 27px;
    margin-right: 50px;
    cursor: pointer;

    @media screen and (max-width: 1700px) {
        width: 320px;
        height: 400px;
        margin-right: 40px;
    }

    @media screen and (max-width: 1300px) {
        width: 300px;
        height: 400px;
        margin-right: 30px;
    }

    @media screen and (max-width: 1200px) {
        width: 280px;
        height: 340px;
        margin-right: 20px;
    }

    @media screen and (max-width: 768px) {
        width: 260px;
        height: 300px;
        margin-right: 10px;
    }
`;


export const ImagemCitar = styled.img`
    display: flex;
    height: 42px;
    width: 42px;
    margin: 50px  0 0 -260px;

    @media screen and (max-width: 1700px) {
        margin: 40px 0 0 -240px;
    }

    @media screen and (max-width: 1300px) {
        margin: 30px 0 0 -220px;
    }

    @media screen and (max-width: 1200px) {
        margin: 20px 0 0 -200px;
    }

    @media screen and (max-width: 768px) {
        margin: 10px 0 0 -180px;
    }
`;

export const FooterDivText = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 326px;
    font-family: 'Ledger';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    padding: 30px;
    line-height: 56px;
    text-align: center;
    color: #FFFFFF;

    @media screen and (max-width: 1700px) {
        width: 320px;
        height: 240px;
        font-size: 18px;
        line-height: 50px;
        padding: 25px;
    }

    @media screen and (max-width: 1300px) {
        width: 300px;
        font-size: 16px;
        line-height: 45px;
        padding: 20px;
    }

    @media screen and (max-width: 1200px) {
        width: 280px;
        font-size: 16px;
        line-height: 40px;
        padding: 15px;
    }

    @media screen and (max-width: 768px) {
        width: 260px;
        font-size: 16px;
        line-height: 35px;
        padding: 10px;
    }
`;


export const FooterDivPersona = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    width: 300px;
    gap: 20px;

    @media screen and (max-width: 1700px) {
        width: 280px;
    }

    @media screen and (max-width: 1300px) {
        width: 260px;
    }

    @media screen and (max-width: 1200px) {
        width: 240px;
    }

    @media screen and (max-width: 768px) {
        width: 220px;
    }
`;

export const ImagemUsers = styled.img`
    height: 60px;

    @media screen and (max-width: 1700px) {
        height: 55px;
    }

    @media screen and (max-width: 1300px) {
        height: 50px;
    }

    @media screen and (max-width: 1200px) {
        height: 45px;
    }

    @media screen and (max-width: 768px) {
        height: 40px;
    }
 `;











