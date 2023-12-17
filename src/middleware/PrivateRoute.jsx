import useStore from "../store";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { auth } = useStore();
  if (!auth) {
    return <Navigate to="/dashboard/auth" />;
  }
  return <Outlet />;
};
