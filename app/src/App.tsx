import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <WelcomePage></WelcomePage>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
