import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { HeaderMain } from '../../../../../components/headers/main';

import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg';
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

import api from '../../../../../services/api';
import { history } from '../../../../../services/history';

export function EmployeeNew() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  async function handleSaveData() {
    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
        phone,
        employee: true,
      });
      history.push('/employee/infos');
      toast.success(`${response.data.name} agora é um funcionario(a) da Enos.`);
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  return (
    <Container>
      <HeaderMain title="Crie um Funcionario" />

      <Content>
        <img src={NewSvg} alt="Form" />

        <Form>
          <h4>Preencha os campos</h4>

          <Input
            title="Nome"
            width={316}
            placeholder="Nome do cliente"
            value={name}
            onChange={(e) => { setName(e.target.value); }}
          />

          <Input
            title="Email"
            width={316}
            placeholder="E-mail mais utilizado pelo cliente"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
          />

          <Input
            title="Senha"
            width={316}
            placeholder="Uma senha segura para o cliente"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
          />

          <Input
            title="Telefone"
            width={316}
            placeholder="Telefone para contato do cliente"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); }}
          />

          <Button title="Salvar" width={140} onClick={() => handleSaveData()} />
        </Form>
      </Content>
    </Container>
  );
}
