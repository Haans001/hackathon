import { MinusIcon, SmallAddIcon } from '@chakra-ui/icons'
import { Button, Card, CardBody, Flex, Stack, Text } from '@chakra-ui/react'
import { useMutation } from 'react-query'
import axios from '../config/axios'
import { useAuth } from '../providers/AuthProvider'

const Ticket = (props: any) => {
    const start = new Date(props.startTime)
    const end = new Date(props.endTime)

    const { mutate: approveOrDisapproveTicket } = useMutation(
        (data: any) => axios.put('/tickets/approveOrDisapproveTicket', data),
        {
            onSuccess: () => {
                props.onSuccess()
            },
        }
    )

    const { user } = useAuth()

    const { mutate: vote } = useMutation(
        (data: any) => axios.post('/tickets/upvote', data),
        {
            onSuccess: () => {
                props.onSuccess()
            },
        }
    )

    const pluses = props.votes.filter(
        (vote: { status: any }) => vote.status
    ).length
    const minuses = props.votes.filter(
        (vote: { status: any }) => !vote.status
    ).length

    const hasVotedPlus = props.votes.find(
        (vote: { userId: string; status: string }) =>
            vote.userId === user.id && vote.status
    )

    const hasVotedMinus = props.votes.find(
        (vote: { userId: string; status: string }) =>
            vote.userId === user.id && !vote.status
    )

    return (
        <Flex justify={'center'}>
            <Card width={'70%'}>
                <CardBody>
                    <Flex
                        h={'100%'}
                        justifyContent={'space-between'}
                        alignContent={'center'}
                    >
                        <Flex flexDirection={'column'} gap={'10px'} h={'100%'}>
                            <Text>{props.name}</Text>
                            <Text>{props.title}</Text>
                            <Text>
                                Dodane przez: {props.user.name}{' '}
                                {props.user.surname}
                            </Text>
                            <Text>{`od ${start.getDay()}-${start.getMonth()}-${start.getFullYear()}r. ${
                                start.getHours() < 10
                                    ? '0' + start.getHours()
                                    : start.getHours()
                            }:${
                                start.getMinutes() < 10
                                    ? '0' + start.getMinutes()
                                    : start.getMinutes()
                            } do ${end.getDay()}-${end.getMonth()}-${end.getFullYear()}r. ${
                                end.getHours() < 10
                                    ? '0' + end.getHours()
                                    : end.getHours()
                            }:${
                                end.getMinutes() < 10
                                    ? '0' + end.getMinutes()
                                    : end.getMinutes()
                            }`}</Text>
                        </Flex>
                        <Flex alignContent={'center'} h='100%' align={'center'}>
                            {props.isOwner && props.approved === null ? (
                                <Stack>
                                    <Button
                                        bg='green.600'
                                        _hover={{
                                            bg: 'green.700',
                                        }}
                                        onClick={() =>
                                            approveOrDisapproveTicket({
                                                ticketId: props.id,
                                                status: true,
                                            })
                                        }
                                    >
                                        Zaakcpetuj
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            approveOrDisapproveTicket({
                                                ticketId: props.id,
                                                status: false,
                                            })
                                        }
                                        bg='red.600'
                                        _hover={{
                                            bg: 'red.700',
                                        }}
                                    >
                                        Odrzuć
                                    </Button>
                                </Stack>
                            ) : props.approved === null ? (
                                <Text color={'yellow.700'}>W toku</Text>
                            ) : props.approved ? (
                                <Text color='green.700'>Zaackeptowany</Text>
                            ) : (
                                <Text color='red.700'>Odrzucony</Text>
                            )}
                            <Button
                                h='42px'
                                marginLeft={'15px'}
                                w='42px'
                                onClick={() =>
                                    vote({ ticketId: props.id, status: true })
                                }
                            >
                                <SmallAddIcon
                                    color={hasVotedPlus && 'green.400'}
                                    fontSize={'42px'}
                                />
                            </Button>
                            <Text ml={2}>{pluses}</Text>
                            <Button
                                onClick={() =>
                                    vote({ ticketId: props.id, status: false })
                                }
                                marginLeft={'15px'}
                                w='42px'
                                h='42px'
                            >
                                <MinusIcon
                                    color={hasVotedMinus && 'red.400'}
                                    fontSize={'42px'}
                                />
                            </Button>
                            <Text ml={2}>{minuses}</Text>
                        </Flex>
                    </Flex>
                </CardBody>
            </Card>
        </Flex>
    )
}

export default Ticket
