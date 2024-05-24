import styled from "styled-components";
import BackgroundHeader from "../../../assets/imgCadastro/cabecalho.svg";

export const Header = styled.header`
 background: url("${BackgroundHeader}") no-repeat center center/cover;
    width: 3491px;
    height: 48vh;
    left: -416px;
    top: 0px;
    width: 100%;
` ;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

` ;

export const Conatiner = styled.div`
    display: flex;
    flex-direction: column;
` ;

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

` ;

export const Input = styled.input`
    padding-left: 15px;
    width: 25vw;
    height: 50px;
    background: #D9D9D9;
    box-shadow: 0px 17px 24px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    border: none;

` ;

export const ButtonCadastrar = styled.button`
    padding-left: 15px;
    width: 25vw;
    height: 50px;
    background: #D9D9D9;
    box-shadow: 0px 17px 24px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    border: none;
` ;

export const ButtonVoltar = styled.button`
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
` ;

export const Imagem = styled.img`
    height: 3vh;

` ;




