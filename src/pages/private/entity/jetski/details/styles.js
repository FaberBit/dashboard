import styled from 'styled-components';
import colors from '../../../../../styles/colors';

export const Container = styled.div`
  padding: 2.5rem 3.75rem;
  height: 100vh;
  background-color: #f8f9fb;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: #f88; */
`;

export const HeaderContent = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  text-align: center;

  strong {
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 21px;
    color: #000000;
  }
`;

export const ItemInfo = styled.div`
  margin-top: 1.6rem;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
  background-color: ${colors.white};

  height: 3.75rem;

  background: #ffffff;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  strong {
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 21px;
    color: ${colors.secundaryTextureDark};
  }

  .actionsButton {
    display: flex;
    padding: 0 1.5rem;
    justify-content: space-evenly;

    a {
      background-color: ${colors.red};
      height: 2rem;
      width: 2rem;
      border-radius: 10px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      background-color: ${colors.primary};
      height: 2rem;
      width: 2rem;
      border: 0;
      border-radius: 10px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ButtonsPages = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #17ef99;
    border: 0;
    border-radius: 10px;
    height: 2rem;
    width: 4rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #17ef99;
    border-radius: 10px;
    height: 2rem;
    width: 3.4rem;

    margin: 0 1rem;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }
`;
