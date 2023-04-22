import { Routes, Route} from 'react-router-dom';
import  Layout  from 'views/Layout/Layout';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth';

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
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView' /* WebpackChunkName: "ContactsView" */));
const NotFoundView = lazy(() => import('../views/NotFoundView/NotFoundView' /* WebpackChunkName: "NotFoundView" */));

export default function App () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="register" element={<RegisterView />}/>
        <Route path="contacts" element={<ContactsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};