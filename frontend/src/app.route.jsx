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
        async lazy() {
          let AuthenticationLayout = await import(
            './layout/authentication-layout/authentication.layout'
          );
          return { Component: AuthenticationLayout.default };
        },
        element: <AuthenticationLayout />,
        children: [
          {
            path: 'login',
            async lazy() {
              let LoginComponent = await import('./modules/non-restricted/login/login.component');
              return { Component: LoginComponent.default };
            },
          },
          {
            path: 'registration',
            async lazy() {
              let RegisterComponent = await import(
                './modules/non-restricted/registration/registration.component'
              );
              return { Component: RegisterComponent.default };
            },
          },
        ],
      },
      ...candicateRoute,
    ],
  },
]);
