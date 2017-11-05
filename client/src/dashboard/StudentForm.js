import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Persona from './Persona'
//import NextKin from './NextKin'
import EduHistory from './EduHistory'
import Courses from './Courses'

//import submitStudent from '../actions' //here or in studentNew component?

class StudentForm extends Component {
    componentDidMount(){
        this.props.initialize(this.props.initData)
    }
    render(){
    const { id, step, nextStep, previousStep, onSubmit} = this.props
    return (
        <div>
            {step === 1 && (
                <Persona 
                onSubmit={nextStep}
                sid={id}
                />
            )}
            {/* {step === -5 && (
                <NextKin
                previousStep={previousStep}
                onSubmit={nextStep}
                />
            )} */}
            {step === 2 && (
                <EduHistory
                previousStep={previousStep}
                onSubmit={nextStep}
                sid={id}
                />
            )}
            {step === 3 && (
                <Courses
                previousStep={previousStep}
                onSubmit={onSubmit}
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
    })
)(reduxForm({
    form: formName, //helps to clear out form when unmounted like cancelling/navigating away
    destroyOnUnmount: false,
    enableReinitialize: true,
}
)(StudentForm))
