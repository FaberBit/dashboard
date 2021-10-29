import React from 'react';
import { ItemContainer } from './styles';

import { useUser } from '../../../hooks/useUser'

export function NavigationItem({ title, subTitle, source, path }) {
  const { host } = useUser()
  return (
    <ItemContainer to={path}>
      <h4>{title}</h4>
      <span>{subTitle}</span>

      <img src={source} alt={title} />
    </ItemContainer>
  );
}