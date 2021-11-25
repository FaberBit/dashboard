import styled from "styled-components";
import colors from "../../../styles/colors";

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

  img {
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

export const InputImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .inputfile + label {
    background-color: #fff;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid ${colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const NotificationsList = styled.div`
  display: flex;
  flex-direction: column;
`;
