import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Grid, Menu, Icon } from 'semantic-ui-react'
import { getSingleStudent, deleteStudent, editStudent,
    cancelModal, openModal } from '../actions'
import ProfileCard from './ProfileCard'
import ProfileData from './ProfileData'
import DeleteModal from './DeleteModal'
import Loader from './Loader'


class StudentProfile extends Component {

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
        const { deleteModal, isFetching, student } = this.props
        const fetched = !isFetching

        return (
        <Grid container centered doubling stackable columns={3}>
            <Grid.Column width={5}>
                {fetched && (
                <div>
                <ProfileCard
                    location={student.persona.contact.address.state}
                    color="brown"
                    gender={student.persona.gender}
                    email={student.persona.contact.email}
                    degree={student.courseSelection.degree}
                    course={student.courseSelection.course}
                    name={student.persona.name}
                />
                </div>
                )}
                <Loader active={isFetching}/>

                <DeleteModal
                open={deleteModal}
                onCancel={this.onCancel}
                onConfirm={this.onDeleteModal}
                />


            </Grid.Column>

            <Grid.Column width={2} verticalAlign="middle">
                { fetched && (<Menu icon compact color="yellow" inverted>
                    <Menu.Item name='edit' onClick={this.onEdit}>
                        <Icon color="brown" name='edit' />
                    </Menu.Item>

                    <Menu.Item name='delete' onClick={this.onDelete}>
                        <Icon color="brown" name='trash outline' />
                    </Menu.Item>
                </Menu>
                )}
            </Grid.Column>

            <Grid.Column  stretched width={9}>
                { fetched && (<ProfileData color="brown" student={student} />) }
            </Grid.Column>
        </Grid>
        )
    }
}

const mapStateToProps = ({ students : { students, isFetching, deleteModal } }, ownProps) => {
    return {student : students[ownProps.match.params.id], isFetching, deleteModal }
}

export default connect(
    mapStateToProps,
    { getSingleStudent, deleteStudent, editStudent, cancelModal, openModal }
)(
    StudentProfile
)
