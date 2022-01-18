import React, { useState, useEffect } from 'react';

import {
  Container, Content, Form, NotificationsList,
} from './styles';

import { HeaderMain } from '../../../components/headers/main';
import { Input } from '../../../components/inputs/main';
import { Button } from '../../../components/buttons/main';
import { TextBar } from '../../../components/box/textBar';
import { TextArea } from '../../../components/inputs/textarea';

import api from '../../../services/api';

export function Features() {
  const [features, setFeatures] = useState([]);

  async function loadFeatures() {
    try {
      const { data } = await api.get('/encounter/feat?index=5&page=1');
      setFeatures(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadFeatures();
  }, []);
  return (
    <Container>
      <HeaderMain title="Novas Funcionalidades" />

      <Content>
        <NotificationsList>
          {
            features.length ? (
              features.map((feature) => (
                <TextBar
                  key={feature.id}
                  title={feature.title}
                  span={feature.status}
                  colorSpan={feature.statusColor}
                />
              ))
            ) : null
          }
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
