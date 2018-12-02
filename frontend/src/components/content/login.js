import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { login } from '../../redux/actions/login'

const userIcon = require('../../../public/assets/images/user-login-icon.svg')

class Login extends Component {
  onSubmitForm = () => {
    let data = {
      email: this.props.email,
      password: this.props.password
    }

    this.props.setAuth(data)
  }

  onHandleEmail = (event) => {
    event.preventDefault()
    this.props.setEmail(event.target.value.trim())
  }

  onHandlePassword = (event) => {
    event.preventDefault()
    this.props.setPassword(event.target.value.trim())
  }

  render () {
    return (
      <div className='container-fluid bg-secondary rounded d-flex align-items-center justify-content-center'>
        <div className='row' style={{height: '75vh'}}>
          <div className='col d-flex align-items-center justify-content-center rounded p-2 text-center '>
            <form className='bg-primary p-3 rounded'>
              <img className='mb-3' src={userIcon} style={{width: '15vh'}} />
              <div className='form-group'>
                {this.props.networkError ? (<small className='text-danger'>Problemas de conexão com o servidor, aguarde!</small>) : (null)}
                {this.props.authFail ? (<small className='text-danger'>Email ou senha incorretos.</small>) : (null)}
                <input type='email' className='form-control border-button' onChange={this.onHandleEmail} id='emailLogin' aria-describedby='emailHelp' placeholder='Email' style={{textAlign: 'center'}} />
              </div>
              <div className='form-group'>
                <input type='password' className='form-control border-button' onChange={this.onHandlePassword} id='passwordLogin' placeholder='Senha' style={{textAlign: 'center'}} />
              </div>
              <button type='button' onClick={this.onSubmitForm}className='btn btn-button d-flex w-100 justify-content-center mb-2'>Entrar</button>
              {this.props.spinner ? (<div className='loader mr-auto ml-auto mb-2' />) : (null)}
              <p className='text-white'> Não tem uma conta?</p>
              <Link to='/registrar'><button type='button' className='btn btn-primary d-flex w-100 justify-content-center text-button'>Cadastre-se</button></Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setEmail: (payload) => dispatch({type: 'SET_EMAIL', payload}),
  setPassword: (payload) => dispatch({type: 'SET_PASSWORD', payload}),
  setAuth: (data) => dispatch(login(data))
})

const mapStateToProps = state => ({
  auth: state.auth.auth,
  email: state.auth.email,
  password: state.auth.password,
  spinner: state.auth.spinner,
  authFail: state.auth.authFail,
  networkError: state.auth.networkError
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
