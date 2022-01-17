import styled from 'styled-components';

export const Container = styled.div`
  span{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    color: #162D1E;
  }

  width: ${(props) => (props.width ? `${String(props.width)}px` : '416px')};

  margin-top: 1rem;

  input {
    width: 100%;
    height: 2.4rem;
    background-color: #fff;
    color: #162D1E;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #ccc;
    }

    padding: .25rem .6rem;
    border-radius: .5rem;
    border: 0;

    background: #F8F9FB;

    ${(props) => props.stylesProps && props.stylesProps}
  }
`;
