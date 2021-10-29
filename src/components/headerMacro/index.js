import React from 'react';
import { AiOutlinePoweroff } from "react-icons/ai";
import { HeaderContainer, HeaderContent } from './styles';

import {useUser} from '../../hooks/useUser'
import colors from '../../styles/colors';

export function HeaderMacro({ title }) {
  const { user, host, LogoutSession } = useUser()
  return (
    <HeaderContainer>
      <h2>{title}</h2>

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