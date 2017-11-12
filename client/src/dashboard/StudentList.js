import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Label, Table, Segment, Container, Button } from 'semantic-ui-react'
import AvatarName from './AvatarName'
import DeleteModal from './DeleteModal'
import Loader from './Loader'
import Toast from './Toast'
import { getStudents, deleteStudent, cancelModal, openModal } from '../actions'

class StudentList extends Component {
    constructor(){
        super()
        this.headers = ['#', 'Student', 'Gender', 'Email', 'Course', 'Location']
        this.colors = { ALevels : 'violet', GCSE : 'green', UFP : 'blue'}
    }

    componentDidMount(){
        this.props.getStudents()
    }

    onDelete = (id) => {
        this.props.openModal(id)
    }
    onDeleteModal = () => {
        this.props.deleteStudent()
    }
    onCancel = () => {
        this.props.cancelModal()
    }

    renderHeader = () => {
        return this.headers.map(header => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
        ))
    }

    renderCell = (data, id) => {
        const { match } = this.props
        return data.map((field, index, array) => (
            <Table.Cell key={`cell-${index}`}>
                <NavLink style={{color : '#000'}} to={`${match.path}/${id}`}>{field}</NavLink>
                {array.length-1 === index && (
                    <Button basic circular compact
                    color="red"
                    size="mini"
                    floated="right"
                    icon="delete"
                    onClick={()=>this.onDelete(id)} />
                )}
            </Table.Cell>
        ))
    }

    renderRow = (students) => {
        if(Object.keys(students).length === 0){
            return (
                    <Table.Row textAlign="center">
                        <Table.HeaderCell colSpan={this.headers.length}>
                            No Student record found
                        </Table.HeaderCell>
                    </Table.Row>
                )
        }
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
        const { students, isFetching, deleteModal } = this.props
        return (
            <Container>
                <Segment >
                    <Table basic='very' striped definition verticalAlign="middle"
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

                <Loader active={isFetching} />

                <Toast />

                <DeleteModal
                open={deleteModal}
                onCancel={this.onCancel}
                onConfirm={this.onDeleteModal}
                />

            </Container>
        )
    }
}

export default connect(
    ({students : { students, isFetching, deleteModal }}) => ({ students, isFetching, deleteModal }),
    { getStudents, deleteStudent, cancelModal, openModal }
)(
    StudentList
)


































