import React from 'react';
import { Segment, Container, Header,
    Icon, Label, Statistic } from 'semantic-ui-react'
import { filterCourse } from '../utils'


// Undefined/null students throws error : make sure it's not empty
const AdminStats = ({loading, students}) => {
    return (
        <Container>
            <Segment basic loading={loading}>
            <Segment clearing attached="top" color="orange" tertiary inverted style={{ border: 'none' }}>
                <Label color="red" ribbon icon="pin" content="Overview"/>
                <span style={{ color: '#000', fontWeight: 'bold' }}>Enrolled Students</span>
            </Segment>
            {loading || Object.keys(students).length === 0 && (
                <Segment attached color="yellow" textAlign="center" tertiary inverted style={{ border: 'none' }}>
                    Fetching students stats...
                </Segment>)}
            {!loading && generateStats(fields, filterCourse(students))}
            <Segment attached="bottom" color="brown" tertiary inverted style={{ border: 'none' }}></Segment>
            </Segment>
        </Container>
    )
}

const fields = {
    ALevels : { color : 'violet', content : 'A-Levels' },
    GCSE : { color : 'green', content : 'GCSE' },
    UFP : { color : 'blue', content : 'UFP' }
}

const generateStats = (fields, count) => {
    return Object.keys(fields).map((field, index) => {
        return (
            <Segment key={`field-${index}`} clearing attached color="yellow" tertiary inverted style={{ border: 'none' }}>
                <Statistic color="red" floated="right" label={`Student${count[field] === 1?'':'s'}`} value={count[field] || 0} />
                <Label color={fields[field].color} size="large" horizontal>{fields[field].content}</Label>
                <Header as="h5" disabled><Icon color={fields[field].color} name="info" circular /></Header>
            </Segment>
        )
    })
}
export default AdminStats



// <Segment clearing attached color="yellow" tertiary inverted style={{ border: 'none' }}>
// <Statistic color="red" floated="right" label="Students" value="5" />
// <Label color="violet" size="large" horizontal>A-Levels</Label>
// <Header as="h5" disabled><Icon color='violet' name="info" circular /></Header>             
// </Segment>
// <Segment clearing attached color="yellow" tertiary inverted style={{ border: 'none' }}>
// <Statistic color="red" floated="right" label="Students" value="5" />
// <Label color='green' size="large" horizontal>GCSE</Label>
// <Header as="h5" disabled><Icon color='green' name="info" circular /></Header>
// </Segment>
// <Segment clearing attached color="yellow" tertiary inverted style={{ border: 'none' }}>
// <Statistic color="red" floated="right" label="Students" value="5" />
// <Label color='blue' size="large" horizontal>UFP</Label>
// <Header as="h5" disabled ><Icon color='blue' name="info" circular /></Header>
// </Segment>