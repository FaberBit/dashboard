import React from 'react';
import { Container } from './styles';

export function Button({ title, width, ...rest }) {
  return (
    <Container width={width} {...rest}>
        <span>{title}</span>
    </Container>
  );
}