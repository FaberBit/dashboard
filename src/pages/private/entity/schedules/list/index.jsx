import React from 'react';
import { FiEdit2, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { HeaderMain } from '../../../../../components/headers/main'
import { ButtonsPages, Container, Content, HeaderContent, ItemInfo } from './styles';

export function SchedulesList() {
  return (
    <Container>
      <HeaderMain title="Agendamentos"/>

      <Content>
        <HeaderContent>
            <strong>Cliente</strong>
            <strong>Embarcação</strong>
            <strong>Observações</strong>
            <strong>Data do agendamento</strong>
            <strong>Opções</strong>
        </HeaderContent>

        <ItemInfo>
            <strong>João Carlos</strong>
            <strong>Perolá Negra dos Sete Mares Escuros</strong>
            <strong className="schedulesDescription">Irei viajar por 4 dias entre x e y lugar schedulesDescription schedulesDescriptionschedulesDescription</strong>
            <strong>12/08/2003</strong>
            <div className="actionsButton">
                <a href="/schedules/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>João Carlos</strong>
            <strong>Perolá Negra dos Sete Mares Escuros</strong>
            <strong className="schedulesDescription">Irei viajar por 4 dias entre x e y lugar</strong>
            <strong>12/08/2003</strong>
            <div className="actionsButton">
                <a href="/schedules/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>João Carlos</strong>
            <strong>Perolá Negra dos Sete Mares Escuros</strong>
            <strong className="schedulesDescription">Irei viajar por 4 dias entre x e y lugar</strong>
            <strong>12/08/2003</strong>
            <div className="actionsButton">
                <a href="/schedules/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>João Carlos</strong>
            <strong>Perolá Negra dos Sete Mares Escuros</strong>
            <strong className="schedulesDescription">Irei viajar por 4 dias entre x e y lugar</strong>
            <strong>12/08/2003</strong>
            <div className="actionsButton">
                <a href="/schedules/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>João Carlos</strong>
            <strong>Perolá Negra dos Sete Mares Escuros</strong>
            <strong className="schedulesDescription">Irei viajar por 4 dias entre x e y lugar</strong>
            <strong>12/08/2003</strong>
            <div className="actionsButton">
                <a href="/schedules/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>João Carlos</strong>
            <strong>Perolá Negra dos Sete Mares Escuros</strong>
            <strong className="schedulesDescription">Irei viajar por 4 dias entre x e y lugar</strong>
            <strong>12/08/2003</strong>
            <div className="actionsButton">
                <a href="/schedules/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ButtonsPages>
            <button>
                <FiArrowLeft size={20}/>
            </button>

            <span>01</span>

            <button>
                <FiArrowRight size={20}/>
            </button>
        </ButtonsPages>
      </Content>
    </Container>
  )
}

