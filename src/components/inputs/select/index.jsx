/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container } from './styles';

export function Select({
  title,
  width,
  stylesProps,
  messageFirst,
  data,
  clientSelected,
  setClientSelected,
  // disable,
  // ...rest
}) {
  return (
    <Container stylesProps={stylesProps} width={width}>
      <span>{title}</span>
      <select
        onChange={(e) => {
          setClientSelected(e.target.value);
        }}
        value={clientSelected}
        // disable={String(disable)}
        // {...rest}
      >
        <option value="0">{messageFirst}</option>
        {
          data.map((i) => (
            // <option key={i.id} value={String(i.id)}>{i.name}</option>
            <option key={i.id} value={JSON.stringify(i)}>{i.name}</option>
          ))
        }
      </select>
    </Container>
  );
}
