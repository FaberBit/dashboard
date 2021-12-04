import { Route, Switch } from 'react-router-dom';
import { ReportBugs } from '../pages/private/bugs';
import { BoatDetails } from '../pages/private/entity/boat/details';
import { FormNew } from '../pages/private/entity/boat/new';
import { FormEdit } from '../pages/private/entity/boat/update';
import { ClientDetails } from '../pages/private/entity/clients/details';
import { ClientNew } from '../pages/private/entity/clients/new';
import { ClientEdit } from '../pages/private/entity/clients/update';
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

      <Route path="/boat/infos" exact component={BoatDetails}/>
      <Route path="/boat/new" exact component={FormNew}/>
      <Route path="/boat/edit" exact component={FormEdit}/>

      <Route path="/client/infos" exact component={ClientDetails}/>
      <Route path="/client/new" exact component={ClientNew}/>
      <Route path="/client/edit" exact component={ClientEdit}/>
    </Switch>
  );
}