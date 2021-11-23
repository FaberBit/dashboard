import React from 'react';

import { HeaderMain } from '../../../components/headers/main'


import { Container, Content, NotificationsList } from './styles';

import NotifySvg from '../../../assets/img/banners/notify.svg'
import { TextBar } from '../../../components/box/textBar';

export function Notifications() {
  return (
    <Container>
      <HeaderMain title="Minhas notificações"/>

      <Content>
        <img src={NotifySvg} alt="Search" />

        <NotificationsList>
          <TextBar title="Novo cadastro do usuario" span="Clientes" colorSpan="#4CD42B"/>
          <TextBar title="Novo cadastro do usuario" span="Clientes" colorSpan="#17A9F8"/>
          <TextBar title="Novo cadastro do usuario" span="Clientes" colorSpan="#4CD42B"/>
          <TextBar title="Novo cadastro do usuario" span="Clientes" colorSpan="#4CD42B"/>
          <TextBar title="Novo cadastro do usuario" span="Clientes" colorSpan="#4CD42B"/>
        </NotificationsList>
      </Content>
    </Container>
  )
}

