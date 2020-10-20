import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Pos, Login, StoreAndRegister } from './pages';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/pos' component={StoreAndRegister} />
        <Route exact path='/' component={Pos} />
      </Switch>
    </Router>
  );
}

export default App;
