import React from 'react';

import { HeaderMain } from '../../../../../components/headers/main'


import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg'
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

export function ClientEdit() {
  return (
    <Container>
      <HeaderMain title="Edite o cliente"/>

      <Content>
        <img src={NewSvg} alt='Form' />

        <Form>
          <h4>Revise os campos</h4>

          <Input title="Nome" width={416} placeholder="Nome" value="any name"/>

          <Input title="Email" width={416} placeholder="Email" value="any@mail.com"/>

          <Input title="Telefone" width={416} placeholder="Telefone" value="any_telefone"/>

          <Button title="Salvar" width={140}/>
        </Form>
      </Content>
    </Container>
  )
}


