import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, FormSection} from 'redux-form'
import { InputField, DropdownField } from 'react-semantic-redux-form'
import { Form, Button, Segment } from 'semantic-ui-react'
import ContactProfile from './Contact'
import { validate } from '../utils'


//recieve value and onChange prop else make it a class to manage internal state
const Persona = ({ handleSubmit, sid , stud}) => {
    console.log('Sid is ', sid)
    console.log(stud)
    return (
        <Form onSubmit={handleSubmit}>
            <Segment color="green" style={{minHeight : 300}}>
                <FormSection name="persona">
                    <ContactProfile />

                    <Form.Group widths={3}>
                        <Field name="gender" id="gender-1" component={DropdownField} required
                        label="Gender" options={mapChoices(['M','F'])} selection
                        placeholder="Select Gender"
                        />
                        <Field name="birthdate" id="dob-1" component={InputField} required
                        label="Birthdate" type="date"
                        />
                        <Field name="nationality" id="nationality-1" component={InputField} required
                        label="Nationality"
                        />
                    </Form.Group>
                </FormSection>
            </Segment>

            <Button type='button' color="red">Cancel</Button>
            <Button type='submit' color="yellow">Next</Button>
    </Form>
    )
}

const mapChoices = (list) => {
    return list.map((sel, index) => ({
        key: `${sel}-1`,
        value: sel,
        text: sel})
)
}

const fields = ['gender', 'birthdate', 'nationality', 'addr1', 'addr2', 'state', 'city']

export default connect(
    (state, ownProps) => ({
        initialValues : state.students[ownProps.sid],
        stud : state.students[ownProps.sid]
    }),
    null
)(reduxForm(
    {
        form: "student",
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
        keepDirtyOnReinitialize: true,
        enableReinitialize: true,
        validate: validate(fields)
    }
)(
    Persona
))

