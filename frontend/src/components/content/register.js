import React from 'react'

const Register = () => (

  <div className='container-fluid bg-secondary rounded d-flex align-items-start justify-content-center'>
    <div className='row' style={{height: '75vh'}}>
      <div className='col d-flex align-items-start justify-content-center rounded p-2 text-center '>
        <form className='bg-primary p-2' style={{width: '25rem'}}>
          <div className='form-group'>
            <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Primeiro nome' />
          </div>
          <div className='form-group'>
            <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Último nome' />
          </div>
          <div className='form-group'>

            <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Email' />
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' id='exampleInputPassword1' placeholder='Senha' />
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' id='exampleInputPassword1' placeholder='Confirme sua senha' />
          </div>
          <div className='form-group form-check'>
            <input type='checkbox' className='form-check-input' id='exampleCheck1' />
            <label className='form-check-label' htmlFor='exampleCheck1'>Check me out</label>
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  </div>
)

export default Register
