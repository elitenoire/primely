import React from 'react';
import { connect } from 'react-redux'
import { TransitionablePortal, Segment, Header } from 'semantic-ui-react'
import { dismissToast } from '../actions'

const Toast = ({ toast, dismissToast }) => {
    return (
        <TransitionablePortal
            open={!!toast.error || !!toast.success}
            transition={{animation : 'fly left', duration : 600}}
            onOpen={() => handleOpen(dismissToast)}
            onClose={handleClose}

            closeOnDocumentClick={false}
            closeOnEscape={false}
        >
            <Segment color={toast.error ? 'red' : 'green'} inverted tertiary textAlign="center" size="tiny"
                style={{ left: '80%', position: 'fixed', top: '15%', zIndex: 1000 }}
            >
                <Header as="h4">{toast.success || toast.error || ''}</Header>
            </Segment>
        </TransitionablePortal>
    )
}

const timeoutLength = 4000
let timeout = undefined

const handleOpen = (dismissCallBack) => {
    timeout = setTimeout(() => {
        dismissCallBack()
    }, timeoutLength)
}

const handleClose = () => {
    clearTimeout(timeout)
}

export default connect(
    ({ toast }) => ({ toast }),
    { dismissToast }
)(Toast)