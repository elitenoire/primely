import React from 'react';
import {Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'
import { LabelInputField } from 'react-semantic-redux-form'

const eduHistory = () => {
    return (
        <Form>
            <Form.Input required label='School Name' placeholder='Fairfield Montessori High School, VI' />

            <Form.Group widths={2}>
                <Form.Input required label='State' placeholder='Lagos' />
                <Form.Input required label='Certificate' placeholder='WASCE' />
            </Form.Group>
            <Form.Group inline>
                <label>Year Attended</label>
                <Form.Input label='From' type="month" />
                <Form.Input required label='To' type="month" />
            </Form.Group>

            <Button type='button' color="brown" floated="left">Back</Button>
            <Button type='button' color="red">Cancel</Button>
            <Button type='submit' color="yellow">Next</Button>
        </Form>
    )
}

export const eduHistory