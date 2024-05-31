import styled from "styled-components";


export const Title = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-top: 40px;
    font-family: 'Lemon';
    font-style: normal;
    font-size: 47px;
    color: #65BBAD;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Subtitle = styled.span`
    display: block; 
`;

export const Paragrafo = styled.p`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
    font-family: 'Ledger';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 49px;
    text-align: center;
    color: #000000;
`;

export const ContainerIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 80px;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-bottom: 15 0px;
  
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
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`;


