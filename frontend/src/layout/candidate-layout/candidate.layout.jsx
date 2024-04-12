import HeaderNavComponent from '@layout/header-nav/header-nav.component';
import SideNavComponent from '@layout/side-nav/side-nav.component';
import { Outlet } from 'react-router-dom';

const CandidateLayout = () => {
  return (
    <div className="flex min-h-screen w-full gap-2">
      <div className="flex flex-col basis-[25%]  gap-2">
        <div className="h-[4.5rem] w-full bg-white rounded-lg">
          <img src="/assets/Logo.png" className="w-full h-full object-contain" />
        </div>
        <SideNavComponent />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="h-[4.85rem] p-2 flex items-center w- bg-white rounded-lg">
          <HeaderNavComponent />
        </div>
        <div className="overflow-auto h-full px-8 bg-white rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CandidateLayout;
