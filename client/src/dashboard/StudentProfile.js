import React, {Component} from 'react'
import { Grid, Segment} from 'semantic-ui-react'

import ProfileCard from './ProfileCard'
import ProfileData from './ProfileData'


class StudentProfile extends Component {
state = {}

//handleContextRef = contextRef => this.setState({ contextRef })


render(){
    //const { contextRef } = this.state
    return (
    <Grid container centered doubling stackable columns={2}>
        <Grid.Column>
        
            
            <ProfileCard
                location="Gombe"
                color="brown"
                gender="Male"
                email="metu67@yahoo.com"
                degree="Political Science"
                course="Alevels"
                name={{firstName : 'Mustaph', middleName : 'Ahmed', lastName : 'Garba'}}
            />
            
        
        </Grid.Column>
        <Grid.Column >
            <ProfileData />
        </Grid.Column>
    </Grid>
    )
}
}


export default StudentProfile