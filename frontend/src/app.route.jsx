import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AuthenticationLayout from "./layout/authentication-layout/authentication.layout";
import LoginComponent from "./modules/non-restricted/login/login.component";
import RegisterComponent from "./modules/non-restricted/registration/registration.component";
import ProtectedRoute from "./libs/components/protected-route/ProtectedRoute.jsx";
import CandidateLayout from "@layout/candidate-layout/candidate.layout";
import PortfolioComponenet from "@modules/restricted/candidate/component/portfolio/portfolio.component";
import FeedComponent from "@modules/restricted/candidate/component/feed/feed.component";
import JobComponent from "@modules/restricted/candidate/component/job/job.component";
import MyApplicationComponent from "@modules/restricted/candidate/component/my-application/my-application.component";
import PreferenceComponent from "@modules/restricted/candidate/component/preference/preference.component";


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
    path: "/candidate",
    element: <ProtectedRoute element={<CandidateLayout />} />,
    children: [
      {
        path: "feeds",
        element: <FeedComponent />,
      },
      {
        path: "jobs",
        element: <JobComponent />,
      },
      {
        path: "my-application",
        element: <MyApplicationComponent />,
      },
      {
        path: "portfolio",
        element: <PortfolioComponenet />,
      },
      {
        path: "preferences",
        element: <PreferenceComponent />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
  },
]);
