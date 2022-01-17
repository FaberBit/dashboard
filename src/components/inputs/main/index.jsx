/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container } from './styles';

export function Input({
  title, width, stylesProps, ...rest
}) {
  return (
    <Container stylesProps={stylesProps} width={width}>
      <span>{title}</span>
      <input {...rest} />
    </Container>
  );
}
