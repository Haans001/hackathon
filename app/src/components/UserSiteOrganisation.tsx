import React from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import OwnerView from './OwnerView'
import UserView from './UserView'
import { Box } from '@chakra-ui/react'

const UserSiteOrganisation = () => {
    const { user } = useAuth()
    console.log(user)
    const organisationOwnerId: number = 5
    let { id } = useParams()
    console.log(id)
    return (
        <Box pt={'5rem'}>
            {organisationOwnerId === user.id ? <OwnerView /> : <UserView />}
        </Box>
    )
}

export default UserSiteOrganisation
