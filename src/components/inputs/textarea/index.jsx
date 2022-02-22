/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container } from './styles';

export function TextArea({
  title, width, height, stylesProps, ...rest
}) {
  return (
    <Container stylesProps={stylesProps} width={width} height={height}>
      { title ? (<span>{title}</span>) : null}
      <textarea {...rest} />
    </Container>
  );
}
