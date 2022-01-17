import React from 'react';

import {
  Container, Content, Form, NotificationsList,
} from './styles';

import { HeaderMain } from '../../../components/headers/main';
import { Input } from '../../../components/inputs/main';
import { Button } from '../../../components/buttons/main';
import { TextBar } from '../../../components/box/textBar';
import { TextArea } from '../../../components/inputs/textarea';

export function Features() {
  return (
    <Container>
      <HeaderMain title="Novas Funcionalidades" />

      <Content>
        <NotificationsList>
          <TextBar title="Pagina para Classificados" span="Em analise" colorSpan="#FFD43B" />
          <TextBar title="Scroll na pagina home" span="Em produção" colorSpan="#17A9F8" />
          <TextBar title="Novo cadastro do usuario" span="Concluido" colorSpan="#4CD42B" />
          <TextBar title="Novo cadastro do usuario" span="Concluido" colorSpan="#4CD42B" />
          <TextBar title="Novo cadastro do usuario" span="Concluido" colorSpan="#4CD42B" />
        </NotificationsList>

        <Form>
          <h4>Peça uma nova funcionalidade</h4>
          <span className="subtitle">conte-nos sua ideia</span>

          <Input title="Título" width={230} placeholder="Escolha um título" />

          <TextArea title="Descrição" width={230} placeholder="Descreva sua ideia de forma clara." />

          <Button title="Enviar" width={230} />
        </Form>
      </Content>
    </Container>
  );
}
