import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ReportBugs } from '../pages/private/bugs';
import { JetskiDetails } from '../pages/private/entity/jetski/details';
import { JetskiNew } from '../pages/private/entity/jetski/new';
import { JetskiEdit } from '../pages/private/entity/jetski/update';
import { BoatDetails } from '../pages/private/entity/boat/details';
import { FormNew } from '../pages/private/entity/boat/new';
import { FormEdit } from '../pages/private/entity/boat/update';
import { ClientDetails } from '../pages/private/entity/clients/details';
import { ClientNew } from '../pages/private/entity/clients/new';
import { ClientEdit } from '../pages/private/entity/clients/update';
import { EmployeeDetails } from '../pages/private/entity/employee/details';
import { EmployeeNew } from '../pages/private/entity/employee/new';
import { EmployeeEdit } from '../pages/private/entity/employee/update';
import { Features } from '../pages/private/features';
import { FindNew } from '../pages/private/find/new';
import { FindView } from '../pages/private/find/view';

// import { useUser } from '../hooks/useUser';

import { Home } from '../pages/private/home';
import { MyAccount } from '../pages/private/myaccount';
import { Notifications } from '../pages/private/notifications';
import { View } from '../pages/private/view';
import { SchedulesList } from '../pages/private/entity/schedules/list';
import { SchedulesNew } from '../pages/private/entity/schedules/new';
import { SchedulesEdit } from '../pages/private/entity/schedules/update';
import { ReviewsList } from '../pages/private/entity/reviews/list';
import { ReviewsNew } from '../pages/private/entity/reviews/new';
import { ReviewsEdit } from '../pages/private/entity/reviews/update';
import { ClientPaymentsList } from '../pages/private/entity/payments/list';

export function PrivateRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/find/view" exact component={FindView} />
      <Route path="/find/new" exact component={FindNew} />

      <Route path="/view/:title/:encounter" exact component={View} />

      <Route path="/notifications" exact component={Notifications} />

      <Route path="/myaccount" exact component={MyAccount} />

      <Route path="/features" exact component={Features} />

      <Route path="/reports/bugs" exact component={ReportBugs} />

      <Route path="/client/infos" exact component={ClientDetails} />
      <Route path="/client/new" exact component={ClientNew} />
      <Route path="/client/edit/:id" component={ClientEdit} />

      <Route path="/payments/infos" exact component={ClientPaymentsList} />

      <Route path="/employee/infos" exact component={EmployeeDetails} />
      <Route path="/employee/new" exact component={EmployeeNew} />
      <Route path="/employee/edit/:id" component={EmployeeEdit} />

      <Route path="/boat/infos" exact component={BoatDetails} />
      <Route path="/boat/new" exact component={FormNew} />
      <Route path="/boat/edit/:id" component={FormEdit} />

      <Route path="/jetski/infos" exact component={JetskiDetails} />
      <Route path="/jetski/new" exact component={JetskiNew} />
      <Route path="/jetski/edit/:id" component={JetskiEdit} />

      <Route path="/schedules/infos" exact component={SchedulesList} />
      <Route path="/schedules/new" exact component={SchedulesNew} />
      <Route path="/schedules/edit/:id" component={SchedulesEdit} />

      <Route path="/reviews/infos" exact component={ReviewsList} />
      <Route path="/reviews/new" exact component={ReviewsNew} />
      <Route path="/reviews/edit/:id" component={ReviewsEdit} />
    </Switch>
  );
}
