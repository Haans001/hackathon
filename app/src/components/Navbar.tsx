import {
    ChevronDownIcon,
    ChevronRightIcon,
    CloseIcon,
    HamburgerIcon,
} from '@chakra-ui/icons'
import {
    Box,
    Button,
    ButtonProps,
    Collapse,
    Flex,
    Icon,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useBreakpointValue,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import { BsMoonStarsFill, BsSun } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { useAuth } from '../providers/AuthProvider'

export default function Navbar(props: ButtonProps) {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()

    const { logout, user } = useAuth()

    return (
        <Box pos='fixed' w='100%' zIndex='98'>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 4 }}
                px={{ base: 12 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                fontFamily='poppins'
                fontSize='2xl'
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: 'center', md: 'start' }}
                >
                    <Link to='/'>
                        <Text
                            textAlign={useBreakpointValue({
                                base: 'center',
                                md: 'left',
                            })}
                            fontFamily={'heading'}
                            fontWeight='bold'
                            color={useColorModeValue('gray.800', 'white')}
                            cursor='pointer'
                            fontStyle='italic'
                        >
                            Hutadoro
                        </Text>
                    </Link>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={14}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}
                >
                    <Button
                        aria-label='Toggle Color Mode'
                        onClick={toggleColorMode}
                        _focus={{ boxShadow: 'none' }}
                        w='fit-content'
                        borderRadius={'9999px'}
                        {...props}
                    >
                        {colorMode === 'light' ? (
                            <BsMoonStarsFill />
                        ) : (
                            <BsSun />
                        )}
                    </Button>
                    <Flex align={'center'}>
                        <Text fontSize={'15px'}>{user.name}</Text>
                        <Text marginLeft={'5px'} fontSize={'15px'}>
                            {user.surname}
                        </Text>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}
                            >
                                <IconButton
                                    aria-label='user-profile'
                                    borderRadius='3xl'
                                    icon={<FaRegUser />}
                                ></IconButton>
                            </MenuButton>
                            <MenuList>
                                <Link to='/profil'>
                                    <MenuItem fontSize='medium'>
                                        Profil
                                    </MenuItem>
                                </Link>
                                <MenuItem fontSize='medium'>
                                    Ustawienia
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem
                                    fontSize='medium'
                                    onClick={() => logout()}
                                >
                                    Wyloguj si??
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.700')

    return (
        <Stack direction={'row'} spacing={6} zIndex='99'>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link to={navItem.href ? `${navItem.href}` : '#'}>
                                <Text
                                    p={2}
                                    fontSize={'large'}
                                    fontWeight={500}
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        color: linkHoverColor,
                                    }}
                                >
                                    {navItem.label}
                                </Text>
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link to={href ? `${href}` : '#'}>
            <Box
                role={'group'}
                display={'block'}
                p={2}
                rounded={'md'}
                _hover={{ bg: useColorModeValue('white', 'gray.700') }}
            >
                <Stack direction={'row'} align={'center'}>
                    <Box>
                        <Text
                            transition={'all .3s ease'}
                            _groupHover={{ color: 'pink.400' }}
                            fontWeight={500}
                        >
                            {label}
                        </Text>
                        <Text fontSize={'sm'}>{subLabel}</Text>
                    </Box>
                    <Flex
                        transition={'all .3s ease'}
                        transform={'translateX(-10px)'}
                        opacity={0}
                        _groupHover={{
                            opacity: '100%',
                            transform: 'translateX(0)',
                        }}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}
                    >
                        <Icon
                            color={'pink.400'}
                            w={5}
                            h={5}
                            as={ChevronRightIcon}
                        />
                    </Flex>
                </Stack>
            </Box>
        </Link>
    )
}

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: '0!important' }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}
                >
                    {children &&
                        children.map((child) => (
                            <Text key={child.label} py={2}>
                                {child.label}
                            </Text>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

interface NavItem {
    label: string
    subLabel?: string
    children?: NavItem[]
    href?: string
}

const NAV_ITEMS: NavItem[] = [
    {
        label: 'Panel',
        href: '/',
    },
    {
        label: 'Organizacje',
        children: [
            {
                label: 'Za?????? organizacj??',
                subLabel:
                    'Za?????? now?? organizacj?? i popraw sw??j kontakt z pracownikami!',
                href: '/stworz-organizacje',
            },
            {
                label: 'Zarz??dzaj organizacjami',
                subLabel: 'Miej kontrol?? nad organizacjami!',
                href: '/',
            },
        ],
    },
    {
        label: 'Kontakt',
        href: '/kontakt',
    },
]
