import React from 'react'
import {Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'
import { LabelInputField, RadioField } from 'react-semantic-redux-form'


const NextKin = ({ value, onChange}) => {
    return (
        <Form>
        <Form.Group inline >
          <label>Title</label>
          <Form.Field control={Radio} label='Mr' value='Mr' checked={value === 'Mr'} onChange={onChange} />
          <Form.Field control={Radio} label='Mrs' value='Mrs' checked={value === 'Mrs'} onChange={onChange} />
          <Form.Field control={Radio} label='Miss' value='Ms' checked={value === 'Ms'} onChange={onChange} />
        </Form.Group>
        <Form.Group widths={3}>
          <Form.Input required label='First name' placeholder='First name' />
          <Form.Input required label='Last name' placeholder='Last name' />
          <Form.Input label='Middle name' placeholder='Middle name' />
        </Form.Group>
        <Form.Input required label='Relationship' placeholder='Mother' />
        <Form.Group widths={2}>
          <Form.Input required label='Email' placeholder='example@com' />
          <Form.Input required label='Phone' placeholder='08123456789' />
        </Form.Group>
        <Form.Group widths={4}>
          <Form.Input required label='Address Line' placeholder='22 Mambilla Crescent' />
          <Form.Input label='Address Line 2' />
          <Form.Input required label='City' placeholder='Asokoro' />
          <Form.Input required label='State' placeholder='FCT' />
        </Form.Group>
      <Button type='button' color="brown" floated="left">Back</Button>
      <Button type='button' color="red">Cancel</Button>
      <Button type='submit' color="yellow">Next</Button>        
    </Form>
    )
}

export default NextKin