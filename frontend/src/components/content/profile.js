import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import ProfileComponent from './profileComponent'

const steamLogo = require('../../../public/assets/images/logo-steam-white.svg')

class Profile extends Component {
  state = {
    toShow: 'profileStatus'
  }

  showCreateTeam = () => {
    this.setState({
      toShow: 'createTeam'
    })
  }
  render () {
    if (this.props.auth) {
      return (
        <div className='wrapper bg-secondary' style={{height: '80vh'}}>
          <div className='container-fluid bg-white'>
            <div className='row bg-primary'>
              <div className='col-12 d-flex bg-primary mb-1 rounded align-items-center justify-content-center' style={{height: 200}}>
                <h1 className='text-white'> CAPA </h1>
              </div>
            </div>
          </div>
          <div className='container mt-4'>
            <div className='row '>
              <div className='col-md-4 col-lg-5 col-xl-2 d-flex align-items-start p-0'>
                <div className='card bg-opacity border-opacity text-dark'>
                  <div className='card bg-opacity border-opacity d-flex align-items-center justify-content-center'>
                    <img className='card-img-top rounded rounded-circle position-absolute' src={this.props.avatar} alt='Card image cap' style={{width: '10rem', top: -150}} />
                  </div>
                  <div className='card-body bg-white rounded-top p-4 mt-3'>
                    <h5 className='card-title'>{this.props.nickname}</h5>
                    <p className='card-text'>CSGO player for @OWLNAGE.OG</p>
                  </div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item bg-white'><a className='btn btn-steam text-white w-100 p-2' href={this.props.profileurl} target='_blank'>Perfil Steam <img src={steamLogo} style={{width: '2em'}} /></a></li>
                  </ul>
                  <ul className='list-group list-group-flush mt-2'>
                    <li className='list-group-item bg-white rounded-top d-flex'>EQUIPE<small>(s)</small></li>
                    <li className='list-group-item bg-white'><button className='btn btn-success w-100' onClick={this.showCreateTeam}>CRIAR EQUIPE +</button></li>
                  </ul>
                  <ul className='list-group list-group-flush mt-2'>
                    <li className='list-group-item bg-white rounded-top d-flex'>AMIGO<small>(s)</small></li>
                    <li className='list-group-item bg-white'>Não possui amigos</li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-8 col-lg-7 col-xl-10 d-flex p-1 mt-3'>
                <div className='card text-center border-white text-darkbg-white w-100'>
                  <ProfileComponent toShow={this.state.toShow}/>
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
  profileurl: state.user.data.profileurl
})

export default connect(mapStateToProps)(Profile)
