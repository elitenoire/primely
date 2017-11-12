import React from 'react';
import { connect } from 'react-redux'
import { TransitionablePortal, Segment, Header } from 'semantic-ui-react'
import { dismissToast } from '../actions'

const Toast = ({ toast, dismissToast }) => {
    return (
        <TransitionablePortal
            open={!!toast.error || !!toast.success}
            transition={{animation : 'fly left', duration : 600}}
            onOpen={() => handleOpen(dismissToast, toast)}
            onClose={handleClose}
            onHide={clearTempToast}

            closeOnDocumentClick={false}
            closeOnEscape={false}
        >

        <Segment color={colorizer(toast)} inverted tertiary textAlign="center" size="small"
            style={{ left: '80%', position: 'fixed', top: '15%', zIndex: 1000 }}
        >
            <Header as="h3">{toast.success || toast.error || toastMsg }</Header>
        </Segment>

        </TransitionablePortal>
    )
}

// Defaults
const timeoutLength = 3500
let timeout = undefined
let toastMsg = ''
let toastColor = 'green'

// Functions to handle display/hide toast
const colorizer = toast => {
    if(toast.error) {toastColor = 'red'}
    if(toast.success){toastColor = 'green'}
    return toastColor
}

const handleOpen = (dismissCallBack, toast) => {
    toastMsg = toast.error || toast.success
    timeout = setTimeout(() => {
        dismissCallBack()
    }, timeoutLength)
}

const handleClose = () => {
    clearTimeout(timeout)
}

const clearTempToast = () => {
    toastMsg = ''
}

export default connect(
    ({ toast }) => ({ toast }),
    { dismissToast }
)(Toast)