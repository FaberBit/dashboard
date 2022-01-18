import React, { useState, useEffect } from 'react';

import { HeaderMain } from '../../../components/headers/main';

import { Container, Content, NotificationsList } from './styles';

import NotifySvg from '../../../assets/img/banners/notify.svg';
import { TextBar } from '../../../components/box/textBar';
import api from '../../../services/api';

export function Notifications() {
  const [notifications, setNotifications] = useState([]);

  async function loadNotifications() {
    try {
      const { data } = await api.get('/encounter/ntf?index=5&page=1');
      setNotifications(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadNotifications();
  }, []);
  return (
    <Container>
      <HeaderMain title="Minhas notificações" />

      <Content>
        <img src={NotifySvg} alt="Search" />

        <NotificationsList>
          {
            notifications.length ? (
              notifications.map((notification) => (
                <TextBar
                  key={notification.id}
                  title={notification.title}
                  span={notification.typeNotification}
                  colorSpan={notification.typeNotificationColor}
                />
              ))
            ) : null
          }
        </NotificationsList>
      </Content>
    </Container>
  );
}
