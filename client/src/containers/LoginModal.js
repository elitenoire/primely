import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, submit } from 'redux-form'
import { Container, Modal, Header, Button, Icon, Form, Divider } from 'semantic-ui-react'
import { LabelInputField } from 'react-semantic-redux-form'
import Toast from '../dashboard/Toast'
import { cancelLogin, submitLoginData } from '../actions'


const LoginModal = (props) => {
    const { handleSubmit, submit, cancelLogin, error, submitting } = props

    return (
        <div>
        <Modal basic open  closeIcon size="tiny"
        onClose={cancelLogin} closeOnDimmerClick={false}
        >
            <Header inverted color="green" as="h4">Tip: Use a 6-character username and admin as password</Header>
            <Divider />
            <Header inverted color="brown" icon='browser' content='Log In' />
            <Modal.Content>
                <Form onSubmit={handleSubmit}>
                    <Field name="username" id="user-1" component={LabelInputField}
                    icon='user' iconPosition='left' placeholder="Username" size="big"
                    onKeyDown={(e) => handleKeyDown(e, submit)} autoComplete="off"
                    />
                    <Field name="password" id="pass-1" component={LabelInputField} size="big"
                    icon='lock' iconPosition='left' placeholder="Password" type="password"
                    onKeyDown={(e) => handleKeyDown(e, submit)}
                    />
                </Form>
            </Modal.Content>

            {error && (<Container textAlign="center">
                <Header as="h5" color="red">
                    {error}
                </Header>
            </Container>) }

            <Modal.Actions>
                <Button basic color='red' type="button" onClick={cancelLogin}
                disabled={submitting} inverted>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button color='yellow' type="button" onClick={()=> submit(formName)}
                disabled={submitting} loading={submitting} inverted>
                    <Icon name='checkmark' /> Log In
                </Button>
            </Modal.Actions>
        </Modal>
        <Toast />
        </div>
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

const onSubmit = (values, dispatch) => {
    dispatch(submitLoginData(values, formName))
}

const handleKeyDown = (e, cb) => {
    if(e.keyCode === 13 && !e.shiftKey){
        e.preventDefault()
        cb(formName)
    }
}


export default connect(
    null ,
    { submit, cancelLogin }
)(
    reduxForm(
        {form:formName, validate, onSubmit }
    )(
        LoginModal
    )
)
