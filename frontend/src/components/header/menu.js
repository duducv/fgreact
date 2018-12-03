import React, { Component } from 'react'
import { connect } from 'react-redux'
import IfLogged from './ifLogged'
import { LoginOrLogOut } from '../../redux/actions/login'

const imgMenuToggle = require('../../../public/assets/images/ion-toggle-menu.svg')

class Menu extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row' style={{height: '80px'}}>
          <div className='col-12 d-flex justify-content-between align-items-center bg-primary-opacity'>
            <nav className='nav navbar d-flex align-items-center justify-content-center'>
              <ul className='nav'>
                <div className='dropdown'>
                  <li className='nav-item d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none'>
                    <a href='#' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><img className='d-flex' src={imgMenuToggle} style={{width: '2em'}} /></a>
                    <div className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                      <a className='dropdown-item' href='#'>Sobre a Fortal Gamers</a>
                      <a className='dropdown-item' href='#'>Regras</a>
                      <a className='dropdown-item' href='#'>Campeonatos</a>
                      <a className='dropdown-item' href='#'>Participe</a>
                    </div>
                  </li>
                </div>
                <li className='nav-item px-2 text-white d-none d-md-none d-lg-block border-3'>Sobre</li>
                <li className='nav-item px-2 text-white d-none d-md-none d-lg-block'>Regras</li>
                <li className='nav-item px-2 text-white d-none d-md-none d-lg-block'>Campeonatos</li>
                <li className='nav-item px-2 text-white d-none d-md-none d-lg-block'>Participe</li>
              </ul>
            </nav>
            <div className='d-flex align-items-center justify-content-center'>
              <nav className='nav navbar d-flex  align-items-center justify-content-center '>
                <IfLogged auth={this.props.auth} changeIsLogged={this.props.LoginOrLogOut} />
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    auth: state.auth.auth
  }
)

const mapDispatchToProps = dispatch => {
  return {
    LoginOrLogOut: () => dispatch(LoginOrLogOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
