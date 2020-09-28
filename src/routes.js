import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Content from './pages/Content';
import Description from './pages/Description';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/hero/:id" component={Description} />
    </Switch>
  </BrowserRouter>
);

export default Routes;