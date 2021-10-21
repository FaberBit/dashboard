import React, { useState } from 'react'
import { IoLogInOutline } from "react-icons/io5";

import { Container, Form, FormInput, InfoDashboardBanner, FormSubmitButton, FormHeader, FormContent, Header, Content } from './styles'

import BannerLogin from '../../../assets/img/banners/bannerLoginA.png'
import LogoOfficial from '../../../assets/img/logos/official.png'

import { Input } from '../../../components/inputs/simples';

import { useUser } from '../../../hooks/useUser'
import { toast } from 'react-toastify';

export function Login() {
  const { handleSession } = useUser()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin(){
    if(!email || !password){
      return toast.warn("Preencha todos os campos.")
    }

    if(password.length < 6){
      return toast.warn("Sua senha deve ter pelo menos 6 digitos.")
    }

    handleSession({ email, password })
  }

  return (
    <Container>
      <Header>
        <img src={LogoOfficial} alt="Logo" className="logo" />
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
            <IoLogInOutline color="#162D1E" size={40} />
          </FormHeader>

          <FormContent>
            <h3>Informe seus dados</h3>
            <span>para se logar</span>

            <FormInput>
              <Input placeholder="Seu e-mail" type="e-mail" onChange={(e) => setEmail(e.target.value)}/>
            </FormInput>

            <FormInput>
              <Input placeholder="Sua senha" type="password" onChange={(e) => setPassword(e.target.value)}/>
            </FormInput>

            <FormSubmitButton onClick={() => handleLogin()}>
              <span>Entrar</span>
            </FormSubmitButton>
          </FormContent>
        </Form>
      </Content>
    </Container>
  )
}

