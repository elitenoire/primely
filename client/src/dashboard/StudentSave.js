import React, {Component} from 'react'
import { Step, Segment, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import StudentForm from './StudentForm'
import { submitStudent } from '../actions' //here or in studentNew component?



//Pass mode and match : {params} prop to StudentForm
class StudentSave extends Component {
    constructor(props){
        super(props)
        this.past = { active: false, disabled: true, completed: true }
        this.present = { active: true, disabled: false, completed: false }
        this.future = { active: false, disabled: true, completed: false }
        this.state = { step: 1, persona: this.present, eduhistory: this.future, courses: this.future
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit = values => {
        const { mode, submitStudent, match : {params} } = this.props
        submitStudent(formName, values, mode, params.id)
    }

    renderSteps = () => {
        return [
            { key: 'persona', ...this.state.persona, title: 'Persona', description: 'Personal Details' },
            { key: 'eduhistory', ...this.state.eduhistory, title : 'Past Education', description: 'Last Educational Experience' },
            { key: 'courses', ...this.state.courses, title: 'Courses', description: 'Program and Course Selection' },
        ]
    }

    nextStep = () => {
        const newStep = this.state.step + 1
        let newState = { persona: this.past, eduhistory: this.present }
        if(newStep === 3)  {newState = {eduhistory : this.past, courses : this.present}}
        this.setState({ ...this.state, step: newStep, ...newState })
    }

    previousStep = () => {
        const newStep = this.state.step - 1
        let newState = { persona: this.present, eduhistory: this.future }
        if(newStep === 2) {newState = {eduhistory : this.present, courses : this.future}}
        this.setState({ ...this.state, step: newStep, ...newState })
    }

    render() {
    const { mode , match : {params} } = this.props
    return (
            <Segment basic textAlign="center">
                <Header>{`${mode} FORM`}</Header>
                <Step.Group attached="top" items={this.renderSteps()} stackable="tablet" ordered/>
                <Segment stacked attached textAlign="right" style={{ minHeight: 500}}>
                    <StudentForm
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        onSubmit={this.onSubmit}
                        step={this.state.step}
                        id={params.id}
                    />
                </Segment>
            </Segment>
        )
    }
}

const formName = 'student'

export default connect(null, {submitStudent} )(StudentSave)
