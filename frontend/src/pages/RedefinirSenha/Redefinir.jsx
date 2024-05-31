import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Header, Main, Conatiner, Label, Input, ButtonLogar, ImageMHome,ErrorMessage, ContainerLabel,InputWrapper, LabelButton } from './components/reset';
import HomeFrame from "../../assets/imgCadastro/frame.svg";

export default function Redefinir() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = 'E-mail é obrigatório.';
        }
        if (!newPassword) {
            newErrors.newPassword = 'Nova senha é obrigatória.';
        } else {
            // Verifica se a nova senha atende aos critérios de complexidade
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(newPassword)) {
                newErrors.newPassword = 'Senha inválida: deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais (@$!%*?&).';
            }
        }
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirmação de senha é obrigatória.';
        } else if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = 'As senhas não coincidem.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            await axios.post('http://localhost:3000/reset-password', { email, newPassword });
            navigate('/logar');
        } catch (error) {
            console.error('Error resetting password:', error);
            setErrors({ general: 'Erro ao redefinir a senha.' });
        }
    };

    const goBackLogar = () => {
        navigate('/logar');
    };

    const goBackPage = () => {
        navigate('/');
    };

    const errorStyle = {
        color: 'red',
        marginTop: '5px'
    };

    return (
        <>
            <Header />

            <Main>
                <Conatiner>
                    <Label>E-mail</Label>
                    <Input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <ErrorMessage style={errorStyle}>{errors.email}</ErrorMessage>}
                </Conatiner>

                <Conatiner>
                <Label>Nova Senha</Label>
                    <InputWrapper>
                        <Input placeholder="Nova Senha" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </InputWrapper>
                    {errors.newPassword && <ErrorMessage style={errorStyle}>{errors.newPassword}</ErrorMessage>}
                </Conatiner>

                <Conatiner>
                    <Label>Redigitar Senha</Label>
                    <Input placeholder="Redigitar Senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {errors.confirmPassword && <ErrorMessage style={errorStyle}>{errors.confirmPassword}</ErrorMessage>}
                </Conatiner>

                {errors.general && <ErrorMessage style={errorStyle}>{errors.general}</ErrorMessage>}

                <ButtonLogar onClick={handleResetPassword}>Redefinir</ButtonLogar>

                <ContainerLabel>
                    <LabelButton onClick={goBackLogar}>Voltar a tela do Login!</LabelButton>
                </ContainerLabel>

                <ImageMHome onClick={goBackPage} src={HomeFrame} />
            </Main>
        </>
    );
}
