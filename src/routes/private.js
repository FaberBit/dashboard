import { Route, Switch } from 'react-router-dom';

// import { useUser } from '../hooks/useUser';

import { Home } from '../pages/private/home';

export function PrivateRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
    </Switch>
  );
}