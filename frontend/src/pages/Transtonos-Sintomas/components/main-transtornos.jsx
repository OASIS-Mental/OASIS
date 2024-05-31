import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;



export const Introducao = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;

export const Title = styled.h1`
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



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const Estresse = styled.div`
    width: 80vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const TitleEstresse = styled.h3`
    width: 465px;
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
    padding-left: 8px;
`;


export const DivEstresse = styled.div`
    display: flex;
    gap: 80px;
    align-items: center; 
`;

export const ContainerEstresse = styled.ul`
    margin-left: 50px;
    width: 850px;
`;

export const ListaEstresse = styled.li`
     font-family: 'Ledger';
    font-style: normal;
    font-size: 22px;
    line-height: 47px;
    color: #000000;
`;

export const ImagemEstresse = styled.img`
    width: 17vw;
    height: auto; 
    margin: auto;
`;