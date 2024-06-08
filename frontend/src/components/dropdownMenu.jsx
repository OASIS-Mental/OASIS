import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  position: absolute;
  top: 80px; 
  right: 20px; 
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const MenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const UserGreeting = styled.p`
  padding: 10px 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const DropdownMenu = ({ userName, onEdit, onLogout }) => {
  return (
    <Menu>
      <UserGreeting>Olá, {userName}</UserGreeting>
      <MenuItem onClick={onEdit}>Usuário</MenuItem>
      <MenuItem onClick={onLogout}>Sair</MenuItem>
    </Menu>
  );
};

export default DropdownMenu;
