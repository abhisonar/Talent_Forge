import { Navigate } from 'react-router-dom';
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
        lazy: async () => {
          let EducationComponent = await import(
            './portfolio-form/component/education/education.component'
          );
          return { Component: EducationComponent.default };
        },
      },
      {
        path: 'experience',
        element: <h1>Experience</h1>,
      },
      {
        path: 'skills',
        element: <h1>Skills</h1>,
      },
      {
        path: 'certifications',
        element: <h1>certifications</h1>,
      },
    ],
  },
];
