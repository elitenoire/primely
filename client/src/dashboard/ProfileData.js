import React from 'react'
import { Container, Segment, Header, List, Label} from 'semantic-ui-react'

const listHelper = (list) => {
    return list.map((subject,index) => {
        return (
            <List.Item key={`sub-${index}`}><Label color="yellow">{subject}</Label></List.Item>
        )
    })
}


const ProfileData = ({ student, color }) => {
    const { persona, courseSelection, eduHistory : {school, state, cert, attended} } = student
    const { gender, birthdate, nationality, contact : {email, phone, address}} = persona
    return (
        <Container fluid>
            <Segment.Group>
                <Segment color={color}>
                    <Header as="h3">Personal Details</Header>
                </Segment>
                <Segment.Group horizontal>
                    <Segment compact>
                        <Header as="h6" sub>Name</Header>
                        {`${persona.name.firstName} ${persona.name.middleName || ''} ${persona.name.lastName}`}
                    </Segment>
                    <Segment compact>
                        <Header as="h6" sub>Gender</Header>
                        {gender}
                    </Segment>
                    <Segment compact>
                        <Header sub>DOB</Header>
                        {birthdate}
                    </Segment>
                    <Segment compact>
                        <Header sub>Nationality</Header>
                        {nationality}
                    </Segment>
                </Segment.Group>
                <Segment.Group horizontal>
                    <Segment compact>
                        <Header as="h6" sub>Email</Header>
                        {email}
                        </Segment>
                    <Segment compact>
                        <Header as="h6" sub>Phone</Header>
                        {phone}
                    </Segment>
                    <Segment compact>
                        <Header as="h6" sub>Address</Header>
                        {`${address.addr1}, ${address.addr2 || ''} ${address.city}, ${address.state}`}
                    </Segment>
                </Segment.Group>
                <Segment >
                    <Header as="h3">Educational History</Header>
                </Segment>
                <Segment.Group horizontal>
                    <Segment compact>
                        <Header as="h6" sub>School</Header>
                        {`${school}, ${state}`}
                    </Segment>
                    <Segment>
                        <Header as="h6" sub>Certificate</Header>
                        {cert}
                    </Segment>
                    <Segment compact>
                        <Header as="h6" sub>Attended</Header>
                        {`From :${attended.from || ''}`}
                        {'  '}
                        {`To :${attended.to}`}
                    </Segment>
                </Segment.Group>
                <Segment >
                    <Header as="h3">Course</Header>
                </Segment>
                <Segment.Group horizontal>
                    <Segment compact>
                        <Header as="h6" sub>Degree</Header>
                        {courseSelection.degree}
                    </Segment>
                    <Segment compact>
                        <Header as="h6" sub>Course</Header>
                        {courseSelection.course}
                    </Segment>
                    <Segment compact>
                        <Header as="h6" sub>Subjects</Header>
                        <List horizontal>
                            {listHelper(courseSelection.subjects)}
                        </List>
                    </Segment>
                </Segment.Group>
            </Segment.Group>
        </Container>
    )
}

export default ProfileData
