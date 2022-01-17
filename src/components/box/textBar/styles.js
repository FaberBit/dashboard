import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Box = styled.div`
  background-color: #fff;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.25rem 1.875rem;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  width: 37.5rem;
  height: 3.75rem;

  h4{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const InfoSpan = styled.div`
  background-color: ${(props) => (props.colorSpan ? props.colorSpan : colors.primary)};
  width: 8.75rem;
  height: 1.5rem;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  span{
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
  }
`;
