import React, {Component} from "react";
import Dashboard from './Dashboard'
import StudentProfile from './StudentProfile'
import { Sidebar, Segment, Divider, Responsive,
    Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class Layout extends Component {
    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
    const { visible } = this.state
    return (
        <div>
            <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu} animation='slide along' width='thin' color="brown"
                visible={visible} icon='labeled' vertical inverted>
                <Menu.Item name='home'>
                    <Segment basic>
                    <Header as="h2" color="yellow" inverted>Primely</Header>
                    </Segment>
                </Menu.Item>
                <Menu.Item name='dashboard'>
                    <Icon name='home' color="yellow"/>
                    Dashboard
                </Menu.Item>
                <Menu.Item name='students'>
                    <Icon name='student' color="yellow" />
                    Students
                </Menu.Item>
                <Menu.Item name='logout'>
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
                <Segment basic padded secondary textAlign="center">
                    <StudentProfile />
                </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
        )
    }
}

export default Layout
