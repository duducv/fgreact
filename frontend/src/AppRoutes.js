import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Index from './components/content/index'
import PageNotFound from './components/content/pagenotfound'
import Profile from './components/content/profile'
import MapVetos from './components/content/MapVetos'
import Register from './components/content/register'
import axios from 'axios'

class AppRoutes extends Component {
  componentDidMount = () => {
    axios.get('http://localhost:3000', { withCredentials: true }).then(result => console.log(result))
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
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => ({
  getTokenAndId: () => dispatch(getTokenAndId(localStorage.getItem('token'), localStorage.getItem('userId'))),
  persistToken: () => dispatch(persistToken())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes)
