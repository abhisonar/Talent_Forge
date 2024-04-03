import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AuthenticationLayout from './layout/authentication-layout/authentication.layout';
import LoginComponent from './modules/non-restricted/login/login.component';
import RegisterComponent from 'modules/non-restricted/registration/registration.component';
import ProtectedRoute from 'libs/components/protected-route/ProtectedRoute.jsx';

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
    element: <ProtectedRoute element={<h1>Hello Candidate</h1>} />,
  },
]);
