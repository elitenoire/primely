import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
//import PropTypes from 'prop-types'
import Persona from './Persona'
import NextKin from './NextKin'
import EduHistory from './EduHistory'
import Courses from './Courses'

class StudentForm extends Component {
    state = { step: 1  }

    nextStep = () => {
        this.setState({ step: this.state.step + 1 })
    }

    previousStep = () => {
        this.setState({ step: this.state.step - 1 })
    }

    // Passed in as prop in example -> handles last step submission
    onSubmit = (values) => {
        console.log(values)
    }

    render() {
        //const { onSubmit } = this.props
        const { step } = this.state
        return (
            <div>
                {step === 1 && (
                    <Persona 
                    onSubmit={this.nextStep}
                    />
                )}
                {step === 2 && (
                    <NextKin
                    previousStep={this.previousStep}
                    onSubmit={this.nextStep}
                    />
                )}
                {step === 3 && (
                    <EduHistory
                    previousStep={this.previousStep}
                    onSubmit={this.nextStep}
                    />
                )}
                {step === 4 && (
                    <Courses
                    previousStep={this.previousStep}
                    onSubmit={this.onSubmit}
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
