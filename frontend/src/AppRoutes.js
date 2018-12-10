import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Index from './components/content/index'
import PageNotFound from './components/content/pagenotfound'
import Profile from './components/content/profile'
import MapVetos from './components/content/MapVetos'
import { logOn } from './redux/actions/login'

class AppRoutes extends Component {
  componentDidMount = () => {
    this.props.logOn()
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
  logOn: () => dispatch(logOn())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes)
