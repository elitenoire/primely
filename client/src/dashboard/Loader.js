import React from 'react';
import {Dimmer, Icon, Header } from 'semantic-ui-react'

const Loader = ({ active }) => {
    return (
        <Dimmer active={active} page
        content={(<Header as="h1" color="yellow">
        <Icon color="yellow" loading name="asterisk"/>
        LOADING...
        </Header>)}
        />
    )
}

export default Loader