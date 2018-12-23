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
              <div class='btn-group btn-group-toggle d-flex justify-content-center' data-toggle='buttons'>
                <label class='btn btn-primary active'>
                  <input type='radio' name='options' id='option1' autoComplete='off' checked /> Active
                </label>
                <label class='btn btn-primary'>
                  <input type='radio' name='options' id='option2' autoComplete='off' /> Radio
                </label>
                <label class='btn btn-primary'>
                  <input type='radio' name='options' id='option3' autoComplete='off' /> Radio
                </label>
              </div>
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
