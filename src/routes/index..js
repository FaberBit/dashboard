
import { Switch, Route } from 'react-router-dom';

import { useUser } from '../hooks/useUser';
import { ErrorNotFound } from '../pages/error';
import { PublicRoutes } from './public';

export function Routes() {
  const { user } = useUser()

  return (
    <Switch>
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
      <Route path="/" component={ErrorNotFound}/>
    </Switch>
  );
}