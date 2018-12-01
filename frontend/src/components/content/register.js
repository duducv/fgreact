import React from 'react'

const Register = () => (

  <div className='container-fluid bg-secondary rounded d-flex align-items-start justify-content-center'>
    <div className='row' style={{height: '75vh'}}>
      <div className='col d-flex align-items-start justify-content-center rounded p-2 text-center '>
        <form className='bg-primary p-2' style={{width: '25rem'}}>
          <div class='form-group'>
            <input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Primeiro nome' />
          </div>
          <div class='form-group'>
            <input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Último nome' />
          </div>
          <div class='form-group'>

            <input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Email' />
          </div>
          <div class='form-group'>
            <input type='password' class='form-control' id='exampleInputPassword1' placeholder='Senha' />
          </div>
          <div class='form-group'>
            <input type='password' class='form-control' id='exampleInputPassword1' placeholder='Confirme sua senha' />
          </div>
          <div class='form-group form-check'>
            <input type='checkbox' class='form-check-input' id='exampleCheck1' />
            <label class='form-check-label' for='exampleCheck1'>Check me out</label>
          </div>
          <button type='submit' class='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  </div>
)

export default Register
