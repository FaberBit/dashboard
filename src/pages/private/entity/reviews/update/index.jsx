import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { HeaderMain } from '../../../../../components/headers/main';

import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg';
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

import api from '../../../../../services/api';
import { history } from '../../../../../services/history';

export function ReviewsEdit(props) {
  const [last, setLast] = useState('');
  const [firm, setFirm] = useState('');
  const [expert, setExpert] = useState('');
  const [engineHour, setEngineHour] = useState('');
  const [nextReview, setNextReview] = useState('');
  const [nextReviewByMonth, setNextReviewByMonth] = useState('');

  async function handleSaveData() {
    if (
      !last
       || !firm
       || !expert
       || !engineHour
       || !nextReview
       || !nextReviewByMonth
    ) {
      return toast.error('Preencha todos os campos.');
    }

    try {
      await api.put(`/reviews/${props.match.params.id}`, {
        last,
        engineHour,
        firm,
        nextReview,
        nextReviewByMonth,
        expert,
      });
      history.push('/reviews/infos');
      toast.success('Revisão atualizada');
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  // function formatDate(date) {
  // }

  async function loadData() {
    try {
      const { data } = await api.get(`/review/${props.match.params.id}`);
      setLast(data.last.split('/').reverse().join('-'));
      setFirm(data.firm);
      setEngineHour(data.engineHour);
      setNextReview(data.nextReview);
      setNextReviewByMonth(data.nextReviewByMonth);
      setExpert(data.expert);
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Container>
      <HeaderMain title="Edite a Revisão" />

      <Content>
        <img src={NewSvg} alt="Form" />

        <Form>
          <h4>Revise os campos</h4>

          <Input
            title="Ultima revisão"
            width={416}
            type="date"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />

          <Input
            title="Empresa"
            width={416}
            placeholder="Empresa que realizou a revisão"
            value={firm}
            onChange={(e) => setFirm(e.target.value)}
          />

          <Input
            title="Profissional"
            width={416}
            placeholder="Profissional que realizou a revisão"
            value={expert}
            onChange={(e) => setExpert(e.target.value)}
          />

          <Input
            title="Hora/Motor"
            width={416}
            placeholder="Hora/Motor de quando a revisão foi realizada"
            value={engineHour}
            onChange={(e) => setEngineHour(e.target.value)}
          />

          <Input
            title="Proxima Revisão pelo Mês"
            width={416}
            placeholder="Data da proxima revisão pelo mês"
            value={nextReview}
            onChange={(e) => setNextReview(e.target.value)}
          />

          <Input
            title="Proxima Revisão pela Hora/Motor "
            width={416}
            placeholder="Data da proxima revisão por quilometragem"
            value={nextReviewByMonth}
            onChange={(e) => setNextReviewByMonth(e.target.value)}
          />

          <Button title="Salvar" width={140} onClick={() => handleSaveData()} />
        </Form>
      </Content>
    </Container>
  );
}
