import React from 'react';

import { HeaderMain } from '../../../../components/headers/main'


import { Container, Content } from './styles';

// import DataImg from '../../../assets/img/banners/data.svg'

export function FindView() {
  return (
    <Container>
      <HeaderMain title="Escolha uma entidade para visualizar"/>

      <Content>
        <h2>Find View</h2>
      </Content>
    </Container>
  )
}

