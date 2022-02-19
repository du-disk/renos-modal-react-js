import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/index'

function Header(props) {
    return (
        <div className='header-wrapper'>
            <div className='modal-header'>
                <h4 className='modal-title'>{props.title}</h4>
                {props.withCloseButton && (
                    <Button onClick={props.onClickClose}>
                        <span aria-hidden="true">&times;</span>
                    </Button>
                )}
            </div>
            {props.children}
        </div>
    )
}

Header.propTypes = {
    onClickClose: PropTypes.func,
    withCloseButton: PropTypes.bool,
    title: PropTypes.string.isRequired,
    childern: PropTypes.node,
}

export default Header
