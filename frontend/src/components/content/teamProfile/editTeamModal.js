import React, { Component } from 'react'

class EditTeamModal extends Component {
  render () {
    return (
      <div className='modal fade' id='editModal' tabIndex='-1' role='dialog' aria-labelledby='editModalLabel' aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='editModalLabel'>Editar equipe...</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-group'>
                  <h1>Teste</h1>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary' data-dismiss='modal'>Fechar</button>
              <button type='button' className='btn btn-button'>Entrar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditTeamModal
