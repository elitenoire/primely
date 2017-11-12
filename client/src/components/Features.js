import React from 'react';
import { Grid, Statistic, Icon } from 'semantic-ui-react'

const Features = () => {
    return (
        <Grid container divided stackable columns="equal" textAlign="center">
            {renderColumns(items)}
        </Grid>
    )
}


const items = [
    {label : "create", icon : "compose", text : "Log new students' record effortlessly"},
    {label : "view", icon : "vcard", text : "View list of all students created"},
    {label : "edit", icon : "edit", text : "Make unlimited changes to students' record"},
    {label : "delete", icon : "trash", text : "Remove students from a record"}
]

const renderColumns = items => {
    return items.map((item, index) => (
        <Grid.Column key={`feat-${index}`}>
            <Statistic
                label={item.label}
                value={(<Icon style={{color:'#ecedac'}} size="huge" name={item.icon} circular />)}
            />
            <p style={{color : '#000'}}>{item.text}</p>
        </Grid.Column>
    ))
}


export default Features