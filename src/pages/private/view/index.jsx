import React from 'react';

import { HeaderMain } from '../../../components/headers/main';

import { Container, Content } from './styles';

export function View() {
  return (
    <Container>
      <HeaderMain title="Lanchas" />

      <Content>
        <h2>Lanchas</h2>
      </Content>
    </Container>
  );
}
