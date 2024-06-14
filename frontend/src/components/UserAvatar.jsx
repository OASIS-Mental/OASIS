import React, { useState, useRef, useEffect } from 'react';
import DropdownMenu from './dropdownMenu';
import UserImage from '../assets/imgAbout/users.svg';

const UserAvatar = ({ userName, onEdit, onLogout }) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const avatarRef = useRef(null);

  // Função para fechar o menu ao clicar fora do avatar
  const handleClickOutside = (event) => {
    if (avatarRef.current && !avatarRef.current.contains(event.target)) {
      setShowDropdownMenu(false);
    }
  };

  // Adiciona o event listener quando o componente é montado
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={avatarRef}>
      <img
        src={UserImage}
        alt="Usuário"
        style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
        onClick={() => setShowDropdownMenu(!showDropdownMenu)}
      />
      {showDropdownMenu && (
        <DropdownMenu
          userName={userName}
          onEdit={onEdit}
          onLogout={onLogout}
        />
      )}
    </div>
  );
};

export default UserAvatar;