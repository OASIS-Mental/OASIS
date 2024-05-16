import styled from "styled-components";
import Background from "../../../assets/imgHome/template.svg";

//Header
export const Header = styled.header`
   background: url("${Background}") no-repeat center center/cover;
   height: 68vh;
`

export const Container = styled.div`
    display: flex;
    height: 120px;
`
export const Logo = styled.img`
    display: flex;
    width: 170px;
    margin-left: 44px;
`
export const Nav = styled.nav`
    display: flex;
    margin-left: auto; 
    margin-right: 20px;
    align-items: center;
    gap:20px;
    
`
export const NavLink = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 201px;
    height: 44px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Irish Grover';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #156B5D;
    transition: all 0.3s ease; 


    &:hover {
        transform: translateY(-3px); 
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    }


    &:hover:active {
        transform: translateY(0);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

`

//Main
export const Title = styled.h1`
    display: flex;
    flex-direction: column; /* Define a direção da flexbox como coluna */
    align-items: center; /* Centraliza os elementos na vertical */
    margin-top: 40px;
    font-family: 'Lemon';
    font-style: normal;
    font-size: 47px;
    color: #65BBAD;
`;

export const Subtitle = styled.span`
    display: block; /* Faz o span ocupar uma linha inteira */
`;

export const Paragrafo = styled.p`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
    font-family: 'Ledger';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 49px;
    text-align: center;
    color: #000000;
`;

export const ContainerIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-bottom: 200px;
  
`;

export const IconLink = styled.a`
  text-decoration: none; 
  color: inherit; 
  cursor: pointer; 

`;

export const AutoajudaIcon = styled.img`
    width: 120px;
    height: 120px;
    transition: transform 0.3s ease; 

        &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.599));
        }
`;

export const TranstornoIcon = styled.img`
    width: 120px;
    height: 120px;
    transition: transform 0.3s ease; 

        &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.599));
        }
`;

export const InformacoesIcon = styled.img`
    width: 120px;
    height: 120px;
    transition: transform 0.3s ease; 

        &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.599));
        }
`;

export const Label = styled.span`
    width: 200px;
    height: 50px;
    margin-top: 10px;
    text-align: center;
    font-family: 'Lemon';
    font-style: normal;
    font-weight: 200;
    font-size: 23px;
    line-height: 30px;
    color: #65BBAD;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;


//About
export const ContainerAbout = styled.div`

    display: flex;
    align-items: center;
    max-width: 1606px; 
    margin: 0 auto; 
    gap: 20px;
`;

export const ImagemAbout = styled.img`

`;

export const ContentAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
   margin-left: 30px;
`;



export const TitleAbout = styled.h2`
    font-family: 'Lemon';
    font-style: normal;
 
    font-size: 40px;
    line-height: 48px;
    color: #65BBAD;
`;



export const About = styled.p`
    font-family: 'Ledger';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 46px;
    color: #000000;
    margin-bottom: 10px;
`;



export const Button = styled.button`
    width: 231px;
    height: 58px;
    background-color: #65BBAD; 
    color: #fff; 
    border: none;
    cursor: pointer;
    font-family: 'Lemon';
    font-style: normal;
    font-weight: 400;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 25px;
    line-height: 33px;
    text-align: center;
    margin: 0 auto;
       background: linear-gradient(90deg, #65BBAD 0%, #156B5D 100%);
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-3px); 
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    }

    &:hover:active {
        transform: translateY(0);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;




