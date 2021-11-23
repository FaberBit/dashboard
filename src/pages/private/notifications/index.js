import React from 'react';

import { HeaderMain } from '../../../components/headers/main'


import { Container, Content } from './styles';

import NotifySvg from '../../../assets/img/banners/notify.svg'

export function Notifications() {
  return (
    <Container>
      <HeaderMain title="Minhas notificações"/>

      <Content>
        <img src={NotifySvg} alt="Search" />
      </Content>
    </Container>
  )
}

