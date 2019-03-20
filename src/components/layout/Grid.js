import assign from 'lodash/assign'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Flex extends Component {
  static propTypes = {
    width: PropTypes.string,
    gridColumn: PropTypes.string,
    gridTemplateColumns: PropTypes.string,
  }

  static defaultProps = {
    width: 'auto',
    gridColumn: '',
    gridTemplateColumns: 'repeat(1, 1fr)',
  }

  render() {
    return (
      <div
        ref={el => {
          this.el = el
        }}
        style={
          assign(
            {
              width: this.props.width,
              gridColumn: this.props.gridColumn,
              gridTemplateColumns: this.props.gridTemplateColumns,
            },
            this.props.style,
            {
              display: 'grid',
            }
          )}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    )
  }
}
