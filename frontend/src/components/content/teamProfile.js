import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Loading from './teamProfile/loading'
import { getTeamData } from '../../redux/actions/team'

class TeamProfile extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.getTeamData(id)
  }
  render () {
    if (this.props.loading) return <Loading />
    if (this.props.notfound) return <Redirect from='/team:id' to='/notfound' />
    if (this.props.name) {
      return (
        <div className='container-fluid bg-primary-shadow mt-4'>
          <div className='row'>
            <div className='col bg-primary-shadow d-flex align-items-center justify-content-center' style={{height: '180px'}}>
              <img className='rounded-circle img-fluid img-thumbnail ' src='https://via.placeholder.com/150' />
            </div>
          </div>
          <div className='row'>
            <div className='col bg-primary-shadow d-flex align-items-center justify-content-center' style={{height: '50px'}}>
              <h2 className='text-white'>{this.props.name}</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col bg-primary-shadow align-items-start justify-content-center mt-4'>
              <ul className='nav justify-content-center'>
                <li className='nav-item'>
                  <div className='py-3 px-2 align-items-center text-truncate' style={{maxWidth: '150px'}}>
                    <img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' />
                    <p className='text-white pt-2 text-truncate ml-auto' style={{maxWidth: '100px'}}>lorem ipsum amet</p>
                  </div>
                </li>
                <li className='nav-item'>
                  <div className='py-3 px-2 align-items-center text-truncate' style={{maxWidth: '150px'}}>
                    <img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' />
                    <p className='text-white pt-2 text-truncate ml-auto' style={{maxWidth: '100px'}}>lorem ipsum amet</p>
                  </div>
                </li>
                <li className='nav-item'>
                  <div className='py-3 px-2 align-items-center text-truncate' style={{maxWidth: '150px'}}>
                    <img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' />
                    <p className='text-white pt-2 text-truncate ml-auto' style={{maxWidth: '100px'}}>lorem ipsum amet</p>
                  </div>
                </li>
                <li className='nav-item'>
                  <div className='py-3 px-2 align-items-center text-truncate' style={{maxWidth: '150px'}}>
                    <img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' />
                    <p className='text-white pt-2 text-truncate mr-auto ml-auto' style={{maxWidth: '100px'}}>lorem ipsum amet</p>
                  </div>
                </li>
                <li className='nav-item'>
                  <div className='py-3 px-2 align-items-center text-truncate' style={{maxWidth: '150px'}}>
                    <img className='rounded-circle img-thumbnail' src='https://via.placeholder.com/100' />
                    <p className='text-white pt-2 text-truncate ml-auto mr-auto' style={{maxWidth: '100px'}}>lorem ipsum amet</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  loading: state.team.loading,
  name: state.team.data.name,
  notfound: state.team.notfound
})

const mapDispatchToProps = dispatch => ({
  getTeamData: (payload) => dispatch(getTeamData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfile)
