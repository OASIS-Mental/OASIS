import styled from "styled-components";

export const ContainerAbout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1600px; 
    margin: 0 auto; 
    gap: 20px;
    margin-top: 30vh; 
    margin-bottom: 45vh; 

    @media screen and (max-width: 1700px) {
        max-width: 1200px; 
    }
    
    @media screen and (max-width: 1300px) {
        max-width: 1100px; 
        margin-bottom: 40vh; 
    }

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        max-width: 1100px; 
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 15vh; 
        margin-bottom: 10vh; 
    }
`;

export const ImageCerebro = styled.img`
   height: 35vh;

   @media screen and (max-width: 1700px) {
        height: auto;
        max-width: 30%; 
    }

    @media screen and (max-width: 1300px) {
        height: auto;
        max-width: 50%; 
    }

   @media screen and (max-width: 768px) {
       height: auto;
       max-width: 70%; 
   }
`;

export const ContentAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin-left: 30px;

    @media screen and (max-width: 1300px) {
        max-width: 80%; 
    }

    @media screen and (max-width: 768px) {
        margin-left: 0;
        align-items: center;
    }
`;

export const TitleAbout = styled.h2`
    font-family: 'Lemon';
    font-style: normal;
    font-size: 5vh; 
    line-height: 6vh; 
    color: #65BBAD;

    @media screen and (max-width: 1700px) {
        font-size: 4vh;
    }

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

export const About = styled.p`
    font-family: 'Ledger';
    font-style: normal;
    font-weight: 350;
    font-size: 3vh; 
    line-height: 5vh; 
    width: 90%; 
    color: #000000;
    margin-bottom: 10px;

    @media screen and (max-width: 1700px) {
        font-size: 2.5vh;
    }

    @media screen and (max-width: 1300px) {
        width: 100%; 
    }

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

export const Button = styled.button`
    width: 15vw; 
    height: 8vh; 
    background-color: #65BBAD; 
    color: #fff; 
    border: none;
    cursor: pointer;
    font-family: 'Lemon';
    font-style: normal;
    font-weight: 400;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 3vh; 
    line-height: 4vh; 
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

    @media screen and (max-width: 1700px) {
        font-size: 2.8vh;
    }

    @media screen and (max-width: 1300px) {
        width: 45%; 
    }


    @media screen and (max-width: 768px) {
        width: 50%; 
    }
`;
