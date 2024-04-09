import HeaderNavComponent from '@layout/header-nav/header-nav.component';
import SideNavComponent from '@layout/side-nav/side-nav.component';
import { Outlet } from 'react-router-dom';

const CandidateLayout = () => {
  return (
    <div className="flex h-screen w-screen divide-x divide-y">
      <div className="flex flex-col basis-[25%]">
        <div className="h-[4.5rem]">
          <img src="/assets/Logo.png" className="w-full h-full object-contain" />
        </div>
        <SideNavComponent />
      </div>
      <div className="w-full flex flex-col divide-y">
        <div className="h-[4.5rem] p-2">
          <HeaderNavComponent />
        </div>
        <div className="overflow-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CandidateLayout;
