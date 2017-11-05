import React, {Component} from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Sidebar, Segment, Responsive, Accordion, Item,
    Menu, Icon, Header } from 'semantic-ui-react'
import { selectMenuAction } from '../actions'
import { ACCESS_TOKEN } from '../constants'

class Layout extends Component {
    state = { visible: false, active : false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleActiveState = () => this.setState({ active : !this.state.active})
    onLogOut = () => this.props.selectMenuAction('LOGOUT', ACCESS_TOKEN)

    render() {
    const { visible, active } = this.state
    const { match, children } = this.props
    console.log('In layout, match path is ', match.path)
    return (
        <div>
            <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu} animation='slide along' width='thin' color="brown"
                visible={visible} icon='labeled' vertical inverted
                >
                    <Menu.Item name='home' as={Link} to='/'>
                        <Segment basic>
                            <Header as="h2" color="yellow" inverted>Primely</Header>
                        </Segment>
                    </Menu.Item>
                    <Menu.Item name='dashboard' as={Link} to={`${match.path}`}>
                        <Icon name='home' color="yellow"/>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item name='students'>
                        <Icon name='student' color="yellow"/>
                        <Accordion inverted fluid>
                            <Accordion.Title
                                active={active}
                                content='Students'
                                onClick={this.toggleActiveState}
                            />
                            <Accordion.Content active={active}>
                                <Item as={Link} to={`${match.path}/students/new`}
                                header={(<Header inverted color="yellow" as="h6"><Icon name="write" color="yellow" />Add New</Header>)}
                                />
                                <Item as={Link} to={`${match.path}/students`}
                                header={(<Header inverted color="yellow" as="h6"><Icon name="list" color="yellow" />View</Header>)}
                                />
                            </Accordion.Content>
                        </Accordion>
                    </Menu.Item>
                    <Menu.Item name='logout' onClick={this.onLogOut}>
                        <Icon name='sign out' color="yellow"/>
                        LogOut
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher>
                    <Segment basic inverted color="brown">
                        <Menu borderless inverted color="brown">
                            <Menu.Item name='toggle' icon onClick={this.toggleVisibility}>
                                <Icon name="sidebar" color="yellow" />
                            </Menu.Item>
                            <Menu.Item name='dashboard'>
                                <Header as="h2" color="yellow">Dashboard</Header>
                            </Menu.Item>
                            <Menu.Item name='profile' fitted position='right'onClick={this.handleItemClick}>
                                <Responsive
                                {...Responsive.onlyMobile}
                                as={Header}
                                icon={(<Icon name="user" color="yellow" circular />)}
                                />
                                <Responsive
                                as={Header}
                                content="Online 3mins ago"
                                color="yellow"
                                icon={(<Icon name="user" color="yellow" circular link />)}
                                minWidth={Responsive.onlyTablet.minWidth}
                                />
                            </Menu.Item>
                        </Menu>
                    </Segment>

                    <Segment basic padded secondary textAlign="center" style={{ minHeight: 500}} >
                        {children}
                    </Segment>

                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
        )
    }
}

export default connect(null , { selectMenuAction } )(Layout)

