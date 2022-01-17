import React from 'react';

import { HeaderMain } from '../../../../components/headers/main';

import {
  Container, Content, Item, ListItens,
} from './styles';

import SearchSvg from '../../../../assets/img/banners/search.svg';
import { searchItems } from '../../../../utils/searchItems';

export function FindView() {
  return (
    <Container>
      <HeaderMain title="Escolha uma entidade para visualizar" />

      <Content>
        <img src={SearchSvg} alt="Search" />

        <ListItens>
          {
            searchItems.map((item) => (
              <Item to={`/${item.encounter}/infos`} key={item.id}>
                <span>{item.title}</span>
              </Item>
            ))
          }
          <Item to="/payments/infos">
            <span>Pagamentos</span>
          </Item>
        </ListItens>
      </Content>
    </Container>
  );
}
