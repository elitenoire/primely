import React from 'react'
import { Field, reduxForm, FormSection} from 'redux-form'
import { InputField, DropdownField } from 'react-semantic-redux-form'
import { Form, Button, Segment } from 'semantic-ui-react'
import ContactProfile from './Contact'
import { validate } from '../utils'


//recieve value and onChange prop else make it a class to manage internal state
const Persona = ({ handleSubmit, ownProps, onCancel, sid , stud, fieldList}) => {
    //console.log('Sid iniitial values is ', sid)
    console.log(fieldList)
    //console.log(ownProps)
    return (
        <Form onSubmit={handleSubmit}>
            <Segment color="green" style={{minHeight : 300}}>
                <FormSection name="persona">
                    <ContactProfile />

                    <Form.Group widths={3}>
                        <Field name="gender" id="gender-1" component={DropdownField}
                        label="Gender" options={mapChoices(['M','F'])} selection
                        placeholder="Select Gender"
                        />
                        <Field name="birthdate" id="dob-1" component={InputField}
                        label="Birthdate" type="date"
                        />
                        <Field name="nationality" id="nationality-1" component={InputField}
                        label="Nationality"
                        />
                    </Form.Group>
                </FormSection>
            </Segment>

            <Button onClick={onCancel} type='button' color="red">Cancel</Button>
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

const fields = ['gender', 'birthdate', 'nationality', 'contact.email', 'contact.phone',
'contact.address.addr1', 'contact.address.addr2', 'contact.address.state', 'contact.address.city',
'name.firstName', 'name.lastName', 'name.middleName']

export default reduxForm(
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
)

