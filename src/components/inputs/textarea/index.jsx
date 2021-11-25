import React from 'react';
import { Container } from './styles';

export function TextArea({ title, width, stylesProps, ...rest }) {
  return (
    <Container stylesProps={stylesProps} width={width}>
        <span>{title}</span>
        <textarea {...rest}/>
    </Container>
  );
}