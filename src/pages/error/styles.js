import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  padding: 3rem 6rem;
  height: 100vh;
  background-color: #f8f9fb;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2``;

export const ImageError = styled.div`
  height: 24.6875rem;
  width: 34.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${props => props.background}) no-repeat center center;
  background-size: cover;


  color: red;
  span{
    font-size: 4rem;
    font-weight: 700;
    font-style: italic;
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  border: 0;
  border-radius: .5rem;

  background-color: ${colors.primary};
  color: ${colors.whiteAlabaster};
  
  height: 2.4rem;
  width: 13.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  span{
    font-size: 1rem;
    font-weight: 500;
    margin-right: .5rem;
  }
`;

