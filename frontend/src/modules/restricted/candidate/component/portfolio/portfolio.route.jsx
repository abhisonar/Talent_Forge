import { Navigate } from 'react-router-dom';
import EducationComponent from './portfolio-form/component/education/education.component';
import PortfolioComponenet from './portfolio.component';

export const portfolioRoute = [
  {
    path: 'portfolio',
    element: <PortfolioComponenet />,
    children: [
      {
        index: true,
        element: <Navigate replace to={'education'} />,
      },
      {
        path: 'education',
        element: <EducationComponent />,
      },
      {
        path: 'experience',
        element: <EducationComponent />,
      },
      {
        path: 'skills',
        element: <EducationComponent />,
      },
      {
        path: 'certifications',
        element: <EducationComponent />,
      },
    ],
  },
];
