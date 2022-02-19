import React from 'react'
import PropTypes from 'prop-types'

function Index(props) {

    const {
        children,
        variant = "default"
    } = props

    return (
        <button
            className={`btn btn-${variant}`}
            {...props}
        >
            {children}
        </button>
    )
}

Index.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['default', 'primary']),
}

export default Index