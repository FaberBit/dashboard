import { Router } from "react-router-dom";
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify';

import history from './services/history'
import Global from "./styles/Global";
import { Routes } from "./routes/index.";

import { UserContextProvider } from "./hooks/useUser";

Modal.setAppElement('#root')

function App() {
  return (
    <UserContextProvider>
      <Router history={history}>

        <Global />
        <Routes />
        <ToastContainer autoClose={1500} />

      </Router>
    </UserContextProvider>
  );
}

export default App;
