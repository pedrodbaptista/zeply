import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Container } from '@mui/material';
import routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const content = useRoutes(routes);
  
  return (
    <>
      <ToastContainer autoClose={5000} hideProgressBar />
      <Container>
        {content}
      </Container>
    </>
  );
}

export default App;
