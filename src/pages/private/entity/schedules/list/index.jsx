import React, { useState, useEffect } from 'react';
import { FiEdit2, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { format, parseISO } from 'date-fns';

import { HeaderMain } from '../../../../../components/headers/main';
import { api } from '../../../../../services/api';
import {
  ButtonsPages, Container, Content, HeaderContent, ItemInfo,
} from './styles';

export function SchedulesList() {
  const [schedules, setSchedules] = useState('');
  const [page, setPage] = useState(1);

  async function loadSchedules() {
    try {
      const { data } = await api.get(`/encounter/sdl?index=6&page=${page}`);
      setSchedules(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadSchedules();
  }, [, page]);

  return (
    <Container>
      <HeaderMain title="Agendamentos" />

      <Content>
        <HeaderContent>
          <strong>Cliente</strong>
          <strong>Embarcação</strong>
          <strong>Observações</strong>
          <strong>Data do agendamento</strong>
          <strong>Opções</strong>
        </HeaderContent>
        {
          schedules.length > 0 ? (
            <>
              {
                schedules.map((schedule) => (
                  <ItemInfo key={schedule.id}>
                    <strong>{schedule.user.name}</strong>
                    <strong>{schedule.vessel.name}</strong>
                    <strong className="schedulesDescription">{schedule.comments}</strong>
                    <strong>{format(parseISO(schedule.time), 'dd/MM/yyyy')}</strong>
                    <div className="actionsButton">
                      <a href="/schedules/edit">
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
