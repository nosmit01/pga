import noop from 'lodash/noop'
import assign from 'lodash/assign'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Flex extends Component {
  static propTypes = {
    flex: PropTypes.string,
    wrap: PropTypes.bool,
    grow: PropTypes.number,
    width: PropTypes.string,
    style: PropTypes.object,
    basis: PropTypes.string,
    height: PropTypes.string,
    shrink: PropTypes.number,
    onClick: PropTypes.func,
    children: PropTypes.node,
    direction: PropTypes.string,
    className: PropTypes.string,
    alignSelf: PropTypes.string,
    alignItems: PropTypes.string,
    alignContent: PropTypes.string,
    justifyContent: PropTypes.string,
  }

  static defaultProps = {
    flex: '0 1 auto',
    wrap: false,
    grow: 0,
    width: 'auto',
    style: {},
    basis: 'auto',
    height: 'auto',
    shrink: 1,
    onClick: noop,
    children: null,
    direction: 'row',
    className: '',
    alignSelf: 'auto',
    alignItems: 'flex-start',
    alignContent: 'normal',
    justifyContent: 'flex-start',
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
            flex: this.props.flex,
            width: this.props.width,
            height: this.props.height,
            flexWrap: this.props.wrap ? 'wrap' : 'nowrap',
            flexGrow: this.props.grow,
            flexBasis: this.props.basis,
            alignSelf: this.props.alignSelf,
            flexShrink: this.props.shrink,
            alignItems: this.props.alignItems,
            alignContent: this.props.alignContent,
            flexDirection: this.props.direction,
            justifyContent: this.props.justifyContent,
          },
            this.props.style,
          {
            display: 'flex',
          }
        )}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    )
  }
}
