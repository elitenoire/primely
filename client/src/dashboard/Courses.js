import React from 'react'
import { connect } from 'react-redux'
import { Field, FormSection, reduxForm, formValueSelector } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'
import { DropdownField } from 'react-semantic-redux-form'
import { alevels, gcse, ufp, common, degree, courses } from '../utils/choices'


// NOTE : In schema required are degree, course

const Courses = ({ course, subjects, handleSubmit, previousStep }) => {
console.log(course)
console.log(subjects)
    return (
        <Form onSubmit={handleSubmit}>
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

            <Button onClick={previousStep} type='button' color="brown" floated="left">Back</Button>
            <Button type='button' color="red">Cancel</Button>
            <Button type='submit' color="yellow">Submitt</Button>
        </Form>
    )
}

const mapChoices = (list) => {
        return list.map((sel, index) => ({
            key: `${sel}-1`,
            value: sel.toLowerCase(),
            text: sel})
    )
}

const subjectMap = {
    alevels: alevels.concat(common),
    gcse: gcse.concat(common),
    ufp
}

const restrictions = {
    alevels: { multiple : true, label : 'Choose from 3 to 5 A-Level subjects'},
    gcse: { multiple : true, label: 'Choose from 7 to 9 GCSE subjects'},
    ufp: { multiple : false, label: 'Choose a Foundation Programme relevant to your degree Field' }
}

const colorLabel = {
    alevels : {color : 'violet'},
    gcse: { color: 'green' },
    ufp: { color: 'blue' }
}

const selector = formValueSelector("student")


export default connect(
    state => ({
        course: selector(state, "course"),
        subjects: selector(state, "gcseSub", "ufpSub", "alevelsSub")
    }),
    null
)(
    reduxForm(
        {
            form: "student",
            destroyOnUnmount: false,
            forceUnregisterOnUnmount: true
        }
    )(
        Courses
    )
)


