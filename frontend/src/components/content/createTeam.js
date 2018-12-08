import React from 'react'

const CreateTeam = () => (
    <>
    <nav aria-label="breadcrumb d-flex w-100">
      <ol className="breadcrumb bg-primary justify-content-center align-items-center">
        <li className="breadcrumb-item active text-white" aria-current="page">Criar Time</li>
      </ol>
    </nav>
      <form className='w-50 d-flex flex-column mr-auto ml-auto'>
        <div className='form-group'>
          <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
          <input type='text' className='form-control text-center' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Nome da equipe' />
        </div>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input type="file" className="custom-file-input custom-file-label-pt text-center" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" style={{content: 'Escolher'}}/>
            <label className="custom-file-label" htmlFor="inputGroupFile01">Avatar da equipe</label>
          </div>
        </div>
        <div className='form-group'>
          <input type='password' className='form-control text-center' id='exampleInputPassword1' placeholder='Senha para entrar' />
        </div>
        <div className='form-group'>
          <input type='password' className='form-control text-center' id='exampleInputPassword1' placeholder='Confirme a senha' />
        </div>
        <button type='submit' className='btn btn-success'>Criar</button>
      </form>
        </>
)

export default CreateTeam
