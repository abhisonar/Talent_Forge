import { checkUserTokenExpiry } from '@libs/resources/function';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const AuthenticationLayout = () => {
  const isTokenExpired = checkUserTokenExpiry();

  return isTokenExpired ? <Outlet /> : <Navigate to={'/candidate'} />;
};

export default AuthenticationLayout;
