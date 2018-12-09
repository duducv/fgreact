import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeName, changePassword, passwordConfirmation, createNewTeam } from '../../../redux/actions/createTeam'

const imageUpload = require('../../../../public/assets/images/image_upload.svg')

class CreateTeam extends Component {
  imgSelectedHandler = (event) => {
    console.log(Math.round(event.target.files[0].size / 1024))
  }
  onHandleName = (event) => {
    event.preventDefault()
    this.props.changeName(event.target.value.trim())
  }
  onHandlePassword = (event) => {
    event.preventDefault()
    this.props.changePassword(event.target.value.trim())
  }
  onHandleConfirmPassword = (event) => {
    event.preventDefault()
    this.props.passwordConfirmation(event.target.value.trim())
  }

  createNewTeam = () => {
    const data = {
      name: this.props.name,
      password: this.props.password,
      confirmpassword: this.props.confirmpassword
    }
    this.props.createNewTeam(data)
  }
  render () {
    return (
      <>
      <nav aria-label='breadcrumb d-flex'>
        <ol className='breadcrumb bg-primary justify-content-center align-items-center'>
          <li className='breadcrumb-item active text-white' aria-current='page'>Criar Time</li>
        </ol>
        <div className='alert alert-warning' role='alert'>
          <small id='emailHelp' className='form-text text-primary mb-2'>Nome: mínimo 02 e máximo 50 caracteres.</small>
          <small id='emailHelp' className='form-text text-primary mb-2'>Avatar: formatos: jpg, png. Tamanho máximo: 250kb</small>
          <small id='passwordlengthwarning' className='form-text text-primary mb-2'>Password: mínimo 06 e máximo 50 caracteres.</small>
        </div>
      </nav>
        <form className='d-flex flex-column mr-auto ml-auto'>
          <div className='form-group d-flex flex-column'>
            { this.props.name.length > 2 && this.props.nameinuse ? (<small id='emailHelp' className='form-text text-danger mb-2'>Nome já está em uso.</small>) : (null) }
            { this.props.namelengtherror ? (<small id='passwordlengtherror' className='form-text text-danger mb-2'>Mínimo 02 e Máximo 100 caracteres.</small>) : (null) }
            <input type='text' className='form-control text-center' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Nome da equipe' onChange={this.onHandleName} />
          </div>
          <div className='input-group mb-3 d-flex'>
            <div className='custom-file'>
              <input type='file' className='custom-file-input custom-file-label-pt text-center' id='inputGroupFile01' aria-describedby='inputGroupFileAddon01' />
              <label className='custom-file-label' htmlFor='inputGroupFile01' ><span>avatar da equipe <img src={imageUpload} style={{width: '1em'}}></img></span></label>
            </div>
          </div>
          <div className='form-group'>

            { this.props.passwordlengtherror ? (<small id='passwordlengtherror' className='form-text text-danger mb-2'>Mínimo 06 e Máximo 50 caracteres.</small>) : (null) }
            <input type='password' className='form-control text-center' id='InputPassword' placeholder='Senha para acesso à equipe' onChange={this.onHandlePassword} />
          </div>
          <div className='form-group'>
            { this.props.dontmatchpassword ? (<small id='emailHelp' className='form-text text-danger mb-2'>Os password's não são iguais.</small>) : (null) }
            <input type='password' className='form-control text-center' id='confirmPassword' placeholder='Confirme a senha ' onChange={this.onHandleConfirmPassword} />
          </div>
          <button type='button' className='btn btn-success' onClick={this.createNewTeam}>Criar</button>
        </form>
          </>
    )
  }
}

const mapStateToProps = state => ({
  name: state.createTeam.name,
  password: state.createTeam.password,
  confirmpassword: state.createTeam.confirmpassword,
  nameinuse: state.createTeam.nameinuse,
  dontmatchpassword: state.createTeam.dontmatchpassword,
  passwordlengtherror: state.createTeam.passwordlengtherror,
  namelengtherror: state.createTeam.namelengtherror
})

const mapDispatchToProps = dispatch => ({
  changeName: (payload) => dispatch(changeName(payload)),
  changePassword: (payload) => dispatch(changePassword(payload)),
  passwordConfirmation: (payload) => dispatch(passwordConfirmation(payload)),
  createNewTeam: (payload) => dispatch(createNewTeam(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam)
