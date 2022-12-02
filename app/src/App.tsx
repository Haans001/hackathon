import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ChakraProvider, theme, Flex } from '@chakra-ui/react'

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Flex></Flex>
        </ChakraProvider>
    )
}

export default App
