import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  parseISO, format, addDays, isBefore,
} from 'date-fns';

import { HeaderMain } from '../../../../../components/headers/main';

import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg';
import { Input } from '../../../../../components/inputs/main';
import { Button } from '../../../../../components/buttons/main';

import api from '../../../../../services/api';
import { history } from '../../../../../services/history';

export function SchedulesEdit(props) {
  const [proprietario, setProprietario] = useState('');
  const [vessel, setVessel] = useState('');

  const [comments, setComments] = useState('');
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');

  const [minDayValid, setMinDayValid] = useState('');

  async function handleSaveData() {
    let time = '';

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
      await api.put(`/schedules/${props.match.params.id}`, {
        comments,
        time: format(time, "yyyy-MM-dd'T'HH:mm:ss.SSS"),
      });
      history.push('/schedules/infos');
      toast.success(`${proprietario} tem agendamento para o dia ${day}.`);
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  async function loadData() {
    try {
      const { data } = await api.get(`/schedules/${props.match.params.id}`);
      setVessel(data.vessel.name);
      setProprietario(data.vessel.proprietario);

      setComments(data.comments);
      const { time } = data;
      console.log(time);
      setDay(format(parseISO(time), 'yyyy-MM-dd'));
      setHour(format(parseISO(time), 'HH:mm'));
    } catch (error) {
      console.log(error.response);
      toast.error(`${error.response.data.error}`);
    }
  }

  useEffect(() => {
    loadData();
    setMinDayValid(format(addDays(new Date(), 2), 'yyyy-MM-dd'));
  }, []);
  return (
    <Container>
      <HeaderMain title="Edite o Agendamento" />

      <Content>
        <img src={NewSvg} alt="Form" />

        <Form>
          <h4>Revise os campos</h4>

          <Input
            title="Proprietario"
            width={416}
            value={proprietario}
            disabled
          />

          <Input
            title="Embarcação"
            width={416}
            value={vessel}
            disabled
          />

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
