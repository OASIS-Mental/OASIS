import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Header, Main, Conatiner, Label, Input, ButtonCadastrar, ButtonVoltar, Imagem, PasswordContainer, TogglePasswordIcon, ImageMHome } from './components/stylerCadastro';

import SetaVoltar from "../../assets/imgCadastro/botao-de-seta-para-a-esquerda-do-teclado.svg";
import Eye from "../../assets/imgCadastro/eye.svg";
import EyeOff from "../../assets/imgCadastro/eye-off.svg";
import HomeFrame from "../../assets/imgCadastro/frame.svg";

export default function CadastrarUsers() {
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordEntered, setIsPasswordEntered] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    };

    const handlePasswordChange = (e) => {
        setIsPasswordEntered(e.target.value.length > 0);
    };

    const navigate = useNavigate();

    async function addActionLogin() {
        navigate("/logar")
    } 
    async function goBackPage() {
        navigate('/');
    }

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
                    <PasswordContainer>
                        <Input
                            placeholder="Senha"
                            type={showPassword ? "text" : "password"}
                            onChange={handlePasswordChange}
                        />
                        {isPasswordEntered && (
                            <TogglePasswordIcon onClick={toggleShowPassword}>
                                <img src={showPassword ? EyeOff : Eye} alt="Toggle Password Visibility" />
                            </TogglePasswordIcon>
                        )}
                    </PasswordContainer>
                </Conatiner>
                <ButtonCadastrar onClick={addActionLogin}>Cadastrar</ButtonCadastrar>
                <ButtonVoltar onClick={addActionLogin}><Imagem src={SetaVoltar} />Voltar a tela de login</ButtonVoltar>
                <ImageMHome onClick={goBackPage} src={HomeFrame} />
            </Main>
        </>
    );
}
