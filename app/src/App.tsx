import React from 'react'
import './App.css'
import { ChakraProvider, theme, Flex } from '@chakra-ui/react'
import { Navbar } from './components/'

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Navbar></Navbar>
        </ChakraProvider>
    )
}

export default App
