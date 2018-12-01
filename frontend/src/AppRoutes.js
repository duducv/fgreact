import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Index from './components/content/index'
import PageNotFound from './components/content/pagenotfound'
import Profile from './components/content/profile'
import MapVetos from './components/content/MapVetos'
import Login from './components/content/login'
import Register from './components/content/register'

const AppRoutes = (props) => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route path='/' component={Index} exact />
        {props.auth ? (<Route path='/profile' component={Profile} />) : (<Route path='/profile' render={() => <Redirect from='/profile' to='/login' />} />)}
        <Route path='/vetos' component={MapVetos} />
        <Route path='/login' component={Login} />
        <Route path='/registrar' component={Register} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
)

const mapStateToProps = state => {
  return {
    auth: state.auth.auth
  }
}

export default connect(mapStateToProps)(AppRoutes)
