import React, {Component} from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import './TextInput.css'

class TextInput extends Component {
  set = value => {
    this.input.value = value
  }

  clear = () => {
    this.input.value = this.props.type === 'number' ? 0 : ''
  }

  render() {
    return (
      <input
        style={this.props.style}
        ref={el => this.input = el}
        className={`Text-input ${this.props.className}`}
        type={this.props.type}
        placeholder={this.props.placeholder}
        defaultValue={this.props.defaultValue}
        disabled={this.props.disabled}
        onBlur={this.props.onBlur}
        min="0"
      />
    )
  }
}

TextInput.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
}

TextInput.defaultProps = {
  type: 'text',
  onBlur: noop
}

export default TextInput
