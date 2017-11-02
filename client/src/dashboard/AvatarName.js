import React from 'react'
import Avatar from './Avatar'
import { Header, Image } from 'semantic-ui-react'

const AvatarName = props => {
    const { first, middle, last} = props
    return (
    <Header as='h4'>
        <Image inline>
        <Avatar size={'large'}>{first[0].toUpperCase()+last[0].toUpperCase()}</Avatar>
        </Image>
        <Header.Content>
        {first}
        <Header.Subheader>
            <span>{middle}{' '}{last}</span>
        </Header.Subheader>
        </Header.Content>
    </Header>
    )
}

export default AvatarName