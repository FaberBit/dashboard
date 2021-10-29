
import { Switch } from 'react-router-dom';

import { useUser } from '../hooks/useUser';
// import { ErrorNotFound } from '../pages/error';
import { PrivateRoutes } from './private';
import { PublicRoutes } from './public';

export function Routes() {
  const { user } = useUser()

  return (
    <Switch>
      {
        user ? <PrivateRoutes />  : <PublicRoutes />
      }
      {/* <Route path="/" component={ErrorNotFound}/> */}
    </Switch>
  );
}