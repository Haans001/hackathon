import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react'

import { useState } from 'react'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(username, password)
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Logowanie</Heading>
                </Stack>
                <Flex
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                    minH={'300px'}
                    align='center'
                >
                    <Stack spacing={4}>
                        <FormControl id='login'>
                            <FormLabel>Adres e-mail</FormLabel>
                            <Input
                                autoFocus
                                type='text'
                                name='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                minW='380px'
                            />
                        </FormControl>
                        <FormControl id='password'>
                            <FormLabel>Hasło</FormLabel>
                            <Input
                                type='password'
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                marginTop={1}
                                bg={'purple.600'}
                                color={'white'}
                                _hover={{
                                    bg: 'purple.700',
                                }}
                                onClick={handleSubmit}
                            >
                                Zaloguj się
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
        </Flex>
    )
}

export default LoginForm
