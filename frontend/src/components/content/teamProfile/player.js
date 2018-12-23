import React from 'react'

const Player = (props) => (
  <li className='nav-item' key={props._id}>
    <div className='py-3 px-2 align-items-center text-truncate' style={{maxWidth: '100px'}}>
      <img className='rounded-circle img-thumbnail bg-success border-0' src={props.avatarfull} />
      <p className='text-white pt-2 text-truncate ml-auto' >{props.nickname}</p>
    </div>
  </li>
)

export default Player
