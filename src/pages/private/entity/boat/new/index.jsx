import React from 'react';

import { HeaderMain } from '../../../../../components/headers/main';

import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg';
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

export function FormNew() {
  return (
    <Container>
      <HeaderMain title="Crie uma Lancha" />

      <Content>
        <img src={NewSvg} alt="Form" />

        <Form>
          <h4>Preencha os campos</h4>

          <Input title="Nome*" width={416} placeholder="Nome" />

          <Input title="Proprietário" width={416} placeholder="Dono da embarcação" />

          <Input title="Marca" width={416} placeholder="Marca do fabricante" />

          <Input title="Modelo" width={416} placeholder="Modelo feito pela fabricante" />

          <Input title="Ano" width={416} placeholder="Ano da embarcação" />

          <Input title="Comprimento" width={416} placeholder="Comprimento da embarcação" />

          <Button title="Salvar" width={140} />
        </Form>
      </Content>
    </Container>
  );
}
