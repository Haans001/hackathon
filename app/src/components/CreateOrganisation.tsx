import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function CreateOrganisation(): JSX.Element {
    const [nameInput, setNameInput] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(nameInput)
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <form onSubmit={handleSubmit}>
                <Stack
                    spacing={6}
                    w={'full'}
                    maxW={'md'}
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}
                >
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '2xl', sm: '3xl' }}
                    >
                        Stwórz nową organizację
                    </Heading>

                    <FormControl id='userName' isRequired>
                        <FormLabel>Nazwa organizacji</FormLabel>
                        <Input
                            autoFocus
                            placeholder='Podaj nazwę organizacji...'
                            _placeholder={{ color: 'gray.500' }}
                            type='text'
                            required
                            value={nameInput}
                            onChange={(e) => {
                                setNameInput(e.target.value)
                            }}
                        />
                    </FormControl>
                    <Stack spacing={6} direction={['column', 'row']}>
                        <Link to='/panel' style={{ width: '100%' }}>
                            <Button
                                bg={'red.500'}
                                color={'white'}
                                w='full'
                                _hover={{
                                    bg: 'red.600',
                                }}
                            >
                                Anuluj
                            </Button>
                        </Link>
                        <Button
                            bg={'purple.600'}
                            color={'white'}
                            w='full'
                            _hover={{
                                bg: 'purple.700',
                            }}
                            type='submit'
                        >
                            Stwórz
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Flex>
    )
}
