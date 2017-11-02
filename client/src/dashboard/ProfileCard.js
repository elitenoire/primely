import React from 'react'
import { Segment, List, Label, Icon, Image, Header, Card } from 'semantic-ui-react'


const ProfileCard = props => {
    const { name, location, gender, email, degree, course, color } = props
    const { firstName, middleName, lastName } = name
    return (
    <Card color={color}>
        <Label floating color="blue">{course}</Label>
        <Image fluid>
        <Segment basic inverted padded="very" color={color} textAlign="center">
            <Icon size="big" circular>
            <Header sub>{firstName[0]+lastName[0]}</Header>
            </Icon>
        </Segment>
        </Image>
        <Card.Content>
        <Card.Header>{`${firstName} ${middleName || ''} ${lastName}`}</Card.Header>
        <Card.Meta>
            <span>
            {location}
            </span>
        </Card.Meta>
        <Card.Description>
            <List verticalAlign="top">
            <List.Item>{gender}</List.Item>
            <List.Item>{email}</List.Item>
            <List.Item>{degree}</List.Item>
            </List>
        </Card.Description>
        </Card.Content>
    </Card>
    )
}

export default ProfileCard