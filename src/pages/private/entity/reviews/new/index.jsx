import React from 'react';

import { HeaderMain } from '../../../../../components/headers/main';

import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg';
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

export function ReviewsNew() {
  return (
    <Container>
      <HeaderMain title="Crie uma nova Revisão" />

      <Content>
        <img src={NewSvg} alt="Form" />

        <Form>
          <h4>Preencha os campos</h4>

          <Input title="Embarcação" width={416} placeholder="Embacação do cliente" />

          <Input title="Empresa" width={416} placeholder="Empresa que realizou a revisão" />

          <Input title="Profissional" width={416} placeholder="Profissional que realizou a revisão" />

          <Input title="Hora/Motor" width={416} placeholder="Hora/Motor de quando a revisão foi realizada" />

          <Input title="Proxima Revisão p/ Mês" width={416} placeholder="Data da proxima revisão pelo mês" />

          <Input title="Proxima Revisão p/ Hora/Motor " width={416} placeholder="Data da proxima revisão por quilometragem" />

          <Button title="Salvar" width={140} />
        </Form>
      </Content>
    </Container>
  );
}
