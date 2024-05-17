import styled from "styled-components";
import BackgroundFooter from "../../../assets/imgHome/rodape.svg";

export const Footer = styled.footer`
    background: url("${BackgroundFooter}") no-repeat center center/cover;
    height:  60vh;
    box-shadow: 0px 0px 24px 17px rgba(0, 0, 0, 0.25);
    border-radius: 27px 27px 0px 0px;
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
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:50px;

`;



export const FooterList = styled.label`
    display: flex;
    flex-direction: column;
    height: 460px;
    box-shadow: 0px 17px 20px rgba(0, 0, 0, 0.25);
    border-radius: 27px 27px 36px 36px;
    background-color: #2E554F;
    cursor: pointer;
    transition: transform 0.3s ease;

&:hover {
  transform: translateY(-10px);
}
`;


export const Imagens = styled.img`
   height: 40vh;
`;


export const FooterItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lemon';
    font-style: normal;
    width: 244px;
    height: 59px;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: auto;
    cursor: pointer;
`

export const FooterListApoio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lemon';
    font-style: normal;
    width: 234px;
    margin-left: 90px;
    margin-top: 15px;
    gap: 10px;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
   

    img {
        
        height: 30px;
    }
`





