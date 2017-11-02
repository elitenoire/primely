import React, { Component } from 'react'
import { Label, Table, Image, Segment, Container, Icon, Header} from 'semantic-ui-react'
import AvatarName from './AvatarName'

class StudentList extends Component {
    constructor(){
        super()
        this.headers = ['#', 'Student', 'Gender', 'Email', 'Course', 'Location']
        this.colors = { alevels : 'violet', gcse : 'green', ufp : 'blue'}
    }

    renderHeader = () => {
        return this.headers.map(header => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
        ))
    }

    renderCell = (data) => {
        return data.map((field, index) => (
            <Table.Cell key={`cell-${index}`}>
                {field}
            </Table.Cell>
        ))
    }

    renderRow = () => {
        return Object.keys(students).reduce((list,id,index) => {
            const data = [index+1,
                (<AvatarName
                    first={students[id].persona.name.firstName}
                    middle={students[id].persona.name.middleName}
                    last={students[id].persona.name.lastName}
                />),
                students[id].persona.gender,
                students[id].persona.contact.email,
                (<Label
                    color={this.colors[students[id].courseSelection.course]}
                    content={students[id].courseSelection.course}
                />),
                students[id].persona.contact.address.state]

            list.push(
                <Table.Row key={`row-${index}`}>
                    {this.renderCell(data)}
                </Table.Row>
            )
            return list
        }, [])
    }

    render(){
        return (
            <Container>
                <Segment >
                    <Table basic='very' columns={this.headers.length}
                    padded collapsing selectable>
                        <Table.Header>
                            <Table.Row>
                            {this.renderHeader()}
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.renderRow()}
                        </Table.Body>
                    </Table>

                </Segment>
            </Container>
        )
    }
}

export default StudentList


































