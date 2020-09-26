import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Content from './pages/content';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Content} />
    </Switch>
  </BrowserRouter>
);

export default Routes;