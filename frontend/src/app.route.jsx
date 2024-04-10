import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AuthenticationLayout from "./layout/authentication-layout/authentication.layout";
import LoginComponent from "./modules/non-restricted/login/login.component";
import RegisterComponent from "./modules/non-restricted/registration/registration.component";
import ProtectedRoute from "./libs/components/protected-route/ProtectedRoute.jsx";
import EditBasicInfo from "./modules/restricted/candidate/personal-information/basic-info/basic-info.component.jsx";
import CandidateLayout from "@layout/candidate-layout/candidate.layout";


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
    path: '/candidate',
    element: <ProtectedRoute element={<CandidateLayout />} />,
    children: [
      {
        path: 'basic-info',
        element: <EditBasicInfo />,
      },
      
    ],
  },
  {
    path: '/',
    element: <App />,
  },
]);
