import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ProfileComponent from './profile/profileComponent'
import { profileRoutes, fetchUserTeam } from '../../redux/actions/profile'

const steamLogo = require('../../../public/assets/images/logo-steam-white.svg')

class Profile extends Component {
  showCreateTeam = () => {
    this.props.createTeamComponent()
  }
  render () {
    let hasTeam = false
    if (this.props.team) hasTeam = true
    if (this.props.auth) {
      return (
        <div className='wrapper bg-secondary'>
          <div className='container-fluid bg-white'>
            <div className='row bg-primary'>
              <div className='col-12 d-flex bg-primary-shadow mb-1 rounded align-items-center justify-content-center' style={{height: 200}}>
                <h1 className='text-white'> CAPA </h1>
              </div>
            </div>
          </div>
          <div className='container mt-4'>
            <div className='row' style={{height: '80vh'}}>
              <div className='col-md-4 col-lg-5 col-xl-2 d-flex align-items-start p-0'>
                <div className='card bg-opacity border-opacity text-dark'>
                  <div className='card bg-opacity border-opacity d-flex align-items-center justify-content-center'>
                    <img className='card-img-top rounded rounded-circle position-absolute img-thumbnail' src={this.props.avatar} alt='Card image cap' style={{width: '10rem', top: -150}} />
                  </div>
                  <div className='card-body bg-white rounded-top p-4 mt-3'>
                    <h5 className='card-title'>{this.props.nickname}</h5>
                    { hasTeam ? (<Link to={`/team/${this.props.team._id}`} style={{textDecoration: 'none'}}><p className='card-text'>CSGO player for <span className='text-button'>@{this.props.team.name}</span></p></Link>)
                      : (<p className='card-text'>CSGO player</p>)}

                  </div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item bg-white'><a className='btn btn-steam text-white w-100 p-2' href={this.props.profileurl} target='_blank'>Perfil Steam <img src={steamLogo} style={{width: '2em'}} /></a></li>
                  </ul>
                  <ul className='list-group list-group-flush mt-2'>
                    {!this.props.team
                      ? (<li className='list-group-item bg-white'><button className='btn btn-success w-100' onClick={this.showCreateTeam}>CRIAR EQUIPE +</button></li>)
                      : (null)}
                  </ul>
                  <ul className='list-group list-group-flush mt-2'>
                    <li className='list-group-item bg-white rounded-top d-flex'>AMIGO<small>(s)</small></li>
                    <li className='list-group-item bg-white'>Não possui amigos</li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-8 col-lg-7 col-xl-10 d-flex p-1 mt-3'>
                <div className='card text-center border-white text-darkbg-white w-100'>
                  <ProfileComponent toShow={this.props.location} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <Fragment>
          <div className='container-fluid d-flex justify-content-center bg-primary' style={{height: '80vh'}}>
            <div className='row align-items-center'>
              <div className='col'>
                <div className='loader d-flex' style={{height: '50em', width: '50em'}} />
              </div>
            </div>
          </div>
        </Fragment>
      )
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth.auth,
  nickname: state.user.data.nickname,
  avatar: state.user.data.avatarfull,
  profileurl: state.user.data.profileurl,
  team: state.user.data.team,
  location: state.profileLocation.location
})

const mapDispatchToProps = dispatch => ({
  createTeamComponent: (payload) => dispatch(profileRoutes('createTeam')),
  fetchUserTeam: (payload) => dispatch(fetchUserTeam(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
