import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../containers/Layout';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';
import SendEmail from '../pages/SendEmail';
import MyAccount from '../pages/MyAccount';
import NewPassword from '../pages/NewPassword';
import CreateAccount from '../pages/CreateAccount';
import PasswordRecovery from '../pages/PasswordRecovery';

import useInitialState from '../hooks/useInitialState';

import '../styles/global.css'

import AppContext from '../context/AppContext';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState} >
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/recovery-password' component={PasswordRecovery} />
            <Route exact path='/send-email' component={SendEmail} />
            <Route exact path='/new-password' component={NewPassword} />
            <Route exact path='/account' component={MyAccount} />
            <Route exact path='/signup' component={CreateAccount} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/orders' component={Orders} />

            <Route path='*' component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;
