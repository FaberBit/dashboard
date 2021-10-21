import styled from 'styled-components';

export const InputStyle = styled.input`
  width: 100%;
  height: 2.4rem;
  background-color: #fff;
  border: 1px solid #999;
  color: #162D1E;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ccc;
  }

  padding: .98rem;
  border-radius: .5rem;
  
  ${props => props.stylesProps && props.stylesProps}
`;
