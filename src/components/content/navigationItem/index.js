import React from 'react';
import { ItemContainer } from './styles';

export function NavigationItem({ title, subTitle, source, path }) {
  return (
    <ItemContainer to={path}>
      <h4>{title}</h4>
      <span>{subTitle}</span>

      <img src={source} alt={title} />
    </ItemContainer>
  );
}