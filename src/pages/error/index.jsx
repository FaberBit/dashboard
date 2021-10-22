import React from 'react'
import { IoLogInOutline } from "react-icons/io5";

import { Container, Title, ImageError, Button } from './styles'

import BannerStars from '../../assets/img/banners/stars.svg'

// import { toast } from 'react-toastify';

export function ErrorNotFound() {
  return (
    <Container>
      <Title>Página não encontrada</Title>
      <ImageError background={BannerStars}>
        <span>404</span>
      </ImageError>

      <Button>
        <span>Voltar para o site</span>
        <IoLogInOutline size={24}/>
      </Button>
    </Container>
  )
}

