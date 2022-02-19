import PropTypes from 'prop-types'

function Body(props) {
    return (
        <div className='modal-body'>
            {props.children}
        </div>
    )
}

Body.propTypes = {
    children: PropTypes.node
}

export default Body
