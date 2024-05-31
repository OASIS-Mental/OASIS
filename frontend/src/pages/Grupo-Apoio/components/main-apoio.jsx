import styled, { keyframes } from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: filter 0.3s ease;
    &.blurred {
        filter: blur(5px);
    }
`;

export const IntroducaoApoio = styled.div`
    display: flex;
    margin-bottom: 50px;
`;

export const TitleApoio = styled.h1`
    font-family: 'Lemon';
    font-style: normal;
    font-size: 64px;
    line-height: 84px;
    text-align: center;
    color: #65BBAD;
`;

export const DescriptionApoio = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70%;
    margin-bottom: 80px;
`;

export const TitleSub = styled.h3`
    font-family: 'Ledger';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 56px;
    text-align: justify;
    color: #5BB1A4;
`;

export const Paragrafo = styled.p`
    margin-left: 20px;
    font-family: 'Ledger';
    font-style: normal;
    font-size: 25px;
    line-height: 56px;
    text-align: justify;
    color: #000000;
`;
export const Span = styled.span`
    margin-left: 20px;
    font-family: 'Ledger';
    font-style: normal;
    font-size: 25px;
    line-height: 56px;
    text-align: justify;
    color: #000000;
`;

export const InfoApoio = styled.div`
    padding-top: 40px;
    gap: 30px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    width: 1500px;
    background: linear-gradient(90deg, rgba(46, 85, 79, 0.14) 0%, rgba(46, 85, 79, 0.14) 100%);
    box-shadow: 17px 17px 24px 17px rgba(0, 0, 0, 0.25);
    border-radius: 38px;
    margin: auto;
    ${props => !props.authenticated && `
        padding-top: 40px;
        padding-bottom: 40px;
        height: auto;
        
    `}
`;


export const ListaApoio = styled.ul`
    margin: auto;
    width: 1100px; 
`;

export const ItemApoio = styled.li`
    font-family: 'Ledger';
    font-style: normal;
    font-size: 25px;
    line-height: 56px;
    text-align: justify;
    color: #000000;
    list-style-type: none;
`;



const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const Imagem = styled.img`
  height: 4vh;
  cursor: pointer;
  animation: ${bounce} 2s infinite ease-in-out;
`;

export const MapaApoio = styled.img`
    height:50vh;
    margin: auto;

`;

export const DivFinal = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 120px;
`;

export const Linha = styled.div`
    width: 388px;
    height: 13px;
    background: linear-gradient(90deg, #156B5D 0%, rgba(41, 209, 183, 0.6) 100%);
`;

export const ParagrafoFinal = styled.p`
    font-family: 'Ledger';
    font-style: normal;
    font-size: 25px;
    line-height: 56px;
    text-align: justify;
    color: #000000;
    margin-left: 20px;
`;


export const Calendaroverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

export const CalendarContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

`
