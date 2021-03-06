import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import Loading from './teamProfile/loading'
import Player from './teamProfile/player'
import LoginModal from './teamProfile/loginModal'
import LeaveModal from './teamProfile/leaveModal'
import Button from './teamProfile/button'
import EditTeamModal from './teamProfile/editTeamModal'
import EditButton from './teamProfile/editButton'
import { getTeamData, enterTeam, sendPasswordInput, leaveTeam } from '../../redux/actions/team'

class TeamProfile extends Component {
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
  leaveTeam = () => {
    const { id } = this.props.match.params
    const data = {
      teamId: id
    }
    this.props.leaveTeam(data)
  }
  render () {
    console.log(this.props.playerdata)
    if (this.props.loading) return <Loading />
    if (this.props.notfound) return <Redirect from='/team:id' to='/notfound' />
    if (this.props.teamname) {
      const players = this.props.players.map((player) => {
        return (
          <Link to={'/player/' + player._id} key={player._id}>
            <Player avatarfull={player.avatarfull} nickname={player.nickname} />
          </Link>)
      })
      return (
        <div className='container-fluid bg-primary-shadow mt-4' style={{height: '77vh'}}>
          <div className='row'>
            <div className='col bg-primary-shadow d-flex align-items-center justify-content-center' style={{height: '180px'}}>
              <img className='img-thumbnail rounded-circle' src='http://localhost:3000/api/csgobanner' style={{width: '7em', height: '7em'}}/>
              {this.props.auth ? (<EditButton playerdata={this.props.playerdata}/>) : (null)}
              <EditTeamModal />
              {this.props.auth ? (<Button playerdata={this.props.playerdata} teamid={this.props.match.params.id} />) : (null)}
              <LoginModal
                enterTeam={this.enterTeam}
                passwordInput={(data) => this.props.sendPasswordInput(data)}
                passwordFail={this.props.passwordfail}
                passwordSuccess={this.props.passwordsuccess}
                alreadyHasATeam={this.props.alreadyhasateam}
              />
              <LeaveModal leaveTeam={this.leaveTeam}/>
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
  auth: state.auth.auth,
  loading: state.team.loading,
  teamname: state.team.data.name,
  teamid: state.team.data._id,
  players: state.team.data.players,
  notfound: state.team.notfound,
  passwordinput: state.team.passwordInput,
  passwordfail: state.team.passwordFail,
  passwordsuccess: state.team.passwordSuccess,
  alreadyhasateam: state.team.alreadyhasateam,
  playerdata: state.user.data
})

const mapDispatchToProps = dispatch => ({
  getTeamData: (payload) => dispatch(getTeamData(payload)),
  enterTeam: (payload) => dispatch(enterTeam(payload)),
  sendPasswordInput: (payload) => dispatch(sendPasswordInput(payload)),
  leaveTeam: (payload) => dispatch(leaveTeam(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfile)
