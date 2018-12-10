import React, { Component } from 'react'

export default class teamProfile extends Component {
  render () {
    return (
      <div className='container-fluid bg-primary-shadow mt-4'>
        <div className='row'>
          <div className='col bg-primary-shadow d-flex align-items-center justify-content-center' style={{height: '180px'}}>
            <img className='rounded-circle img-fluid img-thumbnail ' src='https://via.placeholder.com/150' />
          </div>
        </div>
        <div className='row'>
          <div className='col bg-primary-shadow d-flex align-items-center justify-content-center' style={{height: '50px'}}>
            <h2 className='text-white'>astralis</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col bg-primary-shadow d-flex align-items-start justify-content-center mt-4' style={{height: '60vh'}}>
            <ul className='nav d-flex justify-content-center'>
              <li className='nav-item px-2'><img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' /></li>
              <li className='nav-item px-2'><img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' /></li>
              <li className='nav-item px-2'><img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' /></li>
              <li className='nav-item px-2'><img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' /></li>
              <li className='nav-item px-2'><img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' /></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
