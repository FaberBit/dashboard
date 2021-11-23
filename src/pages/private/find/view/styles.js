import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem 3.75rem;
  height: 100vh;
  background-color: #f8f9fb;
`;

export const Content = styled.div`
  display: grid;
  /* align-items: center; */
  justify-content: center;
  grid-template-columns: 8fr 5fr;
  margin-top: 3.25rem;

  img{
    width: 685px;
  }
`;

export const ListItens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;
  max-height: 253px;
  max-width: 433px;
  align-items: center;
`;

export const Item = styled(Link)`
  width: 180px;
  height: 40px;

  background: #FFFFFF;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  span{
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
`;