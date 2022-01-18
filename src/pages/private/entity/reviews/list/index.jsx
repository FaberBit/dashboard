import React, { useState, useEffect } from 'react';
import { FiEdit2, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { HeaderMain } from '../../../../../components/headers/main';
import { api } from '../../../../../services/api';
import {
  ButtonsPages, Container, Content, HeaderContent, ItemInfo,
} from './styles';

export function ReviewsList() {
  const [reviews, setReviews] = useState('');
  const [page, setPage] = useState(1);

  async function loadReviews() {
    try {
      const { data } = await api.get(`/encounter/rvw?index=6&page=${page}`);
      setReviews(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadReviews();
  }, [, page]);

  return (
    <Container>
      <HeaderMain title="Revisões" />

      <Content>
        <HeaderContent>
          <strong>Embarcação</strong>
          <strong>Empresa de Revisão</strong>
          <strong>Profissional</strong>
          <strong>Realizada em</strong>
          <strong>Opções</strong>
        </HeaderContent>
        {
          reviews.length > 0 ? (
            <>
              {
                reviews.map((review) => (
                  <ItemInfo key={review.id}>
                    <strong>{review.vessel.name}</strong>
                    <strong>{review.firm}</strong>
                    <strong>{review.expert}</strong>
                    <strong>{review.createdAt}</strong>
                    <div className="actionsButton">
                      <a href={`/reviews/edit/${review.id}`}>
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
