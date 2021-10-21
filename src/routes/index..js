
import { Switch } from 'react-router-dom';

import { useUser } from '../hooks/useUser';
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
      {/* <Route path="/" component={}/> */}
    </Switch>
  );
}