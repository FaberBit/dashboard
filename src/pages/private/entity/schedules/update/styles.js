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

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  width: 30rem;
  height: 32.5rem;

  margin-top: -1rem;

  h4{
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    text-align: center;

    color: #162D1E;
    margin: 1rem auto;
  }
`;
