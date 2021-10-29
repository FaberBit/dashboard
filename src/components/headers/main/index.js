import React from 'react';
import { AiOutlinePoweroff } from "react-icons/ai";
import { HeaderContainer, HeaderTitle, HeaderContent } from './styles';

import { useUser } from '../../../hooks/useUser'
import colors from '../../../styles/colors';
import LogoImg from '../../../assets/img/logos/icon.png'
 
export function HeaderMain({ title }) {
  const { user, host, LogoutSession } = useUser()
  return (
    <HeaderContainer>
      <HeaderTitle>
        <img src={LogoImg} alt="FaberBit" />
        <h2>{title}</h2>
      </HeaderTitle>

      <HeaderContent>
        <span>{user.name}</span>
        <img src={`${host}/files/${user.avatar}`} alt={user.name} />
        <button onClick={() => LogoutSession()}>
          <AiOutlinePoweroff color={colors.red} size={24}/>
        </button>
      </HeaderContent>
    </HeaderContainer>
  );
}