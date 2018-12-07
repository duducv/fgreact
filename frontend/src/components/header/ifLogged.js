import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const imgSteamIcon = require('../../../public/assets/images/logo-steam-white.svg')

const IfLogged = (props) => {
  console.log('o estado é ' + props.nickname)
  if (props.auth === false) {
    return (
      <ul className='nav align-items-center'>
        <li className='nav-item'>
          <a href='http://localhost:3000/auth/steam'>
            <button className='btn btn-button py-2'>Entrar <img src={imgSteamIcon} style={{width: '2.3em'}} />
            </button>
          </a>
        </li>
      </ul>
    )
  } else {
    return (
      <ul className='nav align-items-center'>
        <li className='nav-item text-white'>{props.nickname}</li>
        <li className='nav-item text-white px-2'>
          <div className='dropdown'>
            <a className='dropdown-toggle' href='#' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
              <img className='rounded-circle border border-success' src='https://via.placeholder.com/200x200/6B46ED/FFFFFF' style={{width: '2em'}} />
            </a>
            <div className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
              <Link to='/profile' className='dropdown-item' href='#'>Meu Perfil</Link>
              <a href='#' className='dropdown-item'>Minhas partidas</a>
              <a className='dropdown-item' href='http://localhost:3000/logout'>Sair</a>
            </div>
          </div>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  nickname: state.user.data.nickname
})

export default connect(mapStateToProps)(IfLogged)
