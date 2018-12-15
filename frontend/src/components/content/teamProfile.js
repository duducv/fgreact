import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Loading from './teamProfile/loading'
import Player from './teamProfile/player'
import LoginModal from './teamProfile/loginModal'
import { getTeamData, enterTeam, sendPasswordInput } from '../../redux/actions/team'

class TeamProfile extends Component {
  state = {
    refresh: false
  }
componentWillReceiveProps = (nextProps) => {

  console.log(nextProps)
 // this.setState({refresh: !this.state.refresh})
}
componentDidMount () {
  const { id } = this.props.match.params
  this.props.getTeamData(id)
}
  enterTeam = () => {
    const data = {
      teamId: this.props.teamid,
      teamPassword: this.props.passwordinput
    }
    this.props.enterTeam(data)
  }
  closeModalAndRefreshComponent = (payload) => {
    this.setState({refresh: payload})
  }
  render () {
    console.log(this.state.refresh)
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
              <LoginModal
                enterTeam={this.enterTeam}
                passwordInput={(data) => this.props.sendPasswordInput(data)}
                passwordFail={this.props.passwordfail}
                passwordSuccess={this.props.passwordsuccess}
                closeModalAndRefreshComponent={this.closeModalAndRefreshComponent}
              />
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
  passwordinput: state.team.passwordInput,
  passwordfail: state.team.passwordFail,
  passwordsuccess: state.team.passwordSuccess,
  data: state.team.data
})

const mapDispatchToProps = dispatch => ({
  getTeamData: (payload) => dispatch(getTeamData(payload)),
  enterTeam: (payload) => dispatch(enterTeam(payload)),
  sendPasswordInput: (payload) => dispatch(sendPasswordInput(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfile)
