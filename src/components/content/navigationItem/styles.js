import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../../styles/colors';

export const ItemContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};

  min-width: 280px;
  min-height: 200px;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  padding: 1.125rem;

  h4{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
 
    text-align: center;

    color: ${colors.secundary};
  }

  span{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: .875rem;
    line-height: 1.3125rem;
    /* identical to box height */

    text-align: center;
    margin-top: -.5rem;
    margin-bottom: .75rem;

    color: ${colors.secundary};
  }

  img{
    width: 7.9375rem;
    height: 5.625rem;
  }
`;