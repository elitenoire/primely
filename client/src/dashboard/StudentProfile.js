import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Menu, Icon} from 'semantic-ui-react'
import { getSingleStudent, deleteStudent, editStudent,
    cancelModal, openModal } from '../actions'
import ProfileCard from './ProfileCard'
import ProfileData from './ProfileData'
import DeleteModal from './DeleteModal'


class StudentProfile extends Component {
    //state = {}

    //handleContextRef = contextRef => this.setState({ contextRef })
    componentDidMount(){
        const { id } = this.props.match.params
        this.props.getSingleStudent(id)
    }

    onDelete = () => {
        this.props.openModal()
    }
    onEdit = () => {
        const { id } = this.props.match.params
        this.props.editStudent(id)
    }
    onDeleteModal = () => {
        const { id } = this.props.match.params
        this.props.deleteStudent(id)
    }
    onCancel = () => {
        this.props.cancelModal()
    }



    render(){
        //const { contextRef } = this.state
        const { deleteModal } = this.props
        const { student : { courseSelection, persona : {contact, name, gender }}} = this.props
        return (
        <Grid container centered doubling stackable columns={2}>
            <Grid.Column>
                <ProfileCard
                    location={contact.address.state}
                    color="brown"
                    gender={gender}
                    email={contact.email}
                    degree={courseSelection.degree}
                    course={courseSelection.course}
                    name={name}
                />
                <Menu icon vertical color="orange" inverted>
                    <Menu.Item name='edit' onClick={this.onEdit}>
                        <Icon name='write' />
                    </Menu.Item>

                    <Menu.Item name='delete' onClick={this.onDelete}>
                        <Icon name='video camera' />
                    </Menu.Item>
                </Menu>

                <DeleteModal
                open={deleteModal}
                onCancel={this.onCancel}
                onConfirm={this.onDeleteModal}
                />

            </Grid.Column>

            <Grid.Column >
                <ProfileData color="brown" student={this.props.student} />
            </Grid.Column>
        </Grid>
        )
    }
}

const mapStateToProps = ({ students : { students, isFetching, deleteModal } }, ownProps) => {
    return {student : students[ownProps.match.params.id], isFetching, deleteModal}
}

export default connect(
    mapStateToProps,
    { getSingleStudent, deleteStudent, editStudent, cancelModal, openModal }
)(StudentProfile)

