import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hook"


export const GuestGuard = () => {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Outlet/>;
  }
  
  return <Navigate to="/" />;
}
