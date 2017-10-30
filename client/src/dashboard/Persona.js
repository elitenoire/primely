import React from 'react';
import { Field, reduxForm} from 'redux-form'
import { LabelInputField, RadioField } from 'react-semantic-redux-form'
import { Form, Button, Radio } from 'semantic-ui-react'

//recieve value and onChange prop else make it a class to manage internal state
const PersonaForm = () => {
    return (
        <Form>
        <Form.Group widths={3}>
          <Form.Input required label='First name' placeholder='First name' />
          <Form.Input required label='Last name' placeholder='Last name' />
          <Form.Input label='Middle name' placeholder='Middle name' />
        </Form.Group>
        <Form.Group inline >
          <label>Gender</label>
          <Form.Field control={Radio} label='Male' value='M' checked={value === 'M'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Female' value='F' checked={value === 'F'} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group widths={2}>            
          <Form.Input required label='Birthdate' type="date"/>
          <Form.Input required label='Nationality' placeholder='Nationality' />
        </Form.Group>        
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
        <Button type='button' color="red">Cancel</Button>
        <Button type='submit' color="yellow">Next</Button>        
      </Form>
    )
}

export default PersonaForm