import styled from "styled-components";
import BackgroundFooter from "../../../assets/imgHome/rodape.svg";


export const ImagemDireita = styled.img`
    margin-top: 50px;
    width: 100%;

    @media screen and (max-width: 1700px) {
        height: 133vh;
      
    }
`;

export const FooterTemplate = styled.footer`
    background: url("${BackgroundFooter}") no-repeat center center/cover;
    height:  34vh;
    width: 100%;
    box-shadow: 0px 0px 24px 17px rgba(0, 0, 0, 0.25);
    border-radius: 27px 27px 0px 0px;

`;