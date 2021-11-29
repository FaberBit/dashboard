import { Route, Switch } from 'react-router-dom';
import { ReportBugs } from '../pages/private/bugs';
import { FormNew } from '../pages/private/entity/boat/new';
import { FormEdit } from '../pages/private/entity/boat/update';
import { Features } from '../pages/private/features';
import { FindNew } from '../pages/private/find/new';
import { FindView } from '../pages/private/find/view';

// import { useUser } from '../hooks/useUser';

import { Home } from '../pages/private/home';
import { MyAccount } from '../pages/private/myaccount';
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

      <Route path="/myaccount" exact component={MyAccount}/>

      <Route path="/features" exact component={Features}/>

      <Route path="/reports/bugs" exact component={ReportBugs}/>

      <Route path="/boat/new" exact component={FormNew}/>
      <Route path="/boat/edit" exact component={FormEdit}/>
    </Switch>
  );
}