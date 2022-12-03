import { Box, Button, Heading, Stack, Text, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <>
            <Flex justify='center' align='center' minH={'88vh'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                    >
                        Hutadoro pomoże Ci zarządzać <br />
                        <Text as={'span'} color={'purple.600'} maxWidth='200px'>
                            urlopami Twoich pracowników
                        </Text>
                    </Heading>
                    <Text color={'gray.400'} fontSize='xl'>
                        Zarządzaj urlopami swoich pracowników, miej zdalny wpływ
                        do statystyk na ich temat oraz popraw duch komunikacji w
                        zespole!
                    </Text>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}
                    >
                        <Link to='/rejestracja'>
                            <Button
                                colorScheme={'green'}
                                bg={'purple.600'}
                                rounded={'full'}
                                px={6}
                                color='gray.200'
                                _hover={{
                                    bg: 'purple.700',
                                }}
                            >
                                Zarejestruj się
                            </Button>
                        </Link>
                        <Link to='/logowanie'>
                            <Button
                                variant={'link'}
                                colorScheme={'blue'}
                                size={'sm'}
                            >
                                Zaloguj się
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
        </>
    )
}

export default WelcomePage
