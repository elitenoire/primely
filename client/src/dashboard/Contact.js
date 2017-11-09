import React from 'react'
import {Field, FormSection } from 'redux-form'
import { Form } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form'

const Profile = () => {
    return (
        <div>
            <FormSection name="name">
                <Form.Group widths={3}>
                    <Field name="firstName" id="firstname-1" component={InputField} required
                    label="First Name" placeholder="First Name"
                    />
                    <Field name="lastName" id="lastname-1" component={InputField} required
                    label="Last Name" placeholder="Last Name"
                    />
                    <Field name="middleName" id="middlename-1" component={InputField}
                    label="Middle Name" placeholder="Middle Name"
                    />
                </Form.Group>
            </FormSection>

            <FormSection name="contact">
                <Form.Group widths={2}>
                    <Field name="email" id="email-1" component={InputField} required
                    label="Email" placeholder="example@mail.com" type="email"
                    />
                    <Field name="phone" id="phone-1" component={InputField} required
                    label="Mobile Number" placeholder="eg 08123456789"
                    />
                </Form.Group>

                <FormSection name="address">
                    <Form.Group widths={4}>
                        <Field name="addr1" id="addr1-1" component={InputField} required
                        label="Address Line 1" placeholder="22 Mambilla Crescent"
                        />
                        <Field name="addr2" id="addr2-1" component={InputField}
                        label="Address Line 2"
                        />
                        <Field name="city" id="city-1" component={InputField} required
                        label="City" placeholder="Asokoro"
                        />
                        <Field name="state" id="state-1" component={InputField} required
                        label="State" placeholder="FCT"
                        />
                    </Form.Group>
                </FormSection>
            </FormSection>
        </div>
    )
}

export default Profile