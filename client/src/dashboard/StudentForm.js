import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Persona from './Persona'
import EduHistory from './EduHistory'
import Courses from './Courses'
import { watchForm } from '../actions'


class StudentForm extends Component {
    componentDidMount(){
        this.props.watchForm()
    }
    render(){
    const { step, nextStep, previousStep, onSubmit, onCancel } = this.props
    return (
        <div>
            {step === 1 && (
                <Persona 
                onSubmit={nextStep}
                onCancel={onCancel}
                />
            )}
            {step === 2 && (
                <EduHistory
                previousStep={previousStep}
                onSubmit={nextStep}
                onCancel={onCancel}
                />
            )}
            {step === 3 && (
                <Courses
                previousStep={previousStep}
                onSubmit={onSubmit}
                onCancel={onCancel}
                />
            )}
        </div>
    )}
}



const formName = 'student'

export default connect(
    (state, ownProps) => ({
        initialValues : state.students.students[ownProps.id]
    }),
    { watchForm }
)(reduxForm({
    form: formName, //helps to clear out form when unmounted like cancelling/navigating away
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
}
)(StudentForm))


