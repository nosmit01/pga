import React from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle'
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit'
import Grid from './layout/Grid'
import './LeaderBoardRow.css'

const LeaderBoardRow = props => (
  <Grid className="LeaderBoard-row" width="100%" gridTemplateColumns="repeat(4, 1fr)" gridColumn="1 / span 4">
    <span>{props.lastName}, {props.firstName}</span>
    <span className="LeaderBoard-row_number">{props.score}</span>
    <span className="LeaderBoard-row_icon edit" onClick={props.onEdit}>
      <FontAwesomeIcon icon={faEdit} />
    </span>
    <span className="LeaderBoard-row_icon delete" onClick={props.onDelete}>
      <FontAwesomeIcon icon={faTimesCircle} />
    </span>
  </Grid>
)

LeaderBoardRow.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  score: PropTypes.number,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
}

LeaderBoardRow.defaultProps = {
  firstName: '',
  lastName: '',
  score: 0,
  onEdit: noop,
  onDelete: noop
}

export default LeaderBoardRow