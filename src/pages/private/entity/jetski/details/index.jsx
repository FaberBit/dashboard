import React, { useState, useEffect } from 'react';
import { FiEdit2, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { HeaderMain } from '../../../../../components/headers/main';
import { api } from '../../../../../services/api';
import {
  ButtonsPages, Container, Content, HeaderContent, ItemInfo,
} from './styles';

export function JetskiDetails() {
  const [vessels, setVessels] = useState('');
  const [page, setPage] = useState(1);

  async function loadVessels() {
    try {
      const { data } = await api.get(`/encounter/vsl/jetski?index=6&page=${page}`);
      setVessels(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadVessels();
  }, [, page]);

  return (
    <Container>
      <HeaderMain title="Jetski" />

      <Content>
        <HeaderContent>
          <strong>Nome da embarcação</strong>
          <strong>Proprietário</strong>
          <strong>Marca</strong>
          <strong>Modelo</strong>
          <strong>Data de criação</strong>
          <strong>Opções</strong>
        </HeaderContent>

        {
          vessels.length > 0 ? (
            <>
              {
                vessels.map((vessel) => (
                  <ItemInfo key={vessel.id}>
                    <strong>{vessel.name}</strong>
                    <strong>{vessel.proprietario}</strong>
                    <strong>{vessel.marca}</strong>
                    <strong>{vessel.modelo}</strong>
                    <strong>{vessel.createdAt}</strong>
                    <div className="actionsButton">
                      <a href="/boat/edit">
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
