import React from 'react';
import { connect } from 'react-redux'
import { Button, Menu, Icon, Dropdown } from 'semantic-ui-react'
import { toggleModal, selectMenuAction } from '../actions'
import { ACCESS_TOKEN } from '../constants'

const MenuTab = ({ isAuth, toggleModal, selectMenuAction, currentAdmin }) => {
    return (
        <Menu.Menu position='right'>
            {
                isAuth ? (
                            <Dropdown item trigger={trigger} options={createOptions(selectMenuAction, currentAdmin)}
                            icon={<Icon inverted color="yellow" name="dropdown" />}
                            />
                        )
                    : (
                        <Menu.Item>
                            <Button inverted color="yellow" size="mini" onClick={() => toggleModal('OPEN')}>
                                Log In
                            </Button>
                        </Menu.Item>
                    )
            }
        </Menu.Menu>
    )
}

const trigger = (<span><Icon inverted color="yellow" name="user" /> Admin</span>)
const createOptions = (cb, user) => {
    return [
        { key : 'admin', disabled : true, text : <span>Logged in as <strong>{user.username || ''}</strong></span>},
        { key : 'dashboard', onClick : () => cb('DASHBOARD') , text : 'Dashboard', icon : 'settings'},
        { key : 'logout', onClick : () => cb('LOGOUT', ACCESS_TOKEN), text : 'Log Out', icon : 'sign out'}
    ]
}


export default connect(
    ({ auth : { isAuth , currentAdmin} }) => ({isAuth, currentAdmin}),
    { toggleModal, selectMenuAction }
)(MenuTab)

