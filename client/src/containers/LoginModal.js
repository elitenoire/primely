import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, submit } from 'redux-form'
import { Modal, Header, Button, Icon, Form } from 'semantic-ui-react'
import { LabelInputField } from 'react-semantic-redux-form'


const LoginModal = (props) => {
    const { handleSubmit, submit } = props
    return (
        <Modal basic open  closeIcon size="tiny">
            <Header inverted color="brown" icon='browser' content='Log In' />
            <Modal.Content>
                <Form onSubmit={handleSubmit}>
                    <Field name="username" id="user-1" component={LabelInputField}
                    icon='user' iconPosition='left' placeholder="Username" size="big"
                    />
                    <Field name="password" id="pass-1" component={LabelInputField} size="big"
                    icon='lock' iconPosition='left' placeholder="Password" type="password"
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' type="button" inverted>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button color='yellow' type="button" onClick={()=> submit(formName)} inverted>
                    <Icon name='checkmark' /> Log In
                </Button>
            </Modal.Actions>
            <Header inverted color="green" as="h6">Tip: Use Admin/admin to log in</Header>
        </Modal>
    )
}


const formName = 'LoginForm'

const validate = values => {
    const required = ['username', 'password']
    return required.reduce((errors, field) => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
        return errors
    }, {})
}

const onSubmit = values => {
    console.log(values)
    alert(values)
}

// const onSubmitForm = () => {

// }


export default connect(
    null, { submit }
)(
    reduxForm(
        {form:formName, validate, onSubmit,}
    )(
        LoginModal
    )
)

// <Form.Input name="user"
//                         icon='user' iconPosition='left' placeholder="Username"
//                     />
//                     <Form.Input type="password" name="pass"
//                         icon='lock' iconPosition='left' placeholder="Password"
//                     />