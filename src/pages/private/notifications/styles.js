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

export const NotificationsList = styled.div`
  display: flex;
  flex-direction: column;
`;
