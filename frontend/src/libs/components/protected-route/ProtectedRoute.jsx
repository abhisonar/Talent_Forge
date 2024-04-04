import { checkUserTokenExpiry } from 'libs/resources/function/index.js';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ element }) => {
  const isTokenExpired = checkUserTokenExpiry();
  return isTokenExpired ? <Navigate to={'/authentication/login'} /> : element;
};

export default ProtectedRoute;
