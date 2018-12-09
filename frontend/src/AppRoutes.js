import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Index from './components/content/index'
import PageNotFound from './components/content/pagenotfound'
import Profile from './components/content/profile'
import MapVetos from './components/content/MapVetos'
import Register from './components/content/register'
import { logOn } from './redux/actions/login'
import { fetchUserTeam } from './redux/actions/profile'

class AppRoutes extends Component {
  componentDidMount = () => {
    this.props.logOn()
    this.props.fetchUserTeam(this.props.team)
  }
  render () {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route path='/' component={Index} exact />
            <Route path='/profile' component={Profile} />
            <Route path='/vetos' component={MapVetos} />
            <Route path='/registrar' component={Register} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.auth,
    team: state.profileLocation.team
  }
}

const mapDispatchToProps = dispatch => ({
  logOn: () => dispatch(logOn()),
  fetchUserTeam: (payload) => dispatch(fetchUserTeam(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes)
