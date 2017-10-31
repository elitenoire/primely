import React from 'react'
import { Field, reduxForm, FormSection} from 'redux-form'
import { InputField, RadioField } from 'react-semantic-redux-form'
import { Form, Button } from 'semantic-ui-react'
import ContactProfile from './Contact'

//recieve value and onChange prop else make it a class to manage internal state
const Persona = ({ handleSubmit }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <FormSection name="persona">
                <ContactProfile />

                <Form.Group inline >
                    <label>Gender</label>
                    <Field name="gender1" id="male-1" component={RadioField} label="Male" value="M" />
                    <Field name="gender2" id="female-1" component={RadioField} label="Female" value="F" />
                </Form.Group>

                <Form.Group widths={2}>
                    <Field name="birthdate" id="dob-1" component={InputField} required
                    label="Birthdate" type="date"
                    />
                    <Field name="nationality" id="nationality-1" component={InputField} required
                    label="Nationality"
                    />
                </Form.Group>
            </FormSection>

            <Button type='button' color="red">Cancel</Button>
            <Button type='submit' color="yellow">Next</Button>
    </Form>
    )
}

// const validate = values => {
//     const required = ['title', 'birthdate', 'nationality']
//     return required.reduce((errors, field) => {
//         if (!values[field]) {
//             // errors[field] = `${field[0].toUpperCase() + field.slice(1)} must not be empty.`
//             errors[field] = 'Required'
//         }
//         return errors
//     }, {})
// }

export default reduxForm(
    {
        form: "student",
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true
    }
)(
    Persona
)

