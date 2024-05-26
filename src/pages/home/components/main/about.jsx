import styled from "styled-components";


export const ContainerAbout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1606px; 
    margin: 0 auto; 
    gap: 20px;
    margin-top: 220px;
    margin-bottom: 400px;
`;

export const ImageCerebro = styled.img`
   height: 35vh;
    
`;

export const ContentAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    font-weight: 350;
    font-size: 25px;
    line-height: 46px;
    width: 800px;
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


