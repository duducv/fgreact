import React, { Component } from 'react'

export default class Button extends Component {
  render () {
    console.log(this.props.playerdata)
    if (!this.props.playerdata.team) {
      return (
        <button className='btn btn-success ml-3' data-toggle='modal' data-target='#loginModal'>Entrar</button>
      )
    } else {
      if (this.props.playerdata.team._id !== this.props.teamid) {
        return (
          <button className='btn btn-success ml-3' data-toggle='modal' data-target='#loginModal'>Entrar</button>
        )
      }
      if (this.props.playerdata.team._id === this.props.teamid) {
        return (
          <button className='btn btn-danger ml-3' data-toggle='modal' data-target='#leaveModal'>Sair</button>
        )
      }
    }
  }
}
