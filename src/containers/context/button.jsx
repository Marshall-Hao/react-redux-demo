import React from 'react';
import PropTypes from 'prop-types'

export default function CustomeButton(props,context) {
    const {color} = context
    const {children} = props
    return (
        <button type='button' style={{color}}>
            {children}
        </button>
    )
}

CustomeButton.contextTypes = {
    color: PropTypes.string
}