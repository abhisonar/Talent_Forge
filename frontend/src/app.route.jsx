import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AuthenticationLayout from './layout/authentication-layout/authentication.layout';
import LoginComponent from './modules/non-restricted/login/login.component';
import RegisterComponent from './modules/non-restricted/registration/registration.component';
import { candicateRoute } from '@modules/restricted/candidate/candidate.route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'authentication',
        element: <AuthenticationLayout />,
        children: [
          {
            path: 'login',
            element: <LoginComponent />,
          },
          {
            path: 'registration',
            element: <RegisterComponent />,
          },
        ],
      },
      ...candicateRoute,
    ],
  },
]);
