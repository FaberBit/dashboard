import React from 'react';
import { FiEdit2, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { HeaderMain } from '../../../../../components/headers/main';
import {
  ButtonsPages, Container, Content, HeaderContent, ItemInfo,
} from './styles';

export function ReviewsList() {
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

        <ItemInfo>
          <strong>Perola da Sereia Azul</strong>
          <strong>fordMotors</strong>
          <strong>Juliano</strong>
          <strong>20/11/2021</strong>
          <div className="actionsButton">
            <a href="/reviews/edit">
              <FiEdit2 color="#000" size={22} />
            </a>
            <button type="submit">
              <RiDeleteBin6Line color="#000" size={22} />
            </button>
          </div>
        </ItemInfo>

        <ItemInfo>
          <strong>Perola da Sereia Azul</strong>
          <strong>fordMotors</strong>
          <strong>Juliano</strong>
          <strong>20/11/2021</strong>
          <div className="actionsButton">
            <a href="/reviews/edit">
              <FiEdit2 color="#000" size={22} />
            </a>
            <button type="submit">
              <RiDeleteBin6Line color="#000" size={22} />
            </button>
          </div>
        </ItemInfo>

        <ItemInfo>
          <strong>Perola da Sereia Azul</strong>
          <strong>fordMotors</strong>
          <strong>Juliano</strong>
          <strong>20/11/2021</strong>
          <div className="actionsButton">
            <a href="/reviews/edit">
              <FiEdit2 color="#000" size={22} />
            </a>
            <button type="submit">
              <RiDeleteBin6Line color="#000" size={22} />
            </button>
          </div>
        </ItemInfo>

        <ItemInfo>
          <strong>Perola da Sereia Azul</strong>
          <strong>fordMotors</strong>
          <strong>Juliano</strong>
          <strong>20/11/2021</strong>
          <div className="actionsButton">
            <a href="/reviews/edit">
              <FiEdit2 color="#000" size={22} />
            </a>
            <button type="submit">
              <RiDeleteBin6Line color="#000" size={22} />
            </button>
          </div>
        </ItemInfo>

        <ItemInfo>
          <strong>Perola da Sereia Azul</strong>
          <strong>fordMotors</strong>
          <strong>Juliano</strong>
          <strong>20/11/2021</strong>
          <div className="actionsButton">
            <a href="/reviews/edit">
              <FiEdit2 color="#000" size={22} />
            </a>
            <button type="submit">
              <RiDeleteBin6Line color="#000" size={22} />
            </button>
          </div>
        </ItemInfo>

        <ItemInfo>
          <strong>Perola da Sereia Azul</strong>
          <strong>fordMotors</strong>
          <strong>Juliano</strong>
          <strong>20/11/2021</strong>
          <div className="actionsButton">
            <a href="/reviews/edit">
              <FiEdit2 color="#000" size={22} />
            </a>
            <button type="submit">
              <RiDeleteBin6Line color="#000" size={22} />
            </button>
          </div>
        </ItemInfo>

        <ButtonsPages>
          <button type="submit">
            <FiArrowLeft size={20} />
          </button>

          <span>01</span>

          <button type="submit">
            <FiArrowRight size={20} />
          </button>
        </ButtonsPages>
      </Content>
    </Container>
  );
}
