import styled from "styled-components";

export const Title = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-top: 5vh; // Ajuste conforme necessário
    font-family: 'Lemon';
    font-style: normal;
    font-size: 5vh; // Tamanho responsivo
    color: #65BBAD;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Subtitle = styled.span`
    display: block; 
`;

export const Paragrafo = styled.p`
    display: flex;
    justify-content: center;
    gap: 2vh; 
    margin-top: 5vh; 
    font-family: 'Ledger';
    font-style: normal;
    font-weight: 400;
    font-size: 3vh; 
    line-height: 5vh; 
    text-align: center;
    color: #000000;
`;

export const ContainerIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 2vh; 
    margin-top: 10vh; 
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-bottom: 2vh; 
`;

export const IconLink = styled.a`
    text-decoration: none; 
    color: inherit; 
    cursor: pointer; 
`;

export const AutoajudaIcon = styled.img`
    width: 10vh; 
    height: 10vh; 
    transition: transform 0.3s ease; 

    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.599));
    }
`;

export const TranstornoIcon = styled.img`
    width: 10vh; 
    height: 10vh; 
    transition: transform 0.3s ease; 

    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.599));
    }
`;

export const InformacoesIcon = styled.img`
    width: 10vh; 
    height: 10vh; 
    transition: transform 0.3s ease; 

    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.599));
    }
`;

export const Label = styled.span`
    width: 20vh; 
    height: 5vh; 
    margin-top: 2vh; 
    text-align: center;
    font-family: 'Lemon';
    font-style: normal;
    font-weight: 200;
    font-size: 3vh; 
    line-height: 4vh; 
    color: #65BBAD;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 1700px) {
        font-size: 2.5vh; 
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        font-size: 2.3vh; 
    }
`;
