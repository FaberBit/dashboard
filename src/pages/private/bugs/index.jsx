import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { HeaderMain } from '../../../components/headers/main';

import { Container, Content, Form } from './styles';

import BugSvg from '../../../assets/img/banners/bug.svg';
import { Button } from '../../../components/buttons/main';
import { TextArea } from '../../../components/inputs/textarea';

import api from '../../../services/api';
import history from '../../../services/history';

export function ReportBugs() {
  const [message, setMessage] = useState('');

  async function handleSaveData() {
    if (!message) {
      return toast.error('Conte-nos sobre o bug.');
    }

    try {
      await api.post('/encounter/bug', {
        message,
      });
      history.push('/');
      toast.success('Iremos solucionar o quanto antes.');
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }
  return (
    <Container>
      <HeaderMain title="Reporte algum bug" />

      <Content>
        <img src={BugSvg} alt="Bug" />

        <Form>
          <h4>Informe o bug</h4>

          <TextArea
            width={288}
            height={262}
            placeholder="Detalhe ao máximo o bug, para que possamos resolvê-lo o quanto antes."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button title="Enviar" width={140} onClick={() => handleSaveData()} />
        </Form>

      </Content>
    </Container>
  );
}
