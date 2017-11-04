import React from 'react'
import { Container, Segment, Header, List, Label} from 'semantic-ui-react'


const ProfileData = ({ student, color }) => {
    const { persona, courseSelection, eduHistory } = student
    return (
        <Container fluid>
            <Segment.Group>
                <Segment color={color}>
                    <Header as="h3">Personal Details</Header>
                </Segment>
                <Segment.Group horizontal>
                    <Segment compact>
                        <Header as="h6" sub>Name</Header>
                        Edna Salma Bushnell
                    </Segment>
                    <Segment compact>
                        <Header as="h6" sub>Gender</Header>
                        Female
                    </Segment>
                    <Segment compact>
                        <Header sub>DOB</Header>
                        1992-06-23
                    </Segment>
                    <Segment compact>
                        <Header sub>Nationality</Header>
                        Belgian
                    </Segment>
                </Segment.Group>
                <Segment.Group horizontal>
                    <Segment>Email : edna15@outlook.com</Segment>
                    <Segment>08123456789</Segment>
                    <Segment>5 Hackeny Road, Hadnak, Sidpa</Segment>
                </Segment.Group>
                <Segment >
                    <Header as="h3">Educational History</Header>
                </Segment>
                <Segment.Group horizontal>
                    <Segment>School : Fair High College, Edo</Segment>
                    <Segment>Certificate : WASCE</Segment>
                    <Segment>Attended : from 2011-02 to 2017-05</Segment>
                </Segment.Group>
                <Segment >
                    <Header as="h3">Course</Header>
                </Segment>
                <Segment.Group horizontal>
                    <Segment>Degree : Architecture</Segment>
                    <Segment>Course : UFP</Segment>
                    <Segment>
                        Subjects :
                        <List horizontal>
                            <List.Item><Label color="green">Geology</Label></List.Item>
                            <List.Item><Label color="green">Physics</Label></List.Item>
                            <List.Item><Label color="green">Chemistry</Label></List.Item>
                        </List>
                    </Segment>
                </Segment.Group>
            </Segment.Group>
        </Container>
    )
}

export default ProfileData