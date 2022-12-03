import {
    Button,
    Card,
    CardBody,
    Flex,
    Image,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Organization = (props: any) => {
    return (
        <>
            <Flex w='100%' align='center' justify='center'>
                <Card w='50%' marginBottom='20px'>
                    <CardBody
                        w='100%'
                        bg={useColorModeValue('white', 'purple.700')}
                        rounded='md'
                    >
                        <Flex>
                            <Flex
                                w='30%'
                                flexDirection='column'
                                justify='center'
                                align='center'
                            >
                                <Image
                                    w='100px'
                                    h='100px'
                                    borderRadius='50%'
                                    marginBottom='10px'
                                    src={props.logo}
                                ></Image>
                                <Text>Założyciel: {props.owner}</Text>
                            </Flex>

                            <Flex
                                pl='50px'
                                flexDirection='column'
                                justify='center'
                            >
                                <Text fontSize='25px'>
                                    Nazwa organizacji: {props.organizationName}
                                </Text>
                                <Text>Liczba czlonkow: {props.usersCount}</Text>
                                <Link to={`/organizacja/${props.id}`}>
                                    <Button
                                        type='button'
                                        size='md'
                                        w='60%'
                                        bg={useColorModeValue(
                                            'purple.600',
                                            'purple.50'
                                        )}
                                        marginTop='20px'
                                        color={useColorModeValue(
                                            'white',
                                            'black'
                                        )}
                                        _hover={{
                                            bg: useColorModeValue(
                                                'white',
                                                'purple.50'
                                            ),
                                        }}
                                    >
                                        Przejdź do organizacji
                                    </Button>
                                </Link>
                            </Flex>
                        </Flex>
                    </CardBody>
                </Card>
            </Flex>
        </>
    )
}

export default Organization
