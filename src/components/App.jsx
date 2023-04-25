import { Routes, Route } from 'react-router-dom';
import Layout from 'views/Layout/Layout';
import { useEffect, lazy} from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import  {useAuth}  from 'hooks/useAuth';

const HomeView = lazy(() =>
  import('../views/HomeView/HomeView' /* WebpackChunkName: "HomeView " */)
);
const LoginView = lazy(() =>
  import('../views/LoginView/LoginView' /* WebpackChunkName: "LoginView" */)
);
const RegisterView = lazy(() =>
  import(
    '../views/RegisterView/RegisterView' /* WebpackChunkName: "RegisterView" */
  )
);
const ContactsView = lazy(() =>
  import(
    '../views/ContactsView/ContactsView' /* WebpackChunkName: "ContactsView" */
  )
);
const NotFoundView = lazy(() =>
  import(
    '../views/NotFoundView/NotFoundView' /* WebpackChunkName: "NotFoundView" */
  )
);

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ?(
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/login" element={
          <PublicRoute redirectTo="/contacts" component={<LoginView />} />
        } />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterView />} />
          }
        />
        <Route path="/contacts" element={
            <PrivateRoute redirectTo="/login" component={<ContactsView />} />
        } />

        <Route path="*" element={<NotFoundView />} />

      </Route>
    </Routes>
  );
}

