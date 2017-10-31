import React from 'react'
import {Field, FormSection, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'
import { InputField, RadioField } from 'react-semantic-redux-form'
import ContactProfile from './Contact'


const NextKin = ({handleSubmit, previousStep}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <FormSection name="nextKin">
                <Form.Group inline >
                    <label>Title</label>
                    <Field name="title1" id="mr-1" component={RadioField} label="Mr" />
                    <Field name="title2" id="mrs-1" component={RadioField} label="Mrs" />
                    <Field name="title3" id="ms-1" component={RadioField} label="Ms" />
                </Form.Group>

                <ContactProfile />

                <Field name="relship" id="relship-1" component={InputField} required
                label="Relationship" placeholder="Mother"
                />
            </FormSection>

            <Button onClick={previousStep} type='button' color="brown" floated="left">Back</Button>
            <Button type='button' color="red">Cancel</Button>
            <Button type='submit' color="yellow">Next</Button>
        </Form>
    )
}


export default reduxForm(
    {
        form: "student",
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true
    }
)(
    NextKin
)
