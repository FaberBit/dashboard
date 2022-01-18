import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { HeaderMain } from '../../../../../components/headers/main';

import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg';
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

import api from '../../../../../services/api';
import { history } from '../../../../../services/history';

export function FormEdit(props) {
  const [proprietario, setProprietario] = useState('');

  const [name, setName] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [comprimentototal, setComprimentototal] = useState('');

  async function handleSaveData() {
    if (
      !name
       || !marca
       || !modelo
       || !ano
       || !comprimentototal
    ) {
      return toast.error('Preencha todos os campos.');
    }

    try {
      const response = await api.put(`/vessels/${props.match.params.id}`, {
        name,
        marca,
        modelo,
        ano,
        comprimentototal,
      });
      history.push('/boat/infos');
      toast.success(`${response.data.name} foi atualizado  com sucesso.`);
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  async function loadData() {
    try {
      const { data } = await api.get(`/vessels/${props.match.params.id}`);

      setName(data.name);
      setProprietario(data.proprietario);
      setMarca(data.marca);
      setModelo(data.modelo);
      setAno(data.ano);
      setComprimentototal(data.comprimentototal);
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
      <HeaderMain title="Edite sua Lancha" />

      <Content>
        <img src={NewSvg} alt="Form" />

        <Form>
          <h4>Revise os campos</h4>

          <Input
            title="Nome*"
            width={416}
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            title="Proprietário"
            width={416}
            value={proprietario}
            disabled
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
          <Button title="Salvar" width={140} onClick={() => handleSaveData()} />
        </Form>
      </Content>
    </Container>
  );
}
