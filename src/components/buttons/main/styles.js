import styled from 'styled-components';

export const Container = styled.button`
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    color: #FFFFFF;
  }

  width: ${(props) => (props.width ? `${String(props.width)}px` : '416px')};
  border: 0;
  margin-top: 1rem;

  height: 2rem;

  background: #17ef99;
  border-radius: 0.5rem;
`;
