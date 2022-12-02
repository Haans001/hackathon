import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <RegisterForm />

        <Navbar></Navbar>
        <Routes>{/* <Route element={} path='/'></Route> */}</Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
