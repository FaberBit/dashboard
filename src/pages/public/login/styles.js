import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 6rem;
  height: 100vh;
  background-color: #f8f9fb;
`;

export const Header = styled.div`
  .logo{
    width: 12rem;
  }
`;

export const Content = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 6rem;
  align-items: center;
`;

export const InfoDashboardBanner = styled.div`
  h2{
    font-size: 2.5rem;
    max-width: 32rem;
  }

  div{
    display: flex;
    justify-content: end;
    margin-top: -5rem;

    img{
      width: 28rem;
    }
  }

`;

export const Form = styled.div`
  background: #FCFCFC;
  height: 24rem;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: .5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FormHeader = styled.div`
  background-color: #17EF99;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: .5rem 0;
  border-radius: 0.5rem .5rem 0 0;
`;

export const FormContent = styled.div`
  padding: 2rem 3rem 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const FormInput = styled.div`
  margin-top: 1.8rem;
  width: 100%;
`;

export const FormSubmitButton = styled.button`
  margin-top: 2rem;
  border: 0;
  border-radius: .8rem;
  background-color: #17EF99;
  height: 2.4rem;
  width: 100%;

  span{
    color: #162D1E;
    font-weight: 500;
    font-size: 1rem;
  }
`;
