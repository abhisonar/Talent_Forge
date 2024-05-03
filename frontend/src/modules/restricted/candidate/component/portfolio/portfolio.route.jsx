import { Navigate } from 'react-router-dom';
import PortfolioComponenet from './portfolio.component';

export const portfolioRoute = [
  {
    path: "portfolio",
    element: <PortfolioComponenet />,
    children: [
      {
        index: true,
        element: <Navigate replace to={"education"} />,
      },
      {
        path: "education",
        lazy: async () => {
          let EducationComponent = await import(
            "./portfolio-form/component/education/education.component"
          );
          return { Component: EducationComponent.default };
        },
      },
      {
        path: "experience",
        lazy: async () => {
          let ExperienceComponent = await import(
            "./portfolio-form/component/experience/experience.component"
          );
          return { Component: ExperienceComponent.default };
        },
      },
      {
        path: "skills",
        element: <h1>Skills</h1>,
      },
      {
        path: "certifications",
        element: <h1>certifications</h1>,
      },
    ],
  },
];
