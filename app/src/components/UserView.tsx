import {
    Container,
    Grid,
    GridItem,
    Flex,
    Box,
    Text,
    Heading,
    Button,
} from '@chakra-ui/react'

import {
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { BsPerson } from 'react-icons/bs'
import { FiServer } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'

import { BellIcon } from '@chakra-ui/icons'
interface StatsCardProps {
    title: string
    stat: string
    icon: any
}
function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}
        >
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'}>{title}</StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}
                >
                    {icon}
                </Box>
            </Flex>
        </Stat>
    )
}

const UserView = () => {
    return (
        <Container py={5} maxW={'container.lg'}>
            <Flex direction='column' gap={10}>
                <Flex gap={20} justify='space-between'>
                    <Heading as={'h2'}>
                        Nazwa firmy (gdzie są bakusie?!?)
                    </Heading>
                    <Button
                        rightIcon={<BellIcon />}
                        bg='purple.600'
                        _hover={{
                            bg: 'purple.700',
                        }}
                        variant='solid'
                    >
                        Wyślij prośbę o urlop
                    </Button>
                </Flex>
                <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={{ base: 5, lg: 8 }}
                >
                    <StatsCard
                        title={'Owner'}
                        stat={'Gdzie są bakusie'}
                        icon={<StarIcon width={'2.5em'} height={'2.5em'} />}
                    />
                    <StatsCard
                        title={'Członkowie'}
                        stat={'61'}
                        icon={<BsPerson size={'3em'} />}
                    />
                    <StatsCard
                        title={'Lokalizacja'}
                        stat={'Gliwice'}
                        icon={<GoLocation size={'3em'} />}
                    />
                </SimpleGrid>
            </Flex>
        </Container>
    )
}

export default UserView
