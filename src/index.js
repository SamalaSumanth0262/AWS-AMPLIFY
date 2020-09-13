import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import CustomAuth from './components/CustomAuth';
import VerifyAuth from './components/Auth/VerifyAuth';
import SignIn from './components/Auth/SignIn';
import SignOut from './components/Auth/SignOut';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/signup' component={CustomAuth} />
        <Route path='/verify' component={VerifyAuth} />
        <Route path='/founder' component={() => { return <div>Founder</div> }} />
        <Route path='/investor' component={() => { return <div>Investor</div> }} />
        <Route path='/signout' component={SignOut} />
        <Route path='/signin' component={SignIn} />
        <Route path='*' component={() => (<div>Not Found Page</div>)} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
