import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Loading from './teamProfile/loading'
import Player from './teamProfile/player'
import LoginModal from './teamProfile/loginModal'
import { getTeamData, enterTeam } from '../../redux/actions/team'

class TeamProfile extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.getTeamData(id)
  }
  enterTeam = () => {
    const data = {
      teamId: this.props.teamid,
      teamPassword: '130190'
    }
    this.props.enterTeam(data)
  }
  render () {
    console.log(this.props.data)
    if (this.props.loading) return <Loading />
    if (this.props.notfound) return <Redirect from='/team:id' to='/notfound' />
    if (this.props.teamname) {
      const players = this.props.players.map((player) => {
        return (<Player key={player._id} avatarfull={player.avatarfull} nickname={player.nickname} />)
      })
      return (
        <div className='container-fluid bg-primary-shadow mt-4' style={{height: '77vh'}}>
          <div className='row'>
            <div className='col bg-primary-shadow d-flex align-items-center justify-content-center' style={{height: '180px'}}>
              <img className='rounded-circle img-fluid img-thumbnail' src='https://via.placeholder.com/100' />
              <button className='btn btn-success ml-3' data-toggle="modal" data-target="#exampleModal">Entrar</button>
              <LoginModal />
            </div>
          </div>
          <div className='row'>
            <div className='col bg-primary-shadow d-flex align-items-center justify-content-center' style={{height: '50px'}}>
              <h2 className='text-white'>{this.props.teamname}</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col bg-primary-shadow align-items-start justify-content-center mt-4'>
              <ul className='nav justify-content-center'>
                {players}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  loading: state.team.loading,
  teamname: state.team.data.name,
  teamid: state.team.data._id,
  players: state.team.data.players,
  notfound: state.team.notfound,
  data: state.team.data
})

const mapDispatchToProps = dispatch => ({
  getTeamData: (payload) => dispatch(getTeamData(payload)),
  enterTeam: (payload) => dispatch(enterTeam(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfile)
