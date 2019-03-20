import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getPlayersWatcher,
  addPlayerWatcher,
  updatePlayerWatcher,
  deletePlayerWatcher
} from '../redux/actions/players'
import noop from 'lodash/noop'
import get from 'lodash/get'
import Flex from './layout/Flex'
import Loader from './Loader'
import TextInput from './controls/TextInput'
import Button from './controls/Button'
import LeaderBoardGrid from './LeaderBoardGrid'
import LeaderBoardRow from './LeaderBoardRow'
import './LeaderBoard.css'

export class LeaderBoard extends Component {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetching: PropTypes.bool.isRequired,
    getPlayersWatcher: PropTypes.func.isRequired,
    addPlayerWatcher: PropTypes.func.isRequired,
    updatePlayerWatcher: PropTypes.func.isRequired,
    deletePlayerWatcher: PropTypes.func.isRequired
  }

  static defaultProps = {
    players: [],
    isFetching: false,
    getPlayersWatcher: noop,
    addPlayerWatcher: noop,
    updatePlayerWatcher: noop,
    deletePlayerWatcher: noop
  }

  state = {
    player: {
      firstName: '',
      lastName: '',
      score: 0
    },
    editMode: false
  }

  componentDidMount(){
    this.props.getPlayersWatcher()
  }

  handleFieldBlur = (type, value) => {
    const player = {...this.state.player}
    player[type] = value
    this.setState({
      player
    })
  }

  handleAddPlayer = () => {
    if (this.hasEmptyField()){
      return
    }
    this.props.addPlayerWatcher(this.state.player)
    this.handleClearPlayerFields()
  }

  handleEditPlayer = player => {
    this.setState({
      player,
      editMode: true
    }, () => {
      for (let field in this.state.player) {
        if (field !== 'id') {
          this[field].set(this.state.player[field])
        }
      }
    })
  }

  handleUpdatePlayer = () => {
    if (this.hasEmptyField()){
      return
    }
    this.props.updatePlayerWatcher(this.state.player)
    this.handleClearPlayerFields()
  }

  handleDeletePlayer = player => {
    this.props.deletePlayerWatcher(player)
  }

  hasEmptyField = () => {
    for (let field in this.state.player) {
      if (this.state.player[field] === '') {
        return true
      }
    }

    return false
  }

  handleClearPlayerFields = () => {
    this.setState({
      player: {
        firstName: '',
        lastName: '',
        score: 0,
      },
      editMode: false
    }, () => {
      for (let field in this.state.player) {
        this[field].clear()
      }
    })
  }

  render() {
    return (
      <Flex
        style={{ padding: 20 }}
        className="LeaderBoard"
        justifyContent="center"
        alignItems="center"
        direction="column"
        width="100%"
        wrap
      >
        <h2>Leaderboard</h2>
        <Flex style={{marginTop: 20}} width="60%" justifyContent="center" alignItems="center">
          <TextInput
            ref={el => this.firstName = el}
            style={{margin: '0 10px', maxWidth: 150}}
            placeholder="First name"
            defaultValue={this.state.player.firstName}
            disabled={this.props.isFetching}
            onBlur={e => this.handleFieldBlur('firstName', e.target.value)}
          />
          <TextInput
            ref={el => this.lastName = el}
            style={{margin: '0 10px', maxWidth: 150}}
            placeholder="Last name"
            defaultValue={this.state.player.lastName}
            disabled={this.props.isFetching}
            onBlur={e => this.handleFieldBlur('lastName', e.target.value)}
          />
          <TextInput
            ref={el => this.score = el}
            style={{margin: '0 10px', maxWidth: 30}}
            placeholder="Score"
            type="number"
            defaultValue={this.state.player.score}
            disabled={this.props.isFetching}
            onBlur={e => this.handleFieldBlur('score', parseInt(e.target.value))}
          />
          {this.state.editMode ? (
            <Button
              style={{margin: '0 10px', maxWidth: 10}}
              className={`forward ${this.hasEmptyField() ? 'disabled' : ''}`}
              label={'Update'}
              onClick={this.handleUpdatePlayer}
              disabled={this.props.isFetching || this.hasEmptyField()}
            />
          ) : (
            <Button
              style={{margin: '0 10px', maxWidth: 10}}
              className={`forward ${this.hasEmptyField() ? 'disabled' : ''}`}
              label={'Add'}
              onClick={this.handleAddPlayer}
              disabled={this.props.isFetching || this.hasEmptyField()}
            />
          )}
          <Button
            style={{margin: '0 10px', maxWidth: 10}}
            className="back"
            label="Cancel"
            onClick={this.handleClearPlayerFields}
            disabled={this.props.isFetching}
          />
        </Flex>
        <Flex style={{marginTop: 10}} width="50%" justifyContent="center" alignItems="center">
          {this.state.isFetching && (
            <Loader />
          )}
        </Flex>
        <Flex style={{marginTop: 10}} width="50%" justifyContent="center" alignItems="center">
          {this.props.players.length > 0 && (
            <LeaderBoardGrid key={this.props.players.length}>
              {() => (
                this.props.players.map(player =>
                  <LeaderBoardRow
                    key={player.id}
                    {...player}
                    onEdit={() => this.handleEditPlayer(player)}
                    onDelete={() => this.handleDeletePlayer(player)}
                  />
                ))
              }
            </LeaderBoardGrid>
          )}
        </Flex>
      </Flex>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.fetch.isFetching,
  players: state.players.players
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPlayersWatcher,
    addPlayerWatcher,
    updatePlayerWatcher,
    deletePlayerWatcher
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)
