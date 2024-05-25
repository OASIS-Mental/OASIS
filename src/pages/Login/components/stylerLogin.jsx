import styled, { keyframes } from 'styled-components';

import BackgroundHeader from "../../../assets/imgCadastro/cabecalho.svg";

export const Header = styled.header`
    background: url("${BackgroundHeader}") no-repeat center center/cover;
    width: 100%;
    height: 47vh;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`;

export const Conatiner = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-bottom: 5px;
    font-family: 'Lemon';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 29px;
    color: #000000;
`;

export const Input = styled.input`
    padding-left: 15px;
    width: 25vw;
    height: 50px;
    background: #D9D9D9;
    box-shadow: 0px 17px 24px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    border: none;
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

export const ButtonLogar = styled.button`
  position: relative;
    padding-left: 15px;
    width: 25vw;
    height: 50px;
    background: #D9D9D9;
    box-shadow: 0px 17px 24px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    border: none;
    margin-top: 30px;
    cursor: pointer;
    overflow: hidden;
    font-family: 'Lemon', sans-serif;
    font-size: 16px;
    color: #000;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background: linear-gradient(90deg, #65BBAD 0%, #156B5D 100%);
        transition: width 0.3s;
        z-index: -1;
    }

    &:hover::before {
        width: 100%;
    }
`;

export const PasswordContainer = styled.div`
    position: relative;
    width: 25vw;
    height: 50px;
    display: flex;
    align-items: center;
    background: #D9D9D9;
    box-shadow: 0px 17px 24px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    border: none;
`;

export const TogglePasswordIcon = styled.div`
    position: absolute;
    right: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;


const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const ImageMHome = styled.img`
    position: fixed;
    bottom: 20px;
    right: 20px;
    height: 4vh;
    cursor: pointer;
    animation: ${bounce} 2s infinite ease-in-out;
`;
export const ContainerLabel = styled.div`
    width: 22vw;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

export const LabelButton = styled.label`
    cursor: pointer;
    font-family: 'Lemon';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 37px;
    color: #000000;

`;



