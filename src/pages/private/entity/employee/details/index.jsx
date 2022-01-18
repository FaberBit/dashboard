import React, { useState, useEffect } from 'react';
import { FiEdit2, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { HeaderMain } from '../../../../../components/headers/main';
import { api } from '../../../../../services/api';
import {
  ButtonsPages, Container, Content, HeaderContent, ItemInfo,
} from './styles';

export function EmployeeDetails() {
  const [users, setUsers] = useState('');
  const [page, setPage] = useState(1);

  async function loadUsers() {
    try {
      const { data } = await api.get(`/encounter/usr/employee?index=6&page=${page}`);
      setUsers(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadUsers();
  }, [, page]);

  return (
    <Container>
      <HeaderMain title="Funcionarios" />

      <Content>
        <HeaderContent>
          <strong>Nome</strong>
          <strong>Email</strong>
          <strong>Telefone</strong>
          <strong>Adicionado em</strong>
          <strong>Opções</strong>
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
                    <strong>20/11/2021</strong>
                    <div className="actionsButton">
                      <a href={`/employee/edit/${user.id}`}>
                        <FiEdit2 color="#000" size={22} />
                      </a>
                      <button type="submit">
                        <RiDeleteBin6Line color="#000" size={22} />
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
