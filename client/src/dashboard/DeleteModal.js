import React from 'react';
import {Confirm, Segment, Icon, Button, Header} from 'semantic-ui-react'

const DeleteModal = ({open, onCancel, onConfirm}) => {
    return (
        <Confirm
        open={open}
        cancelButton={(<Button color="yellow">Cancel</Button>)}
        confirmButton={(<Button style={{backgroundColor : 'red'}}>Delete</Button>)}
        header={(
            <Header as="h3" color="brown" inverted>
                <Icon name="warning sign" color="yellow"/>
                Confirm Delete
            </Header>
        )}
        content={(<Segment basic inverted secondary color="brown" textAlign="center">
                Are you sure you want to delete this profile?
            </Segment>)}
        onCancel={onCancel}
        onConfirm={onConfirm}
        />
    )
}

export default DeleteModal