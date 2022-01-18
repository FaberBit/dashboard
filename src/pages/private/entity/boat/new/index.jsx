import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { HeaderMain } from '../../../../../components/headers/main';

import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg';
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

import api from '../../../../../services/api';
import { history } from '../../../../../services/history';
import { Select } from '../../../../../components/inputs/select';

export function FormNew() {
  const [clients, setClients] = useState([]);
  const [clientSelected, setClientSelected] = useState('');

  const [name, setName] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [comprimentototal, setComprimentototal] = useState('');
  const [motor, setMotor] = useState('');
  const [combustivel, setCombustivel] = useState('');

  async function handleSaveData() {
    let client = {};
    try {
      client = JSON.parse(clientSelected);

      if (!client.id) {
        return toast.error('Escolha o cliente dono da embarcação.');
      }
    } catch (error) {
      return toast.error('Escolha o cliente dono da embarcação.');
    }

    if (
      !name
       || !marca
       || !ano
       || !comprimentototal
       || !motor
       || !combustivel
    ) {
      return toast.error('Preencha todos os campos.');
    }

    try {
      const response = await api.post('/vessels', {
        userId: client.id,
        jetski: false,
        name,
        proprietario: client.name,
        marca,
        modelo,
        ano,
        comprimentototal,
        motor,
        combustivel,
      });
      history.push('/boat/infos');
      toast.success(`${response.data.name} agora é uma lancha sobre os cuidados da EnosNautica.`);
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  async function loadClients() {
    try {
      const response = await api.get('/users/clients');
      setClients(response.data);
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <Container>
      <HeaderMain title="Crie uma Lancha" />

      <Content>
        <img src={NewSvg} alt="Form" />

        <Form>
          <h4>Preencha os campos</h4>

          <Input
            title="Nome*"
            width={416}
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Select
            title="Proprietário"
            width={416}
            messageFirst="Dono da embarcação"
            data={clients}
            select={clientSelected}
            setClientSelected={setClientSelected}
          />

          <Input
            title="Marca"
            width={416}
            placeholder="Marca do fabricante"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />

          <Input
            title="Modelo"
            width={416}
            placeholder="Modelo feito pela fabricante"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />

          <Input
            title="Ano"
            width={416}
            placeholder="Ano da embarcação"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />

          <Input
            title="Comprimento"
            width={416}
            placeholder="Comprimento da embarcação"
            value={comprimentototal}
            onChange={(e) => setComprimentototal(e.target.value)}
          />

          <Input
            title="Motor"
            width={416}
            placeholder="Motor da embarcação"
            value={motor}
            onChange={(e) => setMotor(e.target.value)}
          />

          <Input
            title="Combustivel"
            width={416}
            placeholder="Combustivel da embarcação"
            value={combustivel}
            onChange={(e) => setCombustivel(e.target.value)}
          />

          <Button title="Salvar" width={140} onClick={() => handleSaveData()} />
        </Form>
      </Content>
    </Container>
  );
}
