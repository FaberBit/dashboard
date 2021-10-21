import { Route, Switch } from 'react-router-dom';

// import { useUser } from '../hooks/useUser';

// import { AcessDashboard } from '../pages/Acess/Dashboard';

export function AcessRoutes() {
  // const { manager } = useUser()

  return (
    <Switch>
      {
        manager ? (
          <>
          {/* <Route path="/admin/dashboard" exact component={AcessDashboard} /> */}
        </>
        ) : 
        (
          <></>
          // <Route path="/acess" exact component={AcessLogin} />
        )
      }
    </Switch>
  );
}