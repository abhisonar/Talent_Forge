import { Tabs, TabsList, TabsTrigger } from '@shadcnui/components/ui/tabs';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PortfolioComponenet = () => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleTabChange = (value) => {
    navigate(`${value}`);
  };

  return (
    <div className="mt-5">
      <Tabs defaultValue="education" className="w-full" onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>
      </Tabs>
      <Outlet />
    </div>
  );
};

export default PortfolioComponenet;
