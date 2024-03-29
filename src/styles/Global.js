import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        --background-acess: rgb(35, 40, 45);
        --primaryColor: rgb(35, 40, 45);
        --mainColor: #A16695;
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33cc95;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --shape: #ffffff;
        --background: #f0f2f5;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html {
        font-size:16px;
        @media (max-width:1080px){
            font-size: 93.75%;
        }
        @media (max-width:720px){
            font-size: 87.5%;
        }
        @media (max-width:400px){
            font-size: 81.25%;
        }
    }
    body {
        background-color: var(--shape);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    .react-modal-overlay{
        background: rgba(0,0,0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        padding-bottom: 2rem;
        position: relative;
        border-radius: 0.25rem;
    }
    .react-modal-close{
        border: 0;
        background-color: transparent;
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8)
        }
    }
`;
