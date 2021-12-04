import React from 'react';

import { HeaderMain } from '../../../../../components/headers/main'


import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg'
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

export function ClientNew() {
  return (
    <Container>
      <HeaderMain title="Crie um Cliente"/>

      <Content>
        <img src={NewSvg} alt='Form' />

        <Form>
          <h4>Preencha os campos</h4>

          <Input title="Nome" width={416} placeholder="Nome do cliente"/>

          <Input title="Email" width={416} placeholder="E-mail mais utilizado pelo cliente"/>

          <Input title="Telefone" width={416} placeholder="Telefone para contato do cliente"/>

          <Button title="Salvar" width={140}/>
        </Form>
      </Content>
    </Container>
  )
}

