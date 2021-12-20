import React from 'react';

import { HeaderMain } from '../../../../../components/headers/main'


import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg'
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

export function SchedulesNew() {
  return (
    <Container>
      <HeaderMain title="Crie um agendamento"/>

      <Content>
        <img src={NewSvg} alt='Form' />

        <Form>
          <h4>Preencha os campos</h4>

          <Input title="Proprietário" width={416} placeholder="Dono da embarcação"/>

          <Input title="Embarcação" width={416} placeholder="Embacação do cliente"/>

          <Input title="Descrição" width={416} placeholder="Observações do agendamento"/>

          <Input title="Data" width={416} placeholder="Dia do agendamento"/>

          <Input title="Hora" width={416} placeholder="Horario do agendamento"/>

          <Button title="Salvar" width={140}/>
        </Form>
      </Content>
    </Container>
  )
}

