import React from 'react';
import { Container } from './styles';

export function TextArea({ title, width, height, stylesProps, ...rest }) {
  return (
    <Container stylesProps={stylesProps} width={width} height={height}>
        { title ?? (<span>{title}</span>)}
        <textarea {...rest}/>
    </Container>
  );
}