import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const userIcon = require('../../../public/assets/images/user-login-icon.svg')

const Login = (props) => (
  <div className='container-fluid bg-secondary rounded d-flex align-items-center justify-content-center'>
    <div className='row' style={{height: '75vh'}}>
      <div className='col d-flex align-items-center justify-content-center rounded p-2 text-center '>
        <form className='bg-primary p-3 rounded'>
          <img className='mb-3' src={userIcon} style={{width: '15vh'}} />
          <div className='form-group'>
            <input type='email' className='form-control border-button' id='emailLogin' aria-describedby='emailHelp' placeholder='Email' style={{textAlign: 'center'}} />
          </div>
          <div className='form-group'>
            <input type='password' className='form-control border-button' id='passwordLogin' placeholder='Senha' style={{textAlign: 'center'}} />
          </div>
          <button type='submit' className='btn btn-button d-flex w-100 justify-content-center mb-2'>Entrar</button>
          {props.auth ? (<div className='loader mr-auto ml-auto mb-2' />) : (null)}
          <p className='text-white'> Não tem uma conta?</p>
          <Link to='/registrar'><button type='button' className='btn btn-primary d-flex w-100 justify-content-center text-button'>Cadastre-se</button></Link>
        </form>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  auth: state.auth.auth
})
export default connect(mapStateToProps)(Login)
