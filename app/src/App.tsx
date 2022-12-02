import { ChakraProvider, theme } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

function App() {
    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Navbar></Navbar>
                <Routes>
                    <Route element={<LoginForm />} path='/logowanie'></Route>
                    <Route
                        element={<RegisterForm />}
                        path='/rejestracja'
                    ></Route>
                </Routes>
            </ChakraProvider>
        </BrowserRouter>
    )
}

export default App
