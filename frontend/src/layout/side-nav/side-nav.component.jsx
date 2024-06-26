import { MAIN_MENUS } from '@restricted/candidate/data/constants/sidenav-menulist';
import { Link } from 'react-router-dom';

const SideNavComponent = () => {
  return (
    <div className="w-full bg-white p-4 h-full rounded-lg">
      <div className="sidenav-menu-list d-flex flex-column">
        {MAIN_MENUS.map((menu) => (
          <div key={menu.label}>
            <Link to={`.${menu.link}`}>{menu.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNavComponent;
