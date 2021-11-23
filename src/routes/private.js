import { Route, Switch } from 'react-router-dom';
import { FindView } from '../pages/private/find/view';

// import { useUser } from '../hooks/useUser';

import { Home } from '../pages/private/home';
import { View } from '../pages/private/view';

export function PrivateRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/find/view" exact component={FindView}/>
      <Route path="/view/:title/:encounter" exact component={View}/>
    </Switch>
  );
}