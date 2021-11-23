import React from 'react';
import { InputStyle } from './styles';

export function Input({ stylesProps, ...rest }) {
  return (
    <InputStyle stylesProps={stylesProps} {...rest} />
  );
}