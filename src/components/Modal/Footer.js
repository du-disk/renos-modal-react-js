import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

function Footer({ children, withCloseButton, onClickClose }) {
    return (
        <div className='modal-footer'>
            {withCloseButton && (
                <Button variant='primary' onClick={onClickClose}>
                    Close
                </Button>
            )}
            {children}
        </div>
    )
}

Footer.protoTypes = {
    children: PropTypes.node,
    withCloseButton: PropTypes.bool,
    onClickClose: PropTypes.func,
}

export default Footer