import React, { Component } from 'react'

class LoginModal extends Component {
  render () {
    return (
      <div className='modal fade' id='loginModal' tabIndex='-1' role='dialog' aria-labelledby='loginModalLabel' aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='loginModalLabel'>Entrar na equipe...</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-group'>
                  {this.props.passwordFail ? (<small className='text-danger'>Senha incorreta...</small>) : (null)}
                  {this.props.alreadyHasATeam ? (<small className='text-danger'>Você ja está inscrito em outro time. Saia antes de entrar em outro</small>) : (null)}
                  <input type='password' className='form-control' id='exampleInputPassword1' placeholder='Senha' onChange={(event) => this.props.passwordInput(event.target.value.trim())} />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary' data-dismiss='modal'>fechar</button>
              <button type='button' className='btn btn-button' onClick={this.props.enterTeam}>Entrar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginModal
