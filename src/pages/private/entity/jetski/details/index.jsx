import React from 'react';
import { FiEdit2, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { HeaderMain } from '../../../../../components/headers/main'
import { ButtonsPages, Container, Content, HeaderContent, ItemInfo } from './styles';

export function JetskiDetails() {
  return (
    <Container>
      <HeaderMain title="Jetski"/>

      <Content>
        <HeaderContent>
            <strong>Nome da embarcação</strong>
            <strong>Proprietário</strong>
            <strong>Marca</strong>
            <strong>Modelo</strong>
            <strong>Data de criação</strong>
            <strong>Opções</strong>
        </HeaderContent>

        <ItemInfo>
            <strong>Perolá Negra dos Sete Mares Escuros</strong>
            <strong>João Carlos</strong>
            <strong>Ford</strong>
            <strong>GTX1299</strong>
            <strong>12/08/2003</strong>
            <div className="actionsButton">
                <a href="/jetski/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Perolá Negra dos Sete Mares Escuros</strong>
            <strong>João Carlos</strong>
            <strong>Ford</strong>
            <strong>GTX1299</strong>
            <strong>12/08/2003</strong>
            <div className="actionsButton">
                <a href="/jetski/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Perolá Negra dos Sete Mares Escuros</strong>
            <strong>João Carlos</strong>
            <strong>Ford</strong>
            <strong>GTX1299</strong>
            <strong>12/08/2003</strong>
            <div className="actionsButton">
                <a href="/jetski/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Perolá Negra dos Sete Mares Escuros</strong>
            <strong>João Carlos</strong>
            <strong>Ford</strong>
            <strong>GTX1299</strong>
            <strong>12/08/2003</strong>
            <div className="actionsButton">
                <a href="/jetski/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Perolá Negra dos Sete Mares Escuros</strong>
            <strong>João Carlos</strong>
            <strong>Ford</strong>
            <strong>GTX1299</strong>
            <strong>12/08/2003</strong>
            <div className="actionsButton">
                <a href="/jetski/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Perolá Negra dos Sete Mares Escuros</strong>
            <strong>João Carlos</strong>
            <strong>Ford</strong>
            <strong>GTX1299</strong>
            <strong>12/08/2003</strong>
            <div className="actionsButton">
                <a href="/jetski/edit">
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

