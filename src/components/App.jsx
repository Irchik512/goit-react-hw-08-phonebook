import { Routes, Route} from 'react-router-dom';
import { Layout } from 'views/Layout';
import { lazy } from 'react';

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

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="loginView/" element={<LoginView />} />
        <Route path="registerView/" element={<RegisterView />}/>
        <Route path="contactsView/" element={<ContactsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};