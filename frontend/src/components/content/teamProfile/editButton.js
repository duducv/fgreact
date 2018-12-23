import React, { Component } from 'react'

export default class EditButton extends Component {
  render () {
    if (!this.props.playerdata.team) return null
    if (this.props.playerdata.team.owner === this.props.playerdata._id) {
      return (
        <button className='btn btn-button ml-3' data-toggle='modal' data-target='#editModal'>Editar</button>
      )
    } else {
      return (
        <button className='btn btn-button ml-3' disabled>Editar</button>
      )
    }
  }
}
