import React from 'react';
import { connect } from 'react-redux'
import { Button, Menu, Icon, Dropdown } from 'semantic-ui-react'
import { toggleModal } from '../actions'

const MenuTab = ({ isAuth, toggleModal }) => {
    return (
        <Menu.Menu position='right'>
            {
                isAuth ? (
                            <Dropdown item trigger={trigger} options={options}
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
const options = [
    { key : 'admin', disabled : true, text : <span>Logged in as <strong>Admin</strong></span>},
    { key : 'dashboard', text : 'Dashboard', icon : 'settings'},
    { key : 'logout', text : 'Log Out', icon : 'sign out'}
]

export default connect(
    ({ auth : { isAuth }}) => ({isAuth}),
    { toggleModal }
)(MenuTab)

