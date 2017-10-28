import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Menu, Icon, Dropdown } from 'semantic-ui-react'
import { toggleModal, selectMenuAction } from '../actions'

const MenuTab = ({ isAuth, toggleModal, selectMenuAction }) => {
    return (
        <Menu.Menu position='right'>
            {
                isAuth ? (
                            <Dropdown item trigger={trigger} options={createOptions(selectMenuAction)}
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
const createOptions = (cb) => {
    return [
        { key : 'admin', disabled : true, text : <span>Logged in as <strong>Admin</strong></span>},
        { key : 'dashboard', onClick : () => cb('DASHBOARD') , text : 'Dashboard', icon : 'settings'},
        { key : 'logout', onClick : () => cb('LOGOUT', 'accessToken'), text : 'Log Out', icon : 'sign out'}
    ]
}
// const options = [
//     { key : 'admin', disabled : true, text : <span>Logged in as <strong>Admin</strong></span>},
//     { key : 'dashboard', onClick : () => selectMenuAction('DASHBOARD') , text : 'Dashboard', icon : 'settings'},
//     { key : 'logout', onClick : () => selectMenuAction('LOGOUT', 'accessToken'), text : 'Log Out', icon : 'sign out'}
// ]

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleModal, selectMenuAction }, dispatch)
}

export default connect(
    ({ auth : { isAuth }}) => ({isAuth}),
    { toggleModal, selectMenuAction } //mapDispatchToProps
)(MenuTab)

