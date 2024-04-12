import ProtectedRoute from '@libs/components/protected-route/ProtectedRoute';
import FeedComponent from './component/feed/feed.component';
import JobComponent from './component/job/job.component';
import MyApplicationComponent from './component/my-application/my-application.component';
import PreferenceComponent from './component/preference/preference.component';
import CandidateLayout from '@layout/candidate-layout/candidate.layout';
import { portfolioRoute } from './component/portfolio/portfolio.route';

export const candicateRoute = [
  {
    path: 'candidate',
    element: <ProtectedRoute element={<CandidateLayout />} />,
    children: [
      {
        path: 'feeds',
        element: <FeedComponent />,
      },
      {
        path: 'jobs',
        element: <JobComponent />,
      },
      {
        path: 'my-application',
        element: <MyApplicationComponent />,
      },
      ...portfolioRoute,
      {
        path: 'preferences',
        element: <PreferenceComponent />,
      },
    ],
  },
];
