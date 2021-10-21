import { Route,  } from 'react-router-dom';
import { Login } from '../pages/public/login';

// import { useUser } from '../hooks/useUser';

// import { AcessDashboard } from '../pages/Acess/Dashboard';

export function PublicRoutes() {
  // const { manager } = useUser()

  return (
    <>
      <Route path="/login" exact component={Login} />
    </>
  );
}