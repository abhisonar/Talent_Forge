import { Tabs, TabsList, TabsTrigger } from '@shadcnui/components/ui/tabs';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UiTab from '@libs/design-system/ui-tab/ui-tab.component';
import UiTabMenu from '@libs/design-system/ui-tab-menu/ui-tab-menu.component';

const PortfolioComponenet = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([
    {
      label: 'Education',
      link: 'education',
      icon: 'pi pi-graduation-cap',
    },
    {
      label: 'Experience',
      link: 'experience',
      icon: 'pi pi-briefcase',
    },
    {
      label: 'Skills',
      link: 'skills',
      icon: 'pi pi-code',
    },
    {
      label: 'Certifications',
      link: 'certifications',
      icon: 'pi pi-list-check',
    },
  ]);

  useEffect(() => {}, []);

  const handleTabChange = (value) => {
    navigate(`${value?.link}`);
  };

  return (
    <div className="mt-5">
      <UiTabMenu items={items} onTabChange={handleTabChange} />
      <Outlet />
    </div>
  );
};

export default PortfolioComponenet;
