import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeName, changePassword, passwordConfirmation } from '../../../redux/actions/createTeam'

const checkStatus = require('../../../../public/assets/images/check.svg')

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
  render () {
    return (
      <>
      <nav aria-label="breadcrumb d-flex w-100">
        <ol className="breadcrumb bg-primary justify-content-center align-items-center">
          <li className="breadcrumb-item active text-white" aria-current="page">Criar Time</li>
        </ol>
      </nav>
        <form className='d-flex flex-column mr-auto ml-auto'>
          <div className='form-group d-flex'>
            <ul className='nav'>
              <li className='nav-item'>
                <div>
                  {this.props.name.length < 2 ? (<small id='emailHelp' className='form-text text-warning'>O nome da equipe deverá ter no mínimo 02 carácteres alfanuméricos</small>) : (null)}
                  <input type='text' className='form-control text-center' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Nome da equipe' onChange={this.onHandleName} />
                </div>
              </li>
              <li className='nav-item ml-4 mt-4'><img src={checkStatus} style={{width: '1.5em'}}></img></li>
            </ul>
          </div>
          <div className="input-group mb-3 d-flex">
            <div className="custom-file">
              <input type="file" className="custom-file-input custom-file-label-pt text-center" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
              <label className="custom-file-label" htmlFor="inputGroupFile01" ></label>
            </div>
          </div>
          <div className='form-group'>
            {this.props.password.length < 6 ? (<small id='emailHelp' className='form-text text-warning'>mínimo de 06 caracteres</small>) : (null)}
            <input type='password' className='form-control text-center' id='exampleInputPassword1' placeholder='Senha para acesso à equipe' onChange={this.onHandlePassword} />
          </div>
          <div className='form-group'>
            {this.props.password !== this.props.confirmpassword ? (<small id='emailHelp' className='form-text text-warning'>O password deve ser igual</small>) : (null)}
            <input type='password' className='form-control text-center' id='exampleInputPassword1' placeholder='Confirme a senha ' onChange={this.onHandleConfirmPassword} />
          </div>
          <button type='submit' className='btn btn-success'>Criar</button>
        </form>
          </>
    )
  }
}

const mapStateToProps = state => ({
  name: state.createTeam.name,
  password: state.createTeam.password,
  confirmpassword: state.createTeam.confirmpassword
})

const mapDispatchToProps = dispatch => ({
  changeName: (payload) => dispatch(changeName(payload)),
  changePassword: (payload) => dispatch(changePassword(payload)),
  passwordConfirmation: (payload) => dispatch(passwordConfirmation(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam)
