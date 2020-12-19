import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ClownListPage } from './pages/ClownList';
import { RegisterClownPage } from './pages/RegisterClownPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RegisterClownPage />
        </Route>
        <Route path="/clowns">
          <ClownListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
