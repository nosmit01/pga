import React from 'react'
import Grid from './layout/Grid'
import './LeaderBoardGrid.css'

const LeaderBoardGrid = props => (
  <Grid className="LeaderBoard-grid" width="100%" gridTemplateColumns="repeat(4, 1fr)">
    <span>Name</span>
    <span className="LeaderBoard-row_number">Score</span>
    <span />
    <span />
    {props.children()}
  </Grid>
)

export default LeaderBoardGrid
