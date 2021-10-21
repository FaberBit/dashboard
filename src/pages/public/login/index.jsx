import React from 'react'
import { IoLogInOutline } from "react-icons/io5";

import { Container, Form, FormInput, InfoDashboardBanner, FormSubmitButton, FormHeader, FormContent, Header, Content } from './styles'

import BannerLogin from '../../../assets/img/banners/bannerLoginA.png'
import LogoOfficial from '../../../assets/img/logos/official.png'

import { Input } from '../../../components/inputs/simples';

export function Login() {
  return (
    <Container>
      <Header>
        <img src={LogoOfficial} alt="Logo" className="logo"/>
      </Header>
      
      <Content>
        <InfoDashboardBanner>
          <h2>Fabricando o melhor codigo para sua aplicação.</h2>
          <div>
            <img src={BannerLogin} alt="Banner Faber Bit" />
          </div>
        </InfoDashboardBanner>

        <Form>
          <FormHeader>
            <IoLogInOutline color="#162D1E" size={40}/>
          </FormHeader>

          <FormContent>
            <h3>Informe seus dados</h3>
            <span>para se logar</span>

            <FormInput>
              <Input placeholder="Seu e-mail"/>
            </FormInput>

            <FormInput>
              <Input placeholder="Sua senha"/>
            </FormInput>

            <FormSubmitButton>
              <span>Entrar</span>
            </FormSubmitButton>
          </FormContent>
        </Form>
      </Content>
    </Container>
  )
}

