import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import {
  parseISO, format, addDays, isBefore,
} from 'date-fns';
import { HeaderMain } from '../../../../../components/headers/main';

import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg';
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';
import { Select } from '../../../../../components/inputs/select';

import api from '../../../../../services/api';
import { history } from '../../../../../services/history';

export function SchedulesNew() {
  const [clients, setClients] = useState([]);
  const [clientSelected, setClientSelected] = useState('');

  const [vessels, setVessels] = useState([]);
  const [vesselSelected, setVesselSelected] = useState('');

  const [comments, setComments] = useState('');
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');

  const [minDayValid, setMinDayValid] = useState('');

  async function handleSaveData() {
    let client = {};
    let vessel = {};
    let time = '';
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
      !comments
       || !day
       || !hour
    ) {
      return toast.error('Preencha todos os campos.');
    }

    try {
      time = parseISO(`${day}T${hour}`);
    } catch (error) {
      console.log(error);
    }

    console.log(minDayValid, day);
    if (isBefore(minDayValid, parseISO(day))) {
      return toast.error('Escolha uma data com pelo menos 2 dias de antecedencia.');
    }

    try {
      await api.post(`/vessels/${vessel.id}/schedules`, {
        comments,
        time: format(time, "yyyy-MM-dd'T'HH:mm:ss.SSS"),
      });
      history.push('/schedules/infos');
      toast.success(`${client.name} tem novo agendamento para o dia ${day}.`);
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
    setMinDayValid(format(addDays(new Date(), 2), 'yyyy-MM-dd'));
  }, []);

  return (
    <Container>
      <HeaderMain title="Crie um agendamento" />

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
            title="Descrição"
            width={416}
            placeholder="Observações do agendamento"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />

          <Input
            title="Data"
            width={416}
            placeholder="Dia do agendamento"
            type="date"
            value={day}
            min={minDayValid}
            onChange={(e) => setDay(e.target.value)}
          />

          <Input
            title="Hora"
            width={416}
            type="time"
            placeholder="Horario do agendamento"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />

          <Button title="Salvar" width={140} onClick={() => handleSaveData()} />
        </Form>
      </Content>
    </Container>
  );
}
