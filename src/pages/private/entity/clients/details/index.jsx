import React from 'react';
import { FiEdit2, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { HeaderMain } from '../../../../../components/headers/main'
import { ButtonsPages, Container, Content, HeaderContent, ItemInfo } from './styles';

export function ClientDetails() {
  return (
    <Container>
      <HeaderMain title="Clientes"/>

      <Content>
        <HeaderContent>
            <strong>Nome</strong>
            <strong>Email</strong>
            <strong>Telefone</strong>
            <strong>Adicionado em</strong>
            <strong>Opções</strong>
        </HeaderContent>

        <ItemInfo>
            <strong>Fulano dos Santos</strong>
            <strong>fulano@mail.com</strong>
            <strong>11 999706186</strong>
            <strong>20/11/2021</strong>
            <div className="actionsButton">
                <a href="/boat/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Fulano dos Santos</strong>
            <strong>fulano@mail.com</strong>
            <strong>11 999706186</strong>
            <strong>20/11/2021</strong>
            <div className="actionsButton">
                <a href="/boat/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Fulano dos Santos</strong>
            <strong>fulano@mail.com</strong>
            <strong>11 999706186</strong>
            <strong>20/11/2021</strong>
            <div className="actionsButton">
                <a href="/boat/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Fulano dos Santos</strong>
            <strong>fulano@mail.com</strong>
            <strong>11 999706186</strong>
            <strong>20/11/2021</strong>
            <div className="actionsButton">
                <a href="/boat/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Fulano dos Santos</strong>
            <strong>fulano@mail.com</strong>
            <strong>11 999706186</strong>
            <strong>20/11/2021</strong>
            <div className="actionsButton">
                <a href="/boat/edit">
                    <FiEdit2 color="#000" size={22}/>
                </a>
                <button>
                    <RiDeleteBin6Line color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Fulano dos Santos</strong>
            <strong>fulano@mail.com</strong>
            <strong>11 999706186</strong>
            <strong>20/11/2021</strong>
            <div className="actionsButton">
                <a href="/boat/edit">
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

