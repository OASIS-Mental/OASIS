import React from "react";
import { useNavigate } from 'react-router-dom';

import { Header, Main, Conatiner, Label, Input,ButtonCadastrar,ButtonVoltar,Imagem } from './components/stylerCadastro';

import SetaVoltar from "../../assets/imgCadastro/botao-de-seta-para-a-esquerda-do-teclado.svg";



export default function CadastrarUsers() {
    return (
        <>
            <Header />
            <Main>
                <Conatiner>
                    <Label>Nome</Label>
                    <Input placeholder="Nome" type="text" />
                </Conatiner>
                <Conatiner>
                    <Label>E-mail</Label>
                    <Input placeholder="E-mail" type="email" />
                </Conatiner>
                <Conatiner>
                    <Label>Senha</Label>
                    <Input placeholder="Senha" type="numeber" />
                </Conatiner>
                <ButtonCadastrar>Cadastrar</ButtonCadastrar>
                <ButtonVoltar><Imagem src={SetaVoltar}/>Voltar</ButtonVoltar>
            </Main>
        </>
    )
} 