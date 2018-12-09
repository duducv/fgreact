import React from 'react'

import CreateTeam from './createTeam'
import ProfileStatus from './profileStatus'

const ProfileComponent = (props) => {
  if (props.toShow === 'createTeam') {
    return (
      <CreateTeam />
    )
  }
  if (props.toShow === 'index') {
    return (
      <ProfileStatus />
    )
  }
}

export default ProfileComponent
