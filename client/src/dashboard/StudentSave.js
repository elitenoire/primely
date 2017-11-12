import React, {Component} from 'react'
import { Step, Segment, Header, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import StudentForm from './StudentForm'
import Toast from './Toast'
import { submitStudent, cancelStudent } from '../actions'

class StudentSave extends Component {
    constructor(props){
        super(props)
        this.errorStyle =  { completed: false, icon: (<Icon color="red" name="delete" />) }
        this.past = { active: false, disabled: true, completed: true }
        this.present = { active: true, disabled: false, completed: false }
        this.future = { active: false, disabled: true, completed: false }
        this.state = { step: 1, persona: this.present, eduHistory: this.future, courseSelection: this.future
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit = values => {
        const { mode, submitStudent, match : {params} } = this.props
        submitStudent(formName, values, mode, params.id)
    }

    onCancel = () => {
        const { mode, cancelStudent, match : {params} } = this.props
        cancelStudent(formName, mode, params.id)
    }

    renderSteps = () => {
        let items =  [
            { key: 'persona', ...this.state.persona, title: 'Persona', description: 'Personal Details' },
            { key: 'eduHistory', ...this.state.eduHistory, title : 'Past Education', description: 'Last Educational Experience' },
            { key: 'courseSelection', ...this.state.courseSelection, title: 'courseSelection', description: 'Program and Course Selection' },
        ]
        items.forEach(item => {
            if (this.props.submitErrors[item.key]){
                Object.assign(item, this.errorStyle)
            }
            })
        return items
    }

    errCheck = (section) => {
        if(this.props.submitErrors[section])
            return {}
        return {icon : false}
        }

    nextStep = () => {
        const newStep = this.state.step + 1
        let newState = { persona: {...this.past, ...this.errCheck('persona')}, eduHistory: this.present }
        if(newStep === 3)  {newState = {eduHistory : { ...this.past, ...this.errCheck('eduHistory')}, courseSelection : this.present}}
        this.setState({ ...this.state, step: newStep, ...newState })
    }

    previousStep = () => {
        const newStep = this.state.step - 1
        let newState = { persona: this.present, eduHistory: this.future }
        if(newStep === 2) {newState = {eduHistory : this.present, courseSelection : this.future}}
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
                        onCancel={this.onCancel}
                        step={this.state.step}
                        id={params.id}
                    />
                </Segment>
                <Toast />
            </Segment>
        )
    }
}

const formName = 'student'

const mapStateToProps = state => {
    return { submitErrors : state.form.student ? state.form.student.submitErrors || {} : {} }
}

export default connect(mapStateToProps, {submitStudent, cancelStudent} )(StudentSave)