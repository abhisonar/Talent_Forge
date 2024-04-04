
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200 p-4">
        <div className="mb-4">
          <Link
            to="./basic-info"
            className="block mb-2 text-blue-600 hover:text-blue-800"
          >
            Edit Basic Information
          </Link>
          <Link
            to="./experience-detail"
            className="block mb-2 text-blue-600 hover:text-blue-800"
          >
            Edit Experience Detail
          </Link>
          <Link
            to="./education-detail"
            className="block mb-2 text-blue-600 hover:text-blue-800"
          >
            Edit Education Detail
          </Link>
          <Link
            to="./skill"
            className="block mb-2 text-blue-600 hover:text-blue-800"
          >
            Edit Skills Detail
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default LandingPage;
