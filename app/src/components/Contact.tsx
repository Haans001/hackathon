import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'
import React from 'react'
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'

const confetti = {
    light: {
        primary: '4299E1', // blue.400
        secondary: 'BEE3F8', // blue.100
    },

    dark: {
        primary: '1A365D', // blue.900
        secondary: '2A4365', // blue.800
    },
}

const Contact = () => {
    const { hasCopied, onCopy } = useClipboard('example@example.com')

    return (
        <Flex align='center' justify='center' id='contact'>
            <Box
                borderRadius='lg'
                m={{ base: 5, md: 16, lg: 10 }}
                p={{ base: 5, lg: 16 }}
            >
                <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                        <Heading
                            fontSize={{
                                base: '4xl',
                                md: '5xl',
                            }}
                        >
                            Zostańmy w kontakcie!
                        </Heading>

                        <Box
                            bg={useColorModeValue('white', 'gray.700')}
                            borderRadius='lg'
                            p={8}
                            color={useColorModeValue(
                                'gray.700',
                                'whiteAlpha.900'
                            )}
                            shadow='base'
                        >
                            <VStack spacing={5}>
                                <FormControl isRequired>
                                    <FormLabel>Nazwa</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement
                                            children={<BsPerson />}
                                        />
                                        <Input
                                            type='text'
                                            name='name'
                                            placeholder='Podaj swoje imię'
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Adres e-mail</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement
                                            children={<MdOutlineEmail />}
                                        />
                                        <Input
                                            type='email'
                                            name='email'
                                            placeholder='Podaj swój adres e-mail'
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Wiadomość</FormLabel>

                                    <Textarea
                                        name='message'
                                        placeholder='Podaj swoją wiadomość'
                                        rows={6}
                                        resize='none'
                                    />
                                </FormControl>

                                <Button
                                    colorScheme='purple'
                                    bg='purple.600'
                                    color='white'
                                    _hover={{
                                        bg: 'purple.700',
                                    }}
                                >
                                    Wyślij wiadomość
                                </Button>
                            </VStack>
                        </Box>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    )
}

export default Contact
