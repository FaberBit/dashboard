import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { HeaderMain } from '../../../../../components/headers/main';

import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg';
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

import api from '../../../../../services/api';
import { history } from '../../../../../services/history';

export function EmployeeEdit(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  async function handleSaveData() {
    if (!name || !email || !phone) {
      return toast.error('Preencha todos os campos.');
    }

    try {
      const response = await api.put(`/users/${props.match.params.id}`, {
        name,
        email,
        phone,
      });
      history.push('/employee/infos');
      toast.success(`Os dados de ${response.data.name} foram modificados.`);
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  async function loadData() {
    try {
      const { data } = await api.get(`/users/${props.match.params.id}`);

      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <HeaderMain title="Edite o Funcionario" />

      <Content>
        <img src={NewSvg} alt="Form" />

        <Form>
          <h4>Revise os campos</h4>

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
