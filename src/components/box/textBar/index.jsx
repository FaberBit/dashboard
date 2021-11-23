import React from 'react';
import { Box, InfoSpan } from './styles';

export function TextBar({ title, span, colorSpan }) {
  return (
    <Box>
      <h4>
        { title }
      </h4>

      <InfoSpan colorSpan={colorSpan}>
        <span> { span } </span>
      </InfoSpan>
    </Box>
  );
}