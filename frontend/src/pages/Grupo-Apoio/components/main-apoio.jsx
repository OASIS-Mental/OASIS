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

    @media screen and (max-width: 1700px) {
       font-size: 3vw;
       margin-top: 20px;
      }

      @media screen and (max-width: 1300px) {
        font-size: 4vw;
    }

    @media screen and (max-width: 1200px) {
        font-size: 4vw;
    }

    
    @media screen and (max-width: 768px) {
        font-size: 6vw;
    }
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

    @media screen and (max-width: 1700px) {
       font-size: 2vw;
      }
    @media screen and (max-width: 1300px) {
       font-size: 2.3vw;
      }

      @media screen and (max-width: 768px) {
        font-size: 20px;
    }

`;

export const Paragrafo = styled.p`
    margin-left: 20px;
    font-family: 'Ledger';
    font-style: normal;
    font-size: 25px;
    line-height: 56px;
    text-align: justify;
    color: #000000;

    @media screen and (max-width: 1700px) {
       font-size: 1.2vw;
    }

    @media screen and (max-width: 1300px) {
       font-size: 1.5vw;
      }
      
      @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    @media screen and (max-width: 768px) {
        font-size: 17px;
    }
    

`;

export const Span = styled.span`
    margin-left: 20px;
    font-family: 'Ledger';
    font-style: normal;
    font-size: 25px;
    line-height: 56px;
    text-align: justify;
    color: #000000;

    @media screen and (max-width: 1700px) {
       font-size: 1.4vw;
       line-height: 45px;
      }

      @media screen and (max-width: 1300px) {
       font-size: 1.5vw;
      }

      @media screen and (max-width: 768px) {
        font-size: 14px;
    }

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

    @media screen and (max-width: 1700px) {
        width: 1200px;
    }

    @media screen and (max-width: 1300px) {
        width: 1100px;
    }

    @media screen and (max-width: 1200px) {
        max-width: 650px;
        margin: auto;
        height: 700px;
    }

    @media screen and (max-width: 768px) {
        max-width: 90vw;
        height: 600px;
    }

    
    @media screen and (max-width: 540px) {
        height: 670px;
    }


`;


export const ListaApoio = styled.ul`
    margin: auto;
    width: 1100px; 

    @media screen and (max-width: 1300px) {
        width: 1000px; 
      }
    
      @media screen and (max-width: 1200px) {
        width: 550px;
        margin: auto;
    }

    @media screen and (max-width: 768px) {
        width: 450px;
    }

    @media screen and (max-width: 540px) {
        width: 400px;
    }
`;

export const ItemApoio = styled.li`
    font-family: 'Ledger';
    font-style: normal;
    font-size: 25px;
    line-height: 56px;
    text-align: justify;
    color: #000000;
    list-style-type: none;

    @media screen and (max-width: 1700px) {
       font-size: 1.4vw;
       line-height: 45px;
      }

      @media screen and (max-width: 1300px) {
       font-size: 1.5vw;
      }

      @media screen and (max-width: 768px) {
        font-size: 14px;
    }

      @media screen and (max-width: 540px) {
        font-size: 14px;
        line-height: 35px;
       
    }
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

    @media screen and (max-width: 1200px) {
        
    }
    
    @media screen and (max-width: 768px) {
        width: 430px;
        margin: auto;
    }

    @media screen and (max-width: 540px) {
        width: 400px;
        margin: auto;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
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

    @media screen and (max-width: 1200px) {
        height: 7px;
    }
    @media screen and (max-width: 768px) {
        width: 200px;
    }
`;

export const ParagrafoFinal = styled.p`
    font-family: 'Ledger';
    font-style: normal;
    font-size: 25px;
    line-height: 56px;
    text-align: justify;
    color: #000000;
    margin-left: 20px;

    @media screen and (max-width: 1700px) {
        width: 1200px;
        font-size: 1.4vw;
    }

    @media screen and (max-width: 1300px) {
       font-size: 1.5vw;
       width: 1100px;
      }

      @media screen and (max-width: 1200px) {
        width: 700px;
        line-height: 30px;
    }

    @media screen and (max-width: 768px) {
        width: 450px;
        font-size: 16px;
    }

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
