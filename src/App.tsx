import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { Container } from "@mui/material";
import routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { getExchangeRates } from "./lib/API";

function App() {
  const content = useRoutes(routes);

  useEffect(() => {
    getExchangeRatesData();
  }, []);

  const getExchangeRatesData = () => {
    getExchangeRates();
  };

  return (
    <>
      <ToastContainer autoClose={5000} hideProgressBar />
      <Container>{content}</Container>
    </>
  );
}

export default App;
