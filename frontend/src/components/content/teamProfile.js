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
            <ul className='nav justify-content-center'>
              <li className='nav-item'><div className='card bg-primary py-3 px-2 align-items-center' style={{width: '15em'}}><img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' /><p className='text-white pt-2'>Headz</p></div></li>
              <li className='nav-item'><div className='card bg-primary py-3 px-2 align-items-center' style={{width: '15em'}}><img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' /><p className='text-white pt-2'>Headz</p></div></li>
              <li className='nav-item'><div className='card bg-primary py-3 px-2 align-items-center' style={{width: '15em'}}><img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' /><p className='text-white pt-2'>Headz</p></div></li>
              <li className='nav-item'><div className='card bg-primary py-3 px-2 align-items-center' style={{width: '15em'}}><img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' /><p className='text-white pt-2'>Headz</p></div></li>
              <li className='nav-item'><div className='card bg-primary py-3 px-2 align-items-center' style={{width: '15em'}}><img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' /><p className='text-white pt-2'>Headz</p></div></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
