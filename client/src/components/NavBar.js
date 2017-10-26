import React from 'react';
import MenuTab from '../containers/MenuTab'
import { Container, Menu, Header } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Container>
            <Menu fluid inverted secondary color="brown" size='massive'>
                <Menu.Item>
                    <Header inverted color="yellow" as="h1">Primely</Header>
                </Menu.Item>
                <MenuTab />
            </Menu>
        </Container>
    )
}

export default NavBar