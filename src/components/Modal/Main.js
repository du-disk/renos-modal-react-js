import React from 'react'
import PropTypes from 'prop-types'

const Main = (props) => {
    const { isOpen, children } = props
    const classOpen = isOpen ? 'modal modal-open animate-modal' : 'modal'

    return (
        <div className={classOpen}>
            <div className='modal-backdrop' onClick={props.toggleModal} />
            <div className='modal-dialog'>
                <div className='modal-content'>
                    {children}
                </div>
            </div>
        </div>
    )
}

Main.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node,
    toggleModal: PropTypes.func.isRequired,
}

export default Main
