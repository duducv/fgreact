import React, { Component, Fragment } from 'react'
import Menu from './menu'
import { Link } from 'react-router-dom'

const imgInstaIconWhite = require('../../../public/assets/images/logo-instagram-white.svg')
const imgFacebookIconWhite = require('../../../public/assets/images/logo-facebook-white.svg')
const imgTwitterIconWhite = require('../../../public/assets/images/logo-twitter-white.svg')
const imgTwitchIconWhite = require('../../../public/assets/images/logo-twitch-white.svg')

class Header extends Component {
  render () {
    return (
      <Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-4 bg-primary-shadow p-2' />
            <div className='col-4 bg-primary-shadow d-flex align-items-center justify-content-center p-2'>
              <nav className='nav navbar navbar-expand-lg d-flex align-items-center justify-content-center'>
                <Link to='/' style={{textDecoration: 'none'}}><h3 href='#' className='nav nav-brand text-white'>FORTALGAMERS</h3></Link>
              </nav>
            </div>
            <div className='col-4 bg-primary-shadow d-flex align-items-center justify-content-end'>
              <ul className='nav'>
                <li className='nav-items'><a href='https://www.instagram.com/fortalgamers' target='_blank'><img src={imgInstaIconWhite} style={{width: '2em'}} /></a></li>
                <li className='nav-items'><a href='https://www.facebook.com/FORTALGAMERS' target='_blank'><img src={imgFacebookIconWhite} style={{width: '2em'}} /></a></li>
                <li className='nav-items'><a href='https://twitter.com/fortalgamers' target='_blank'><img src={imgTwitterIconWhite} style={{width: '2em'}} /></a></li>
                <li className='nav-items'><a href='https://twitch.tv/fortalgamers' target='_blank'><img className='mr-2' src={imgTwitchIconWhite} style={{width: '2em'}} /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <Menu />
      </Fragment>
    )
  }
}

export default Header
