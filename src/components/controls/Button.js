import React from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import './Button.css'

const Button = props => (
  <button
    style={props.style}
    className={`Button ${props.className}`}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.label}
  </button>
)

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: noop
}

export default Button