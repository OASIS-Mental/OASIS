import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const ContainerPartePrinci = styled.div` 
    margin: 100px 0 90px 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;

`;


export const TitleDesenvolvimento = styled.h2`
    width: 900px;
    height: 117px;
    font-family: 'Lemon';
    font-style: normal;
    font-size: 44px;
    line-height: 63px;
    text-align: center;
    color: #65BBAD;
    margin-bottom: 100px;

    @media screen and (max-width: 1700px) {
        font-size: 2.5vw;
    }

    @media screen and (max-width: 1300px) {
        font-size: 5.5vw;
        line-height: 7.5vw;
    }

    @media screen and (max-width: 1200px) {
        font-size: 6vw;
        line-height: 8vw;
    }

    @media screen and (max-width: 768px) {
        font-size: 8vw;
        line-height: 10vw;
    }
`;


export const ParagrafoDesenvolvimento = styled.p`
    width: 1300px;
    height: 138px;
    font-family: 'Ledger';
    font-style: normal;
    font-size: 24px;
    line-height: 46px;
    text-align: justify;
    color: #000000;

    @media screen and (max-width: 1700px) {
        width: 1150px;
        font-size: 1.4vw;
    }
`;


export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin-bottom: 200px;

    @media screen and (max-width: 1700px) {
        width: 1300px;
        font-size: 1.4vw;
    }

`;


export const ContainerFinal = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin-right: 50px;

`;


export const Pessoal = styled.div`
  margin-bottom: 30px;

`;


export const TitlePessoal = styled.h3`
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

 
`;


export const ParagrafoPessoal = styled.p`
   font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 28px;
    text-align: justify;
    color: #000000;
    max-width: 100%;
    margin-bottom: 40px;

    @media screen and (max-width: 1700px) {
        font-size: 1.2vw;
    }
`;


export const Tropicos = styled.ul`
    margin-top: 20px;
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom:40px;
`;

export const TitleTropicos = styled.li`
  font-family: 'Ledger';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    text-align: justify;
    color: #000000;
    margin-left: 30px;

    @media screen and (max-width: 1700px) {
        font-size: 1.2vw;
    }

`;

export const ParagrafoFinal = styled.p`
 font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 28px;
    text-align: justify;
    color: #000000;
    margin-top: 20px;

    @media screen and (max-width: 1700px) {
        font-size: 1.3vw;
    }
  
`
