import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from './axios-public'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Index from './components/content/index'
import PageNotFound from './components/content/pagenotfound'
import Profile from './components/content/profile'
import MapVetos from './components/content/MapVetos'
import Login from './components/content/login'
import Register from './components/content/register'

import { getTokenAndId, persistToken } from './redux/actions/login'

class AppRoutes extends Component {
  componentDidMount = () => {
    this.props.getTokenAndId()
    this.props.persistToken()
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
            {!this.props.auth ? (<Route path='/login' component={Login} />) : (<Route path='/login' render={() => <Redirect from='/login' to='/'/>} />)}
            {!this.props.auth ? (<Route path='/registrar' component={Register} />) : (<Route path='/registrar' render={() => <Redirect from='/registrar' to='/'/>} />) }
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
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => ({
  getTokenAndId: () => dispatch(getTokenAndId(localStorage.getItem('token'), localStorage.getItem('userId'))),
  persistToken: () => dispatch(persistToken())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes)
