import { Link } from 'react-router-dom';

const SideNavComponent = () => {
  return (
    <div className="w-full bg-gray-200 p-4 h-full">
      <div className="mb-4">
        <Link to="./basic-info" className="block mb-2 text-blue-600 hover:text-blue-800">
          Edit Basic Information
        </Link>
        <Link to="./experience-detail" className="block mb-2 text-blue-600 hover:text-blue-800">
          Edit Experience Detail
        </Link>
        <Link to="./education-detail" className="block mb-2 text-blue-600 hover:text-blue-800">
          Edit Education Detail
        </Link>
        <Link to="./skill" className="block mb-2 text-blue-600 hover:text-blue-800">
          Edit Skills Detail
        </Link>
      </div>
    </div>
  );
};

export default SideNavComponent;
