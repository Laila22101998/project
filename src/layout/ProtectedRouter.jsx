import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./Layout";

export const ProtectedRoute = () => {
  const user = useSelector((state) => state.app.app.login.userName);

  return user ? <Layout /> : <Navigate to="/login" />;
};
