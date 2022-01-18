import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { HeaderMain } from '../../../../../components/headers/main';

import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg';
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';
import { Select } from '../../../../../components/inputs/select';

import api from '../../../../../services/api';
import { history } from '../../../../../services/history';

export function ReviewsNew() {
  const [clients, setClients] = useState([]);
  const [clientSelected, setClientSelected] = useState('');

  const [vessels, setVessels] = useState([]);
  const [vesselSelected, setVesselSelected] = useState('');

  const [last, setLast] = useState('');
  const [firm, setFirm] = useState('');
  const [expert, setExpert] = useState('');
  const [engineHour, setEngineHour] = useState('');
  const [nextReview, setNextReview] = useState('');
  const [nextReviewByMonth, setNextReviewByMonth] = useState('');

  async function handleSaveData() {
    let client = {};
    let vessel = {};
    try {
      client = JSON.parse(clientSelected);

      if (!client.id) {
        return toast.error('Escolha o cliente dono da embarcação.');
      }
    } catch (error) {
      return toast.error('Escolha o cliente dono da embarcação.');
    }

    try {
      vessel = JSON.parse(vesselSelected);

      if (!vessel.id) {
        return toast.error('Escolha o cliente dono da embarcação.');
      }
    } catch (error) {
      return toast.error('Escolha o cliente dono da embarcação.');
    }

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
      await api.post('/reviews', {
        vesselId: vessel.id,
        last,
        engineHour,
        firm,
        nextReview,
        nextReviewByMonth,
        expert,
      });
      history.push('/reviews/infos');
      toast.success(`${vessel.name} foi revisado.`);
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  async function loadVessels() {
    let client = {};
    try {
      client = JSON.parse(clientSelected);

      if (!client.id) {
        return;
      }
    } catch (error) {
      return;
    }

    try {
      const response = await api.get(`/users/${client.id}/vessels/all`);
      setVessels(response.data);
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  useEffect(() => {
    loadVessels();
  }, [clientSelected]);

  useEffect(() => {
    loadVessels();
  }, [clientSelected]);

  async function loadClients() {
    try {
      const response = await api.get('/users/clients');
      setClients(response.data);
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <Container>
      <HeaderMain title="Crie uma nova Revisão" />

      <Content>
        <img src={NewSvg} alt="Form" />

        <Form>
          <h4>Preencha os campos</h4>

          <Select
            title="Proprietário"
            width={416}
            messageFirst="Dono da embarcação"
            data={clients}
            select={clientSelected}
            setClientSelected={setClientSelected}
          />

          {
           !vessels.length ? (
             <Input
               title="Embarcação"
               width={416}
               placeholder={clientSelected.length > 6 ? 'O Cliente não tem embarcações' : 'Escolha um cliente'}
               value=""
               onChange={() => {}}
             />
           ) : (
             <Select
               title="Embarcação"
               width={416}
               messageFirst="Embacação do cliente"
               data={vessels}
               select={vesselSelected}
               setClientSelected={setVesselSelected}
             />
           )
         }

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
