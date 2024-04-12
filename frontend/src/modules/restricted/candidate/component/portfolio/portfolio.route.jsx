import EducationComponent from './portfolio-form/component/education/education.component';
import PortfolioComponenet from './portfolio.component';

export const portfolioRoute = [
  {
    path: 'portfolio',
    element: <PortfolioComponenet />,
    children: [
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
