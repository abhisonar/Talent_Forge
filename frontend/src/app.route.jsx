import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AuthenticationLayout from "./layout/authentication-layout/authentication.layout";
import LoginComponent from "./modules/non-restricted/login/login.component";
import RegisterComponent from "modules/non-restricted/registration/registration.component";
import ProtectedRoute from "libs/components/protected-route/ProtectedRoute.jsx";
import EditBasicInfo from "modules/restricted/personal-information/basic-info.component.jsx";
import LandingPage from "libs/components/Landing-Page/landing-page.component.jsx";
import EditEducationDetails from "modules/restricted/personal-information/education-detail.component.jsx";

export const router = createBrowserRouter([
  {
    path: "authentication",
    element: <AuthenticationLayout />,
    children: [
      {
        path: "login",
        element: <LoginComponent />,
      },
      {
        path: "registration",
        element: <RegisterComponent />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/candidate",
            element: <LandingPage />,
            children: [
              {
                path: "basic-info",
                element: <EditBasicInfo />,
              },
              {
                path: "education-detail",
                element: <EditEducationDetails />,
              },
             
            ],
          },
        ],
      },
    ],
  },
]);
