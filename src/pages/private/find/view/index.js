import React from 'react';

import { HeaderMain } from '../../../../components/headers/main'


import { Container, Content, Item, ListItens } from './styles';

import SearchSvg from '../../../../assets/img/banners/search.svg'

export function FindView() {
  return (
    <Container>
      <HeaderMain title="Escolha uma entidade para visualizar"/>

      <Content>
        <img src={SearchSvg} alt="Search" />

        <ListItens>
          <Item to="/">
            <span>Clientes</span>
          </Item>

          <Item to="/">
            <span>Funcionarios</span>
          </Item>

          <Item to="/">
            <span>Lanchas</span>
          </Item>

          <Item to="/">
            <span>Jetskis</span>
          </Item>

          <Item to="/">
            <span>Agendamentos</span>
          </Item>

          <Item to="/">
            <span>Pagamentos</span>
          </Item>

          <Item to="/">
            <span>Classificados</span>
          </Item>

          <Item to="/">
            <span>Revisões</span>
          </Item>
        </ListItens>
      </Content>
    </Container>
  )
}

