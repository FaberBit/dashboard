/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { InputStyle } from './styles';

export function Input({ stylesProps, ...rest }) {
  return (
    <InputStyle stylesProps={stylesProps} {...rest} />
  );
}
