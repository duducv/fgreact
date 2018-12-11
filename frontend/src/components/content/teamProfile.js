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
          <div className='col bg-primary-shadow align-items-start justify-content-center mt-4'>
            <ul className='nav justify-content-center'>
              <li className='nav-item'>
                <div className='py-3 px-2 align-items-center text-truncate' style={{maxWidth: '150px'}}>
                  <img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' />
                  <p className='text-white pt-2 text-truncate ml-auto'>PARAGATIMIRUARU</p>
                </div>
              </li>
              <li className='nav-item'>
                <div className='py-3 px-2 align-items-center text-truncate' style={{maxWidth: '150px'}}>
                  <img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' />
                  <p className='text-white pt-2 text-truncate ml-auto'>PARAGATIMIRUARU</p>
                </div>
              </li>
              <li className='nav-item'>
                <div className='py-3 px-2 align-items-center text-truncate' style={{maxWidth: '150px'}}>
                  <img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' />
                  <p className='text-white pt-2 text-truncate ml-auto'>PARAGATIMIRUARU</p>
                </div>
              </li>
              <li className='nav-item'>
                <div className='py-3 px-2 align-items-center text-truncate' style={{maxWidth: '150px'}}>
                  <img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' />
                  <p className='text-white pt-2 text-truncate ml-auto'>PARAGATIMIRUARU</p>
                </div>
              </li>
              <li className='nav-item'>
                <div className='py-3 px-2 align-items-center text-truncate' style={{maxWidth: '150px'}}>
                  <img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' />
                  <p className='text-white pt-2 text-truncate ml-auto'>PARAGATIMIRUARU</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
