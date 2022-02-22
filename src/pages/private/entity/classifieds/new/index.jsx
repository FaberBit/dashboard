import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { HeaderMain } from '../../../../../components/headers/main';

import { Container, Content, Form } from './styles';

import NewSvg from '../../../../../assets/img/banners/new.svg';
import { Input } from '../../../../../components/inputs/main';
import { TextArea } from '../../../../../components/inputs/textarea';
import { Button } from '../../../../../components/buttons/main';
import { Select } from '../../../../../components/inputs/select';

import api from '../../../../../services/api';
import { history } from '../../../../../services/history';

export function ClassifiedsNew() {
  const [isBoat, setIsBoat] = useState(true);
  const [typeBoatSelected, setTypeBoatSelected] = useState('');
  const [onlyOwnerSelected, setOnlyOwnerSelected] = useState('');

  const [name, setName] = useState('');
  const [typeFuel, setTypeFuel] = useState('');
  const [project, setProject] = useState('');
  const [size, setSize] = useState('');
  const [year, setYear] = useState('');
  const [onlyOwner, setOnlyOwner] = useState(true);
  const [cabin, setCabin] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [engine, setEngine] = useState('');
  const [engineHour, setEngineHour] = useState('');
  const [reverser, setReverser] = useState('');
  const [fuelCapacity, setFuelCapacity] = useState('');
  const [waterCapacity, setWaterCapacity] = useState('');
  const [navigationInstruments, setNavigationInstruments] = useState('');
  const [winch, setWinch] = useState('');
  const [electronics, setElectronics] = useState('');
  const [peoplesCapacity, setPeoplesCapacity] = useState('');
  const [supportBoat, setSupportBoat] = useState('');
  const [gelState, setGelState] = useState('');
  const [upholsteredState, setUpholsteredState] = useState('');
  const [extras, setExtras] = useState('');

  const [jetConstructor, setJetConstructor] = useState('');
  const [model, setModel] = useState('');
  const [painelState, setPainelState] = useState('');

  async function handleSaveData() {
    if (isBoat) {
      if (
        !name
        || !typeFuel
        || !project
        || !size
        || !year
        || !onlyOwner
        || !cabin
        || !bathroom
        || !engine
        || !engineHour
        || !reverser
        || !fuelCapacity
        || !waterCapacity
        || !navigationInstruments
        || !winch
        || !electronics
        || !peoplesCapacity
        || !supportBoat
        || !gelState
        || !upholsteredState
        || !extras
      ) {
        return toast.error('Preencha todos os campos.');
      }

      try {
        await api.post('/classifieds/boat', {
          name,
          typeFuel,
          project,
          size,
          year,
          onlyOwner,
          cabin,
          bathroom,
          engine,
          engineHour,
          reverser,
          fuelCapacity,
          waterCapacity,
          navigationInstruments,
          winch,
          electronics,
          peoplesCapacity,
          supportBoat,
          gelState,
          upholsteredState,
          extras,
        });
        history.push('/');
        toast.success('Classificado criado com sucesso!');
      } catch (error) {
        console.log(error.response.data);
        toast.error('Algo deu errado tente novamente mais tarde.');
      }
    } else {
      if (
        !name
        || !typeFuel
        || !jetConstructor
        || !size
        || !year
        || !model
        || !engine
        || !engineHour
        || !peoplesCapacity
        || !fuelCapacity
        || !gelState
        || !upholsteredState
        || !painelState
        || !extras
      ) {
        return toast.error('Preencha todos os campos.');
      }

      try {
        await api.post('/classifieds/jetski', {
          name,
          typeFuel,
          jetConstructor,
          size,
          year,
          model,
          engine,
          engineHour,
          peoplesCapacity,
          fuelCapacity,
          gelState,
          upholsteredState,
          painelState,
          extras,
        });
        history.push('/');
        toast.success('Classificado criado com sucesso!');
      } catch (error) {
        console.log(error.response.data);
        toast.error('Algo deu errado tente novamente mais tarde.');
      }
    }
  }

  useEffect(() => {
    if (typeBoatSelected.length > 2 && JSON.parse(typeBoatSelected).id === 2) {
      setIsBoat(false);
    } else {
      setIsBoat(true);
    }
  }, [typeBoatSelected]);

  useEffect(() => {
    if (onlyOwnerSelected.length > 2 && JSON.parse(onlyOwnerSelected).id === 2) {
      setOnlyOwner(false);
    } else {
      setOnlyOwner(true);
    }
  }, [onlyOwnerSelected]);

  return (
    <Container>
      <HeaderMain title="Crie um Classificado" />

      <Content>
        <img src={NewSvg} alt="Form" />

        <Form style={!isBoat ? { height: '97rem' } : null}>
          <h4>Preencha os campos</h4>

          <Select
            title="Tipo de embarcação"
            width={416}
            messageFirst="Lanchas"
            data={[{ id: 2, name: 'Jetskis' }]}
            select={typeBoatSelected}
            setClientSelected={setTypeBoatSelected}
          />

          <Input
            title="Nome*"
            width={416}
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {
            isBoat ? (
              <>
                <Input
                  title="Projeto/Estaleiro*"
                  width={416}
                  placeholder="Projeto/Estaleiro"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                />

                <Input
                  title="Tipo de combustivel*"
                  width={416}
                  placeholder="Tipo de combustivel"
                  value={typeFuel}
                  onChange={(e) => setTypeFuel(e.target.value)}
                />

                <Input
                  title="Tamanho*"
                  width={416}
                  placeholder="Tamanho"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />

                <Input
                  title="Ano*"
                  width={416}
                  placeholder="Ano"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />

                <Select
                  title="Único dono*"
                  width={416}
                  messageFirst="Sim"
                  data={[{ id: 2, name: 'Não' }]}
                  select={onlyOwnerSelected}
                  setClientSelected={setOnlyOwnerSelected}
                />

                <Input
                  title="Cabine*"
                  width={416}
                  placeholder="Cabine"
                  value={cabin}
                  onChange={(e) => setCabin(e.target.value)}
                />

                <Input
                  title="Banheiros*"
                  width={416}
                  placeholder="Banheiros"
                  value={bathroom}
                  onChange={(e) => setBathroom(e.target.value)}
                />

                <Input
                  title="Motor*"
                  width={416}
                  placeholder="Motor"
                  value={engine}
                  onChange={(e) => setEngine(e.target.value)}
                />

                <Input
                  title="Hora Motor*"
                  width={416}
                  placeholder="Hora Motor"
                  value={engineHour}
                  onChange={(e) => setEngineHour(e.target.value)}
                />

                <Input
                  title="Reversor/Rabeta*"
                  width={416}
                  placeholder="Reversor/Rabeta"
                  value={reverser}
                  onChange={(e) => setReverser(e.target.value)}
                />

                <Input
                  title="Capacidade de Combustível*"
                  width={416}
                  placeholder="Capacidade de Combustível"
                  value={fuelCapacity}
                  onChange={(e) => setFuelCapacity(e.target.value)}
                />

                <Input
                  title="Capacidade de tanque de Água*"
                  width={416}
                  placeholder="Capacidade de tanque de Água"
                  value={waterCapacity}
                  onChange={(e) => setWaterCapacity(e.target.value)}
                />

                <Input
                  title="Instrumentos de navegação*"
                  width={416}
                  placeholder="Instrumentos de navegação"
                  value={navigationInstruments}
                  onChange={(e) => setNavigationInstruments(e.target.value)}
                />

                <Input
                  title="Guincho*"
                  width={416}
                  placeholder="Guincho"
                  value={winch}
                  onChange={(e) => setWinch(e.target.value)}
                />

                <Input
                  title="Eletrônico*"
                  width={416}
                  placeholder="Eletrônico"
                  value={electronics}
                  onChange={(e) => setElectronics(e.target.value)}
                />

                <Input
                  title="Capacidade de pessoas*"
                  width={416}
                  placeholder="Capacidade de pessoas"
                  value={peoplesCapacity}
                  onChange={(e) => setPeoplesCapacity(e.target.value)}
                />

                <Input
                  title="Bote Apoio/Motor de popa*"
                  width={416}
                  placeholder="Bote Apoio/Motor de popa"
                  value={supportBoat}
                  onChange={(e) => setSupportBoat(e.target.value)}
                />
              </>
            ) : (
              <>
                <Input
                  title="Construtor*"
                  width={416}
                  placeholder="Construtor"
                  value={jetConstructor}
                  onChange={(e) => setJetConstructor(e.target.value)}
                />

                <Input
                  title="Tipo de combustivel*"
                  width={416}
                  placeholder="Tipo de combustivel"
                  value={typeFuel}
                  onChange={(e) => setTypeFuel(e.target.value)}
                />

                <Input
                  title="Tamanho*"
                  width={416}
                  placeholder="Tamanho"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />

                <Input
                  title="Ano*"
                  width={416}
                  placeholder="Ano"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />

                <Input
                  title="Modelo*"
                  width={416}
                  placeholder="Modelo"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />

                <Input
                  title="Tipo de motor*"
                  width={416}
                  placeholder="Tipo de motor"
                  value={engine}
                  onChange={(e) => setEngine(e.target.value)}
                />

                <Input
                  title="Hora Motor*"
                  width={416}
                  placeholder="Hora Motor"
                  value={engineHour}
                  onChange={(e) => setEngineHour(e.target.value)}
                />

                <Input
                  title="Capacidade de Combustível*"
                  width={416}
                  placeholder="Capacidade de Combustível"
                  value={fuelCapacity}
                  onChange={(e) => setFuelCapacity(e.target.value)}
                />

                <Input
                  title="Capacidade de pessoas*"
                  width={416}
                  placeholder="Capacidade de pessoas"
                  value={peoplesCapacity}
                  onChange={(e) => setPeoplesCapacity(e.target.value)}
                />

                <Input
                  title="Estado do Painel*"
                  width={416}
                  placeholder="Estado do Painel"
                  value={painelState}
                  onChange={(e) => setPainelState(e.target.value)}
                />
              </>
            )

          }

          <Input
            title="Estado do Gel*"
            width={416}
            placeholder="Estado do Gel"
            value={gelState}
            onChange={(e) => setGelState(e.target.value)}
          />

          <Input
            title="Estado do Estofados*"
            width={416}
            placeholder="Estado do Estofados"
            value={upholsteredState}
            onChange={(e) => setUpholsteredState(e.target.value)}
          />

          <TextArea
            title="Extras*"
            width={416}
            placeholder="Extras"
            value={extras}
            onChange={(e) => setExtras(e.target.value)}
          />

          <Button title="Salvar" width={140} onClick={() => handleSaveData()} />
        </Form>
      </Content>
    </Container>
  );
}
