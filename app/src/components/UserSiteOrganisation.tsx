import React from 'react'
import { useParams } from 'react-router-dom'

const UserSiteOrganisation = () => {
    let { id } = useParams()
    console.log(id)
    return <div>UserSiteOrganisation</div>
}

export default UserSiteOrganisation
