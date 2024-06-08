import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Header, Main, Container, Label, InputWrapper, Input, ButtonCadastrar, ButtonVoltar, ImageMHome, ErrorMessage } from './components/stylerCadastro'; // Adicionei InputWrapper e ErrorMessage
import SetaVoltar from "../../assets/imgCadastro/botao-de-seta-para-a-esquerda-do-teclado.svg";
import HomeFrame from "../../assets/imgCadastro/frame.svg";


export default function CadastrarUsers() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    
    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    };

    const handlePasswordChange = (e) => {
        setIsPasswordEntered(e.target.value.length > 0);
    };

    const handleRegister = async () => {
        // Verifica se todos os campos estão preenchidos
        if (!name || !email || !password || !confirmPassword) {
            setErrors({
                name: !name,
                email: !email,
                password: !password,
                confirmPassword: !confirmPassword
            });
            return;
        }

        // Valida o formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors(prevErrors => ({ ...prevErrors, email: true }));
            return;
        }

        // Verifica se a senha tem pelo menos 8 caracteres e atende aos critérios de complexidade
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrors(prevErrors => ({ ...prevErrors, password: true }));
            return;
        }

        // Verifica se a senha e a confirmação de senha correspondem
        if (password !== confirmPassword) {
            setErrors(prevErrors => ({ ...prevErrors, confirmPassword: true }));
            return;
        }

        try {
            await axios.post('http://localhost:3000/register', { name, email, password });
            navigate('/logar');
        } catch (error) {
            console.error('Error registering user:', error);
            // Você pode tratar erros aqui, se necessário
        }
    };

    const goBackLogar = () => {
        navigate('/logar');
    };

    const goBackHome = () => {
        navigate('/');
    };

    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Label>Nome</Label>
                    <InputWrapper>
                        <Input placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        {errors.name && <ErrorMessage>Preencha seu nome</ErrorMessage>}
                    </InputWrapper>
                </Container>

                <Container>
                    <Label>E-mail</Label>
                    <InputWrapper>
                        <Input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <ErrorMessage>Preencha um e-mail válido</ErrorMessage>}
                    </InputWrapper>
                </Container>

                <Container>
                    <Label>Senha</Label>
                    <InputWrapper>
                        <Input
                            placeholder="Senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <ErrorMessage>Senha inválida: deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais (@$!%*?&)</ErrorMessage>}
                                      </InputWrapper>
                </Container>

                <Container>
                    <Label>Confirmar Senha</Label>
                    <InputWrapper>
                        <Input placeholder="Confirmar Senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        {errors.confirmPassword && <ErrorMessage>As senhas não correspondem</ErrorMessage>}
                    </InputWrapper>
                </Container>

                <ButtonCadastrar onClick={handleRegister}>Cadastrar</ButtonCadastrar>
                <ButtonVoltar onClick={goBackLogar}><img src={SetaVoltar} alt="Seta para voltar" />Voltar a tela de login</ButtonVoltar>
                <ImageMHome onClick={goBackHome} src={HomeFrame} />
            </Main>

        </>
    );
}
