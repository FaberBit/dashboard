
import { Switch, Route } from 'react-router-dom';

import { useUser } from '../hooks/useUser';
import { ErrorNotFound } from '../pages/error';
import { PublicRoutes } from './public';

export function Routes() {
  const { user } = useUser()

  return (
    <Switch>
      <Route path="/" component={ErrorNotFound}/>
      {
        user ? (
          <>
          {/* <Route path="/admin/dashboard" exact component={AcessDashboard} /> */}
        </>
        ) : 
        (
          <PublicRoutes />
        )
      }
    </Switch>
  );
}