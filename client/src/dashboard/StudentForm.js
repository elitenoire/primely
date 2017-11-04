import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import Persona from './Persona'
//import NextKin from './NextKin'
import EduHistory from './EduHistory'
import Courses from './Courses'

//import submitStudent from '../actions' //here or in studentNew component?

class StudentForm extends Component {

    render() {
        //const { onSubmit } = this.props
        const { step, nextStep, previousStep, onSubmit} = this.props
        return (
            <div>
                {step === 1 && (
                    <Persona 
                    onSubmit={nextStep}
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
                    />
                )}
                {step === 3 && (
                    <Courses
                    previousStep={previousStep}
                    onSubmit={onSubmit}
                    />
                )}
            </div>
        )
    }
}

// StudentForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

const formName = 'student'

export default reduxForm({
    form: formName //helps to clear out form when unmounted like cancelling/navigating away
}
)(StudentForm)
