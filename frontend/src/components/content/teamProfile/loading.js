import React from 'react'

const Loading = () => (
  <div className='container-fluid bg-primary-shadow d-flex align-items-center justify-content-center' style={{height: '80vh'}}>
    <div className='row'>
      <div className='col'>
        <div className='loader' style={{width: '20em', height: '20em'}} />
      </div>
    </div>
  </div>
)

export default Loading
