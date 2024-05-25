import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Header, Main, Conatiner, Label, Input, ButtonLogar, PasswordContainer, TogglePasswordIcon, ImageMHome,LabelButton, ContainerLabel } from './components/stylerLogin';

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

  async function goBackPage() {
    navigate('/');
  }

  const handleForgotPassword = () => {
    navigate('/reset-password'); // ou a rota que você definiu para redefinir senha
  };

  const handleRegister = () => {
    navigate('/cadastro'); 
  };

  return (
    <>
      <Header />

      <Main>

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

        <ButtonLogar onClick={goBackPage}>Logar</ButtonLogar>

        <ContainerLabel>
          <LabelButton onClick={handleRegister}>Não possuo cadastro !  </LabelButton>
          <LabelButton onClick={handleForgotPassword}>Esqueceu a senha?</LabelButton>
        </ContainerLabel>

        <ImageMHome onClick={goBackPage} src={HomeFrame} />
      </Main>
    </>
  );
}
