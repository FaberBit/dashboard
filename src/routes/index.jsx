import React from 'react';
import { Switch } from 'react-router-dom';

import { useUser } from '../hooks/useUser';

import { PrivateRoutes } from './private';
import { PublicRoutes } from './public';
// import { ErrorNotFound } from '../pages/error';

export function Routes() {
  const { user } = useUser();

  return (
    <Switch>
      {
        user ? <PrivateRoutes /> : <PublicRoutes />
      }
      {/* <Route path="/" component={ErrorNotFound}/> */}
    </Switch>
  );
}
