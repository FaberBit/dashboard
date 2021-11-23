import { Route, Switch } from 'react-router-dom';
import { FindNew } from '../pages/private/find/new';
import { FindView } from '../pages/private/find/view';

// import { useUser } from '../hooks/useUser';

import { Home } from '../pages/private/home';
import { Notifications } from '../pages/private/notifications';
import { View } from '../pages/private/view';

export function PrivateRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>

      <Route path="/find/view" exact component={FindView}/>
      <Route path="/find/new" exact component={FindNew}/>
      
      <Route path="/view/:title/:encounter" exact component={View}/>

      <Route path="/notifications" exact component={Notifications}/>
    </Switch>
  );
}