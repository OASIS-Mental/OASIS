import styled from 'styled-components';

export const Main = styled.main`
   display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IntroducaoCanais = styled.section`
  margin-top: 100px;
    display: flex;
    justify-content: center;
`;

export const TitleCanais = styled.h1`
   width: 1200px;
    font-family: 'Lemon';
    font-style: normal;
    font-size: 45px;
    line-height: 59px;
    text-align: center;
    color: #65BBAD;
    margin-bottom: 100px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ContainerCanais = styled.div`
     display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const Canais = styled.div`
   width: 80vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const TitleG1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    margin-left: 80px;
    margin-right: 0.5rem;
    width: 60px;
  }

  h2 {
    display: flex;
    align-items: center;
    width: 400px;
    height: 43px;
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
    border-bottom: 7px solid;
    border-image: linear-gradient(90deg, #156B5D 0%, rgba(41, 209, 183, 0.6) 100%);
    border-image-slice: 1;
    margin-bottom: 25px;

    padding-left: 8px;
  }
`;
export const DivG1 = styled.div`
  display: flex;
    gap: 80px;
    align-items: center; 
    margin: auto;
`;

export const ContainerG1 = styled.div`
   margin-left: 50px;
    width: 850px;
`;


export const ListaCanais = styled.p`
    font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 47px;
    color: #000000;
    width: 780px;
    a {
        color: #65BBAD;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #1ca4b9;
        }
    }
`;

export const ImagemEstresse = styled.img`
  width: 17vw;
    height: auto; 
    margin: auto;
`;
