import React, { Component } from 'react'

class LeaveModal extends Component {
  render () {
    return (
      <div className='modal fade' id='leaveModal' tabIndex='-1' role='dialog' aria-labelledby='leaveModalLabel' aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='leaveModalLabel'>Sair da equipe...</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <p className='text-center'>Deseja mesmo sair da equipe?</p>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary' data-dismiss='modal'>fechar</button>
              <button type='button' className='btn btn-button' onClick={this.props.leaveTeam}>Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LeaveModal
