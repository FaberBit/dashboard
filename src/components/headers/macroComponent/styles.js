import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h2{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    max-width: 48.25rem;
    line-height: 4.5rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  /* background-color: violet; */

  span{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 2.125rem;
  }

  img{
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;

    margin: 0 2rem 0 1rem;
  }


  button{
    border: none;
    background-color: transparent;
  }
`;
