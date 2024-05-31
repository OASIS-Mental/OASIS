import React from 'react';
import { useState } from 'react';
import DropdownMenu from './dropdownMenu';
import UserImage from '../assets/imgAbout/users.svg';

const UserAvatar = ({ userName, onEdit, onLogout }) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  return (
    <>
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
    </>
  );
}

export default UserAvatar;
