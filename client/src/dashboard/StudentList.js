import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { Label, Table, Image, Segment, Container, Icon, Header} from 'semantic-ui-react'
import AvatarName from './AvatarName'
import { getStudents } from '../actions'
//For test purpose: Please refactor out when connected to redux store
import { list } from './seed'

class StudentList extends Component {
    constructor(){
        super()
        this.headers = ['#', 'Student', 'Gender', 'Email', 'Course', 'Location']
        this.colors = { alevels : 'violet', gcse : 'green', ufp : 'blue'}
    }

    componentDidMount(){
        console.log('about to dispatch action')
        this.props.getStudents()
        console.log('get students in studentlist dispatched')
    }

    renderHeader = () => {
        return this.headers.map(header => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
        ))
    }

    renderCell = (data, id) => {
        const { match } = this.props
        return data.map((field, index) => (
            <Table.Cell key={`cell-${index}`}>
                <NavLink activeClassName="active" to={`${match.path}/${id}`}>{field}</NavLink>
            </Table.Cell>
        ))
    }

    renderRow = (students) => {
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
                    {this.renderCell(data, id)}
                </Table.Row>
            )
            return list
        }, [])
    }

    render(){
        const { students } = this.props
        return (
            <Container>
                <Segment >
                    <Table basic='very' columns={this.headers.length}
                    padded stackable selectable>
                        <Table.Header>
                            <Table.Row>
                            {this.renderHeader()}
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.renderRow(students)}
                        </Table.Body>
                    </Table>
                </Segment>
            </Container>
        )
    }
}

export default connect(
    ({students : { students, isFetching}}) => ({ students, isFetching}),
    { getStudents }
)(
    StudentList
)


































