import React from 'react';

import { HeaderMain } from '../../../../../components/headers/main'


import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg'
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

export function FormEdit() {
  return (
    <Container>
      <HeaderMain title="Edite sua Lancha"/>

      <Content>
        <img src={NewSvg} alt='Form' />

        <Form>
          <h4>Revise os campos</h4>

          <Input title="Nome*" width={416} placeholder="Nome" value="Any_Name"/>

          <Input title="Proprietário" width={416} placeholder="Dono da embarcação" value="Any_NickName"/>

          <Input title="Marca" width={416} placeholder="Marca do fabricante" value="Any_Mark"/>

          <Input title="Modelo" width={416} placeholder="Modelo feito pela fabricante" value="Any_Model"/>

          <Input title="Ano" width={416} placeholder="Ano da embarcação" value="Any_Year"/>

          <Input title="Comprimento" width={416} placeholder="Comprimento da embarcação" value="Any_Large"/>

          <Button title="Salvar" width={140}/>
        </Form>
      </Content>
    </Container>
  )
}

