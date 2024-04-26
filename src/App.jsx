import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./service/queryClient";
import './index.css'

const theme = extendTheme({
});

const App = () => {
  return (
    <BrowserRouter>
    <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
    </ChakraProvider>
      </BrowserRouter>
  );
};

export default App;
