import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AuthenticationLayout from './layout/authentication-layout/authentication.layout';
import LoginComponent from './modules/non-restricted/login/login.component';
import RegisterComponent from 'modules/non-restricted/registration/registration.component';

export const router = createBrowserRouter([
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
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/candidate',
    element: <h1>Welcome to candidate screen</h1>,
  },
]);
