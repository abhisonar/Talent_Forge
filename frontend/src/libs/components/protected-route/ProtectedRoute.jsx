import { checkUserTokenExpiry } from 'libs/resources/function/index.js';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const isTokenExpired = checkUserTokenExpiry();
  return isTokenExpired ? <Navigate to={'/authentication/login'} /> : children;
};

export default ProtectedRoute;
