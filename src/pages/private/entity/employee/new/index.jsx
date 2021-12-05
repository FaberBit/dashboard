import React from 'react';

import { HeaderMain } from '../../../../../components/headers/main'


import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg'
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

export function EmployeeNew() {
  return (
    <Container>
      <HeaderMain title="Crie um Funcionario"/>

      <Content>
        <img src={NewSvg} alt='Form' />

        <Form>
          <h4>Preencha os campos</h4>

          <Input title="Nome" width={316} placeholder="Nome do funcionario"/>

          <Input title="Email" width={316} placeholder="E-mail mais utilizado pelo funcionario"/>

          <Input title="Telefone" width={316} placeholder="Telefone para contato do funcionario"/>

          <Button title="Salvar" width={140}/>
        </Form>
      </Content>
    </Container>
  )
}

