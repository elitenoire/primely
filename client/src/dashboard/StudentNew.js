import React, {Component} from 'react'
import { Step, Segment, Form, Button, Header, Divider, Radio } from 'semantic-ui-react'
import StudentForm from './StudentForm'

const steps = [
  { key: 'persona', disabled : false, active : true, completed : false, icon: 'info', title: 'Personal Info', description: 'Personal Details' },
  { key: 'eduhistory', disabled: true, active : false, completed : false, icon: 'info', title: 'Educational History' },
  { key: 'selectcourse', disabled: true, active : false, completed : false, icon: 'info', title: 'Course Selection' },
]


// Need three states for step : completed, active, disabled


//Pass mode and match : {params} prop to StudentForm
class StudentNew extends Component {
    state = { disabled : false, active : true, completed : false }

    onChange = (e, { value }) => this.setState({ value })

    render() {
    const { value } = this.state
    return (
            <div>
                <Step.Group attached="top" items={steps} stackable="tablet"/>
                <Segment stacked attached textAlign="right" style={{ minHeight: 500}}>
                    <StudentForm />
                </Segment>
            </div>
        )
    }
}

export default StudentNew

//<Persona onChange={onChange} value={value} />