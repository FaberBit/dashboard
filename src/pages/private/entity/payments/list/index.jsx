import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { BiCheck, BiX } from 'react-icons/bi';

import { HeaderMain } from '../../../../../components/headers/main';
import { api } from '../../../../../services/api';
import {
  ButtonsPages, Container, Content, HeaderContent, ItemInfo,
} from './styles';

export function ClientPaymentsList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  async function loadUsers() {
    try {
      const { data } = await api.get(`/encounter/usr?index=6&page=${page}`);
      setUsers(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadUsers();
  }, [, page]);

  async function changeStatus(user) {
    try {
      await api.put(`/users/${user.id}/payment`);
      loadUsers();
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <Container>
      <HeaderMain title="Clientes" />

      <Content>
        <HeaderContent>
          <strong>Nome</strong>
          <strong>Email</strong>
          <strong>Telefone</strong>
          <strong>Status</strong>
          <strong>Ações</strong>
        </HeaderContent>

        {
          users.length > 0 ? (
            <>
              {
                users.map((user) => (
                  <ItemInfo key={user.id}>
                    <strong>{user.name}</strong>
                    <strong>{user.email}</strong>
                    <strong>{user.phone}</strong>
                    <span className={user.payment ? 'activePay' : 'noActivePay'}>{user.payment ? 'Realizado' : 'Não realizado'}</span>
                    <div className="actionsButton">
                      <button
                        type="submit"
                        onClick={() => changeStatus(user)}
                        className="xPay"
                      >
                        <BiX color="#000" size={22} />
                      </button>
                      <button
                        type="submit"
                        onClick={() => changeStatus(user)}
                      >
                        <BiCheck color="#000" size={22} />
                      </button>
                    </div>
                  </ItemInfo>
                ))
              }
              <ButtonsPages>
                <button
                  type="submit"
                  onClick={() => {
                    if (page > 1) {
                      return setPage(page - 1);
                    }
                  }}
                >
                  <FiArrowLeft size={20} />
                </button>

                <span>{page}</span>

                <button type="submit" onClick={() => setPage(page + 1)}>
                  <FiArrowRight size={20} />
                </button>
              </ButtonsPages>
            </>
          ) : null
        }
      </Content>
    </Container>
  );
}
