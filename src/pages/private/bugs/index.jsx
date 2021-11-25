import React from "react";
import { BiCamera } from "react-icons/bi";

import { HeaderMain } from "../../../components/headers/main";

import { Container, Content, Form, InputImage } from "./styles";

import BugSvg from "../../../assets/img/banners/bug.svg";
import { useUser } from "../../../hooks/useUser";
import colors from "../../../styles/colors";
import { Input } from "../../../components/inputs/main";
import { Button } from "../../../components/buttons/main";

export function ReportBugs() {
  const { host, user } = useUser();
  return (
    <Container>
      <HeaderMain title='Reporte algum bug' />

      <Content>
        <img src={BugSvg} alt='Bug' />

        <Form>
          <h4>Editar suas informações</h4>

          <InputImage>
            <img src={`${host}/files/${user.avatar}`} alt='Your Avatar' />
            <input type='file' name='file' id='file' class='inputfile' />
            <label for='file'>
              <BiCamera color={colors.primary} size={24} />
            </label>
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
