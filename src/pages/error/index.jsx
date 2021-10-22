import React from 'react'
import { IoLogInOutline } from "react-icons/io5";

import { Container, Title, ImageError, Button } from './styles'

import BannerStars from '../../assets/img/banners/stars.svg'
import { useUser } from '../../hooks/useUser';

// import { toast } from 'react-toastify';

export function ErrorNotFound() {
  const {LogoutSession} = useUser()
  return (
    <Container>
      <Title>Página não encontrada</Title>
      <ImageError background={BannerStars}>
        <span>404</span>
      </ImageError>

      <Button onClick={() => LogoutSession()}>
        <span>Voltar para o site</span>
        <IoLogInOutline size={24}/>
      </Button>
    </Container>
  )
}

