import React from 'react';

import { HeaderMain } from '../../../../../components/headers/main';

import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg';
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

export function ReviewsEdit() {
  return (
    <Container>
      <HeaderMain title="Edite a Revisão" />

      <Content>
        <img src={NewSvg} alt="Form" />

        <Form>
          <h4>Revise os campos</h4>

          <Input title="Embarcação" width={416} placeholder="Embacação do cliente" value="any_client" />

          <Input title="Empresa" width={416} placeholder="Empresa que realizou a revisão" value="any_name" />

          <Input title="Profissional" width={416} placeholder="Profissional que realizou a revisão" value="any_professional" />

          <Input title="Hora/Motor" width={416} placeholder="Hora/Motor de quando a revisão foi realizada" value="any_motor/hour" />

          <Input title="Proxima Revisão p/ Mês" width={416} placeholder="Data da proxima revisão pelo mês" value="any_mouth" />

          <Input title="Proxima Revisão p/ Hora/Motor " width={416} placeholder="Data da proxima revisão por quilometragem" value="any_motor/hour" />

          <Button title="Salvar" width={140} />
        </Form>
      </Content>
    </Container>
  );
}
