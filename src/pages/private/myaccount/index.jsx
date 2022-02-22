/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import { BiCamera } from 'react-icons/bi';

import { toast } from 'react-toastify';
import { HeaderMain } from '../../../components/headers/main';

import {
  Container, Content, Form, InputImage,
} from './styles';

import ProfileSvg from '../../../assets/img/banners/profile.svg';
import { useUser } from '../../../hooks/useUser';
import colors from '../../../styles/colors';
import { Input } from '../../../components/inputs/main';
import { Button } from '../../../components/buttons/main';

import api from '../../../services/api';
import { history } from '../../../services/history';

export function MyAccount() {
  const { host, user } = useUser();

  const [name, setName] = useState('');

  async function handleSaveData() {
    if (!name) {
      return toast.error('Você precisa de um nome!');
    }

    try {
      const response = await api.put(`/users/${user.id}`, {
        name,
      });
      localStorage.setItem('@FaberBit/user', JSON.stringify(response.data));
      history.push('/');
      window.location.reload();
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  useEffect(() => {
    setName(user.name);
  }, [user]);

  return (
    <Container>
      <HeaderMain title="Atualizar sua conta" />

      <Content>
        <Form>
          <h4>Editar suas informações</h4>

          <InputImage>
            <img src={`${host}/files/${user.avatar}`} alt="Your Avatar" />
            <input type="file" name="file" id="file" className="inputfile" />
            <label htmlFor="file">
              <BiCamera color={colors.primary} size={24} />
            </label>
          </InputImage>

          <Input
            title="Nome da empresa *"
            width={416}
            placeholder="Nome fantasia"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* <Input
            title="Senha Antiga"
            width={416}
            placeholder="Sua senha"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}

          {/* <Input
            title="Nova senha"
            width={416}
            placeholder="Uma nova senha segura"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}
          <br />
          <Button title="Salvar" width={140} onClick={() => handleSaveData()} />
        </Form>

        <img src={ProfileSvg} alt="Search" />
      </Content>
    </Container>
  );
}
