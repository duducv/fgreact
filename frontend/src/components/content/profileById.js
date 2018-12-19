import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import PageNotFound from './pagenotfound'
import { getPlayerById } from '../../redux/actions/profileById'

const steamLogo = require('../../../public/assets/images/logo-steam-white.svg')

class ProfileById extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.getPlayerById(id)
  }
  render () {
    let hasTeam = false
    if (this.props.team) hasTeam = true
    if (!this.props.nickname) return <PageNotFound />
    if (this.props.loggeduserid === this.props.match.params.id) return <Redirect to='/profile' />
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
            <div className='col-md-4 col-lg-5 col-xl-2 d-flex align-items-start justify-content-center p-0'>
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
                  <li className='list-group-item bg-white rounded-top d-flex'>AMIGO<small>(s)</small></li>
                  <li className='list-group-item bg-white'>Não possui amigos</li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-8 col-lg-7 col-xl-10 d-flex p-1 mt-3 d-flex justify-content-center'>
              <div className='card text-center border-white text-darkbg-white w-100'>
                <h1>Status gerais, como gráficos</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  nickname: state.userById.data.nickname,
  loggeduserid: state.user.data._id,
  avatar: state.userById.data.avatarfull,
  profileurl: state.userById.data.profileurl,
  team: state.userById.data.team
})

const mapDispatchToProps = dispatch => ({
  getPlayerById: (payload) => dispatch(getPlayerById(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileById)
