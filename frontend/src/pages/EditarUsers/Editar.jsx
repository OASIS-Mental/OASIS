import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode";

import { Header, ImagemLogo, NavHeader, NavLink } from './components/stylerEdit-header';
import { FormContainer, FormTitle, Form, Label, Input, Textarea, Button } from './components/stylerEditForm';

import UserAvatar from "../../components/UserAvatar";
import LogoOASIS from "../../assets/imgAbout/logo.svg";

export default function Editar() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoginMessage, setShowLoginMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [name, setName] = useState('');
    const [userId, setUserId] = useState(null);
    const [objectives, setObjectives] = useState('');
    const [fears, setFears] = useState('');
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        // Verifica se o usuário está autenticado ao carregar o componente
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            const userNameFromLocalStorage = localStorage.getItem('userName');
            setName(userNameFromLocalStorage || '');
            const decodedToken = jwtDecode(token);
            setUserId(decodedToken.id);
        }
    }, []);

    async function handleLogin() {
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            setIsAuthenticated(true);
            const { user, token } = response.data;
            if (user && token) {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);
                localStorage.setItem('userName', user.name);
                setName(user.name);
                navigate('/');
            } else {
                setErrorMessage('Resposta do servidor inválida.');
            }
        } catch (error) {
            setErrorMessage('Email ou senha incorretos.');
        }
    }

    function handleLogout() {
        setEmail('');
        setPassword('');
        setErrorMessage('');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('userName');
        setIsAuthenticated(false);
        setName('');
        navigate('/');
    }

    function handleEditUser() {
        navigate('/reset-users');
    }

    function redirectUser(path) {
        navigate(path);
    }

    function closeLoginMessage() {
        setShowLoginMessage(false);
    }

    function closeCustomMessage() {
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
    }

    function handleSave() {
        // Simulação de envio de dados
        console.log("Dados salvos:", { objectives, fears });
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000); // Oculta a mensagem após 3 segundos
    }
    
    function handleFeedbackSubmit() {
        // Simulação de envio de feedback
        console.log("Feedback enviado:", feedback);
        setFeedback('');
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000); // Oculta a mensagem após 3 segundos
    }

    return (
        <>
            <Header>
                <ImagemLogo onClick={() => navigate("/")} src={LogoOASIS} alt="Logo" />
                <NavHeader>
                    <NavLink onClick={() => navigate("/")}>Home</NavLink>
                    {!isAuthenticated ? (
                        <>
                            <NavLink onClick={() => { navigate("/logar"); setShowLoginMessage(true); }}>Login</NavLink>
                            <NavLink onClick={() => navigate("/cadastro")}>Cadastrar</NavLink>
                        </>
                    ) : (
                        <UserAvatar
                            userName={name}
                            onEdit={handleEditUser}
                            onLogout={handleLogout}
                        />
                    )}
                </NavHeader>
            </Header>

            <FormContainer>
                <FormTitle>Informações sobre ...</FormTitle>
                <Form>
                    <Label>Objetivos:</Label>
                    <Textarea value={objectives} onChange={(e) => setObjectives(e.target.value)} />

                    <Label>Medos:</Label>
                    <Textarea value={fears} onChange={(e) => setFears(e.target.value)} />

                    <Button type="button" onClick={handleSave}>Salvar</Button>
                </Form>
                <Form>
                    <Label>Feedback sobre o site:</Label>
                    <Textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                    <Button type="button" onClick={handleFeedbackSubmit}>Enviar Feedback</Button>
                </Form>
                {showSuccessMessage && <p>Operação realizada com sucesso!</p>}
            </FormContainer>
        </>
    );
}
