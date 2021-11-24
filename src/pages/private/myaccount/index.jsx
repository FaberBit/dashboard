import React from "react";
import { BiCamera } from "react-icons/bi";

import { HeaderMain } from "../../../components/headers/main";

import { Container, Content, Form, InputImage } from "./styles";

import ProfileSvg from "../../../assets/img/banners/profile.svg";
import { useUser } from "../../../hooks/useUser";
import colors from "../../../styles/colors";

export function MyAccount() {
  const { host, user } = useUser();
  return (
    <Container>
      <HeaderMain title='Atualizar sua conta' />

      <Content>
        <Form>
          <h4>Editar suas informações</h4>

          <InputImage>
            <img src={`${host}/files/${user.avatar}`} alt='Your Avatar' />
            <input type='file' name='file' id='file' class='inputfile' />
            <label for='file'>
              <BiCamera color={colors.primary} size={24} />
            </label>
          </InputImage>
        </Form>

        <img src={ProfileSvg} alt='Search' />
      </Content>
    </Container>
  );
}
