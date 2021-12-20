import React from 'react';

import { HeaderMain } from '../../../../../components/headers/main'


import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg'
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

export function SchedulesEdit() {
  return (
    <Container>
      <HeaderMain title="Edite o Agendamento"/>

      <Content>
        <img src={NewSvg} alt='Form' />

        <Form>
          <h4>Revise os campos</h4>
          <Input title="Proprietário" width={416} placeholder="Dono da embarcação" value="Any_Name"/>

          <Input title="Embarcação" width={416} placeholder="Embacação do cliente" value="Any_Name"/>

          <Input title="Descrição" width={416} placeholder="Observações do agendamento" value="Any_Description"/>

          <Input title="Data" width={416} placeholder="Dia do agendamento" value="Any_Day"/>

          <Input title="Hora" width={416} placeholder="Horario do agendamento" value="Any_Hour"/>

          <Button title="Salvar" width={140}/>
        </Form>
      </Content>
    </Container>
  )
}
