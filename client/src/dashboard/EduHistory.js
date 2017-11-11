import React from 'react';
// import { connect } from 'react-redux'
import {Field, FormSection, reduxForm } from 'redux-form'
import { Form, Button, Segment } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form'

const EduHistory = ({ handleSubmit, previousStep, onCancel }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Segment color="green" style={{minHeight : 300}}>
                <FormSection name="eduHistory">
                    <Field name="school" id="school-1" component={InputField} required
                    label="School Name" placeholder="Fairfield Montessori High School, VI"
                    />

                    <Form.Group widths={2}>
                        <Field name="state" id="state-1" component={InputField} required
                        label="State" placeholder="Lagos"
                        />
                        <Field name="cert" id="cert-1" component={InputField} required
                        label="Certificate" placeholder="WASCE"
                        />
                    </Form.Group>

                    <FormSection name="attended">
                        <Form.Group inline>
                            <label>Year Attended</label>
                            <Field name="from" id="yrFrom-1" component={InputField}
                            label="From" type="month"
                            />
                            <Field name="to" id="yrTo-1" component={InputField} required
                            label="To" type="month"
                            />
                        </Form.Group>
                    </FormSection>
                </FormSection>
            </Segment>
            <Button onClick={previousStep} type="button" color="brown" floated="left">Back</Button>
            <Button onClick={onCancel} type="button" color="red">Cancel</Button>
            <Button type="submit" color="yellow">Next</Button>
        </Form>
    )
}


export default reduxForm (
        {
            form: "student",
            destroyOnUnmount: false,
            forceUnregisterOnUnmount: true,
            keepDirtyOnReinitialize: true,
            enableReinitialize: true,
        }
    )(
        EduHistory
    )




