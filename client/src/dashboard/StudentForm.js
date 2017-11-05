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
        this.props.initialize(this.props.initData)
    }
    render(){
    const { id, step, nextStep, previousStep, onSubmit, onCancel} = this.props
    return (
        <div>
            {step === 1 && (
                <Persona 
                onSubmit={nextStep}
                onCancel={onCancel}
                sid={id}
                />
            )}
            {step === 2 && (
                <EduHistory
                previousStep={previousStep}
                onSubmit={nextStep}
                onCancel={onCancel}
                sid={id}
                />
            )}
            {step === 3 && (
                <Courses
                previousStep={previousStep}
                onSubmit={onSubmit}
                onCancel={onCancel}
                sid={id}
                />
            )}
        </div>
    )}
}


// StudentForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

const formName = 'student'

export default connect(
    (state, ownProps) => ({
        initData : state.students[ownProps.id]
    }),
    { watchForm }
)(reduxForm({
    form: formName, //helps to clear out form when unmounted like cancelling/navigating away
    destroyOnUnmount: false,
    enableReinitialize: true,
}
)(StudentForm))
