/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container } from './styles';

export function Button({ title, width, ...rest }) {
  return (
    <Container width={width} {...rest}>
      <span>{title}</span>
    </Container>
  );
}
