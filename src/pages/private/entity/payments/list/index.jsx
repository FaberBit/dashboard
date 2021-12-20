import React from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { BiCheck, BiX } from "react-icons/bi";

import { HeaderMain } from '../../../../../components/headers/main'
import { ButtonsPages, Container, Content, HeaderContent, ItemInfo } from './styles';

export function ClientPaymentsList() {
  return (
    <Container>
      <HeaderMain title="Clientes"/>

      <Content>
        <HeaderContent>
            <strong>Nome</strong>
            <strong>Email</strong>
            <strong>Telefone</strong>
            <strong>Status</strong>
            <strong>Ações</strong>
        </HeaderContent>

        <ItemInfo>
            <strong>Fulano dos Santos</strong>
            <strong>fulano@mail.com</strong>
            <strong>11 999706186</strong>
            <span className='activePay'>Realizado</span>
            <div className="actionsButton">
                <a href="/payments/infos">
                    <BiX color="#000" size={22}/>
                </a>
                <button>
                    <BiCheck color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Fulano dos Santos</strong>
            <strong>fulano@mail.com</strong>
            <strong>11 999706186</strong>
            <span className='activePay'>Realizado</span>
            <div className="actionsButton">
                <a href="/payments/infos">
                    <BiX color="#000" size={22}/>
                </a>
                <button>
                    <BiCheck color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Fulano dos Santos</strong>
            <strong>fulano@mail.com</strong>
            <strong>11 999706186</strong>
            <span className='noActivePay'>Não Realizado</span>
            <div className="actionsButton">
                <a href="/payments/infos">
                    <BiX color="#000" size={22}/>
                </a>
                <button>
                    <BiCheck color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Fulano dos Santos</strong>
            <strong>fulano@mail.com</strong>
            <strong>11 999706186</strong>
            <span className='activePay'>Realizado</span>
            <div className="actionsButton">
                <a href="/payments/infos">
                    <BiX color="#000" size={22}/>
                </a>
                <button>
                    <BiCheck color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Fulano dos Santos</strong>
            <strong>fulano@mail.com</strong>
            <strong>11 999706186</strong>
            <span className='noActivePay'>Não Realizado</span>
            <div className="actionsButton">
                <a href="/payments/infos">
                    <BiX color="#000" size={22}/>
                </a>
                <button>
                    <BiCheck color="#000" size={22}/>
                </button>
            </div>
        </ItemInfo>

        <ItemInfo>
            <strong>Fulano dos Santos</strong>
            <strong>fulano@mail.com</strong>
            <strong>11 999706186</strong>
            <span className='activePay'>Realizado</span>
            <div className="actionsButton">
                <a href="/payments/infos">
                    <BiX color="#000" size={22}/>
                </a>
                <button>
                    <BiCheck color="#000" size={22}/>
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

