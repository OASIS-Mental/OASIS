import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Header, ImagemLogo, NavHeader, NavLink } from './components/header-auto-ajuda';

import LogoOASIS from "../../assets/imgAbout/logo.svg";

export default function AutoAjuda() {
    const navigate = useNavigate();
  
    function goBackPage() {
        navigate('/');
    }
    return (
        <>
            <Header>
                <ImagemLogo src={LogoOASIS} alt="Logo" />
                <NavHeader>
                    <NavLink onClick={goBackPage}>Home</NavLink>
                    <NavLink href="#login">Login</NavLink>
                    <NavLink href="#register">Cadastrar</NavLink>
                </NavHeader>
            </Header>
        </>
    )
}