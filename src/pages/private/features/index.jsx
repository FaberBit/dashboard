import React from "react";

import { useUser } from "../../../hooks/useUser";

import { Container, Content, Form, InputImage, NotificationsList } from "./styles";

import { HeaderMain } from "../../../components/headers/main";
import { Input } from "../../../components/inputs/main";
import { Button } from "../../../components/buttons/main";
import { TextBar } from "../../../components/box/textBar";

export function Features() {
  const { host, user } = useUser();
  return (
    <Container>
      <HeaderMain title='Novas Funcionalidades' />

      <Content>
        <NotificationsList>
          <TextBar title="Novo cadastro do usuario" span="Clientes" colorSpan="#4CD42B"/>
          <TextBar title="Novo cadastro do usuario" span="Clientes" colorSpan="#17A9F8"/>
          <TextBar title="Novo cadastro do usuario" span="Clientes" colorSpan="#4CD42B"/>
          <TextBar title="Novo cadastro do usuario" span="Clientes" colorSpan="#4CD42B"/>
          <TextBar title="Novo cadastro do usuario" span="Clientes" colorSpan="#4CD42B"/>
        </NotificationsList>

        <Form>
          <h4>Editar suas informações</h4>

          <InputImage>
            <img src={`${host}/files/${user.avatar}`} alt='Your Avatar' />
            <input type='file' name='file' id='file' class='inputfile' />
          </InputImage>

          <Input title="Nome da empresa *" width={416} placeholder="Nome fantasia"/>

          <Input title="Senha Antiga" width={416} placeholder="Sua senha"/>

          <Input title="Nova senha" width={416} placeholder="Uma nova senha segura"/>

          <Button title="Salvar" width={140}/>
        </Form>        
      </Content>
    </Container>
  );
}
