import React, { useState } from 'react'
import {
    Container,
    FormControl,
    FormLabel,
    Input,
    Button,
    Flex,
} from '@chakra-ui/react'

const LoginForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(login, password)
    }

    return (
        <Container maxW='container.sm'>
            <Flex height='100vh' justify='center' align='center'>
                <FormControl>
                    <FormLabel>
                        Login:
                        <Input
                            type='text'
                            name='login'
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </FormLabel>
                    <FormLabel>
                        Password:
                        <Input
                            type='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormLabel>
                    <Button type='submit' value='Submit' onClick={handleSubmit}>
                        Zaloguj sie
                    </Button>
                </FormControl>
            </Flex>
        </Container>
    )
}

export default LoginForm
