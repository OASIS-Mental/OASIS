import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Header, Main, Conatiner, Label, Input, ButtonLogar, PasswordContainer, TogglePasswordIcon, ImageMHome, LabelButton, ContainerLabel } from './components/stylerLogin';
import { Overlay, DiveWelcome, WelcomeMessage, ThankYouButton } from './components/stylerWelcome';

import Eye from "../../assets/imgCadastro/eye.svg";
import EyeOff from "../../assets/imgCadastro/eye-off.svg";
import HomeFrame from "../../assets/imgCadastro/frame.svg";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordEntered, setIsPasswordEntered] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showWelcome, setShowWelcome] = useState(false);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    };

    const handlePasswordChange = (e) => {
        setIsPasswordEntered(e.target.value.length > 0);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            const { token, user } = response.data;

            // Armazena o token e o nome do usuário no localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('userName', user.name);

            setUserName(user.name); // Define o nome do usuário
            setErrorMessage('');
            setShowWelcome(true); // Mostra a mensagem de boas-vindas
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Erro ao fazer login. Por favor, tente novamente ou mais tarde.');
        }
    };

    const handleForgotPassword = () => {
        navigate('/reset-password');
    };

    const handleRegister = () => {
        navigate('/cadastro');
    };

    const goBackPage = () => {
        navigate('/');
    };

    const handleThankYou = () => {
        setShowWelcome(false); // Esconde a mensagem de boas-vindas
        navigate('/'); // Redireciona para a página inicial
    };

    return (
        <>
            <Header />

            <Main>
                <Conatiner>
                    <Label>E-mail</Label>
                    <Input
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ borderColor: errorMessage ? 'red' : '' }}
                    />
                </Conatiner>

                <Conatiner>
                    <Label>Senha</Label>
                    <PasswordContainer>
                        <Input
                            placeholder="Senha"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                handlePasswordChange(e);
                            }}
                        />
                        {isPasswordEntered && (
                            <TogglePasswordIcon onClick={toggleShowPassword}>
                                <img src={showPassword ? EyeOff : Eye} alt="Toggle Password Visibility" />
                            </TogglePasswordIcon>
                        )}
                    </PasswordContainer>
                </Conatiner>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                <ButtonLogar onClick={handleLogin}>Logar</ButtonLogar>

                <ContainerLabel>
                    <LabelButton onClick={handleRegister}>Não possuo cadastro!</LabelButton>
                    <LabelButton onClick={handleForgotPassword}>Esqueceu a senha?</LabelButton>
                </ContainerLabel>

                <ImageMHome onClick={goBackPage} src={HomeFrame} />

                {showWelcome && (
                    <Overlay>
                        <DiveWelcome>
                            <WelcomeMessage>Bem-vindo, {userName} !</WelcomeMessage>
                            <ThankYouButton onClick={handleThankYou}>Obrigado!</ThankYouButton>
                        </DiveWelcome>
                    </Overlay>
                )}
            </Main>
        </>
    );
}
