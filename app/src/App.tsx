import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/";
import LoginForm from "./components/LoginForm";
import NotLoggedNavbar from "./components/NotLoggedNavbar";
import RegisterForm from "./components/RegisterForm";
import WelcomePage from "./components/WelcomePage";

function App() {
  let loggedIn: boolean = false;

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {loggedIn ? <Navbar /> : <NotLoggedNavbar />}
        <Routes>
          <Route
            element={loggedIn ? <Navigate to="/dashboard" /> : <LoginForm />}
            path="/logowanie"
          ></Route>
          <Route
            element={loggedIn ? <Navigate to="/dashboard" /> : <RegisterForm />}
            path="/rejestracja"
          ></Route>
          <Route
            element={loggedIn ? <Navigate to="/dashboard" /> : <WelcomePage />}
            path="/"
          ></Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
