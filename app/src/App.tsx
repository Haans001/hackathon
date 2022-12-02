import React from 'react'
import './App.css'
import { ChakraProvider, theme, Flex } from '@chakra-ui/react'
import { Navbar } from './components/'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Navbar></Navbar>
                <Routes>{/* <Route element={} path='/'></Route> */}</Routes>
            </ChakraProvider>
        </BrowserRouter>
    )
}

export default App
