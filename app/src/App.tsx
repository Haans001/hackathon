import { ChakraProvider, theme } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/'
import LoginForm from './components/LoginForm'
import NotLoggedNavbar from './components/NotLoggedNavbar'
import RegisterForm from './components/RegisterForm'

function App() {
    let loggedIn: boolean = false

    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                {loggedIn ? <Navbar /> : <NotLoggedNavbar />}
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
