import { Navigate } from 'react-router-dom';
import { Layout } from './Layout';

export const ProtectedRoute = () => {
    let logintoken = { token: JSON.stringify(sessionStorage.getItem("token")) };
    let AdminName = { admin: JSON.parse(sessionStorage.getItem("admin")) };
  return logintoken.token && AdminName.admin ? (
   <Layout/>
    ) : (
        <Navigate to="/login" />
      );
  
}
