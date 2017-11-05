import React from 'react'
import { connect } from 'react-redux'
import { Field, FormSection, reduxForm, formValueSelector } from 'redux-form'
import { Form, Button, Segment } from 'semantic-ui-react'
import { DropdownField } from 'react-semantic-redux-form'
import { alevels, gcse, ufp, common, degree, courses } from '../utils/choices'


// NOTE : In schema required are degree, course

const Courses = ({ sid, course, subjects, handleSubmit, previousStep , onSubmit}) => {
console.log(course)
console.log(subjects)
    return (
        <Form onSubmit={handleSubmit}>
            <Segment color="green" style={{minHeight : 300}}>
                <FormSection name="courseSelection">
                    <Field name="degree" id="degree-1" component={DropdownField} required
                    label="What field do you intend to specialize in?" options={mapChoices(degree)} selection
                    placeholder="Select Degree Field"
                    />

                    <Field name="course" id="course-1" component={DropdownField} required
                        label="Choose a Program to enrol in" options={mapChoices(courses)} selection
                        placeholder="Select Program"
                    />

                    {course && (
                        <Field name={`${course}Sub`} id={`${course}-sub`} component={DropdownField} required
                        options={mapChoices(subjectMap[course])} fluid selection
                        placeholder="Select Subject(s)" renderLabel={label => ({ color: colorLabel[course].color, content: label.text })}
                        {...restrictions[course]}
                        />
                    )}
                </FormSection>
            </Segment>
            <Button onClick={previousStep} type='button' color="brown" floated="left">Back</Button>
            <Button type='button' color="red">Cancel</Button>
            <Button onClick={onSubmit} type='submit' color="yellow">Submitt</Button>
        </Form>
    )
}

const mapChoices = (list) => {
        return list.map((sel, index) => ({
            key: `${sel.toLowerCase()}-1`,
            value: sel,
            text: sel})
    )
}

// Field-Level Validations
const required = value => value ? undefined : 'Required'
const maxValue = max => values =>
    values && values.length > max ? `Must be ${max} subjects or less` : undefined
const minValue = min => values =>
    values && values.length < min ? `Must be at least ${min} subjects` : undefined
const maxValue5 = maxValue(5)
const maxValue9 = maxValue(9)
const minValue3 = minValue(3)
const minValue7 = minValue(7)


const subjectMap = {
    alevels: alevels.concat(common),
    gcse: gcse.concat(common),
    ufp
}

const restrictions = {
    alevels: { multiple : true, label : 'Choose from 3 to 5 A-Level subjects',
        validate : [required, minValue3, maxValue5]},
    gcse: { multiple : true, label: 'Choose from 7 to 9 GCSE subjects',
        validate : [required, minValue7, maxValue9]},
    ufp: { multiple : false, label: 'Choose a Foundation Programme relevant to your degree Field',
        validate : [required] }
}

const colorLabel = {
    alevels : {color : 'violet'},
    gcse: { color: 'green' },
    ufp: { color: 'blue' }
}


const selector = formValueSelector("student")


export default connect(
    (state, ownProps) => ({
        course: selector(state, "courseSelection.course"),
        subjects: selector(state, "courseSelection.gcseSub",
                    "courseSelection.ufpSub", "courseSelection.alevelsSub"),
        initialValues : state.students[ownProps.sid]
    }),
    null
)(
    reduxForm(
        {
            form: "student",
            destroyOnUnmount: false,
            forceUnregisterOnUnmount: true,
            keepDirtyOnReinitialize: true,
            enableReinitialize: true
        }
    )(
        Courses
    )
)


