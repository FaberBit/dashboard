import React from 'react';

import { HeaderMain } from '../../../components/headers/main';

import { Container, Content, Form } from './styles';

import BugSvg from '../../../assets/img/banners/bug.svg';
import { Button } from '../../../components/buttons/main';
import { TextArea } from '../../../components/inputs/textarea';

export function ReportBugs() {
  return (
    <Container>
      <HeaderMain title="Reporte algum bug" />

      <Content>
        <img src={BugSvg} alt="Bug" />

        <Form>
          <h4>Informe o bug</h4>

          <TextArea width={288} height={262} placeholder="Detalhe ao máximo o bug, para que possamos resolvê-lo o quanto antes." />

          <Button title="Enviar" width={140} />
        </Form>

      </Content>
    </Container>
  );
}
