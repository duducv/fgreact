import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Loading from './teamProfile/loading'
import { getTeamData } from '../../redux/actions/team'
import axios from '../../axios-public'

class TeamProfile extends Component {
  state = {
    teamId: null
  }
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.getTeamData(id)
    this.setState({teamId: id})
  }
  enterTeam = () => {
    const { teamId } = this.props.match.params
    console.log(teamId)
    const data = {
      teamId: this.state.teamId,
      teamPassword: '130190'
    }
    axios.put('/team/join', data).then((data) => console.log(data)).catch(err => console.log(err.message))
  }
  render () {
    console.log(this.props.data)
    if (this.props.loading) return <Loading />
    if (this.props.notfound) return <Redirect from='/team:id' to='/notfound' />
    if (this.props.teamname) {
      const players = this.props.players.map((player) => {
        return (
          <li className='nav-item' key={player._id}>
            <div className='py-3 px-2 align-items-center text-truncate' style={{maxWidth: '100px'}}>
              <img className='rounded-circle img-thumbnail' src={player.avatarfull} />
              <p className='text-white pt-2 text-truncate ml-auto' >{player.nickname}</p>
            </div>
          </li>
        )
      })
      return (
        <div className='container-fluid bg-primary-shadow mt-4' style={{height: '77vh'}}>
          <div className='row'>
            <div className='col bg-primary-shadow d-flex align-items-center justify-content-center' style={{height: '180px'}}>
              <img className='rounded-circle img-fluid img-thumbnail' src='https://via.placeholder.com/100' />
              <button className='btn btn-success ml-3' onClick={this.enterTeam}>Entrar</button>
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
  players: state.team.data.players,
  notfound: state.team.notfound,
  data: state.team.data
})

const mapDispatchToProps = dispatch => ({
  getTeamData: (payload) => dispatch(getTeamData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfile)
