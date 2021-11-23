import React from 'react';

import { HeaderMain } from '../../../../components/headers/main'


import { Container, Content, Item, ListItens } from './styles';

import SearchSvg from '../../../../assets/img/banners/search.svg'
import { searchItems } from '../../../../utils/searchItems';

export function FindNew() {
  return (
    <Container>
      <HeaderMain title="Escolha uma entidade para criar"/>

      <Content>
        <img src={SearchSvg} alt="Search" />

        <ListItens>
          {
            searchItems.map(item => (
              <Item to={`/view/${item.title}/${item.encounter}`} key={item.id}>
                <span>{item.title}</span>
              </Item>
            ))
          }
        </ListItens>
      </Content>
    </Container>
  )
}

