import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  render () {
    if (this.props.auth) {
      return (
        <div className='wrapper bg-secondary'>
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
                    <img className='card-img-top rounded rounded-circle position-absolute' src='https://via.placeholder.com/200x200/6B46ED/FFFFFF' alt='Card image cap' style={{width: '10rem', top: -150}} />
                  </div>
                  <div className='card-body bg-white rounded-top p-4 mt-3'>
                    <h5 className='card-title'>Headz\\</h5>
                    <p className='card-text'>Professional CSGO player for @OWLNAGE.OG</p>
                  </div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item bg-white text-dark'>Medalhas</li>
                  </ul>
                  <div className='card-body bg-white rounded-bottom'>
                    <p>Redes sociais</p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-8 col-lg-7 col-xl-10 d-flex justify-content-center p-1 mt-3' style={{height: '80vh'}}>
                <div className='card text-center w-100 border-white text-darkbg-white'>
                  <div className='card-header'>
        Perfil
                  </div>
                  <div className='card-body'>
                    <p className='card-title'>Colocar opções do clan</p>
                    <p className='card-text'>colocar participações em campeonato</p>
                    <p className='card-text'>Gráficos?</p>
                  </div>
                  <div className='card-footer text-muted' />
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
  auth: state.auth.auth
})

export default connect(mapStateToProps)(Profile)
