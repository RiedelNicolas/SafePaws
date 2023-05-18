import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hook"

export const GuestGuard = () => {
  const { status } = useAppSelector((state) => state.auth);

  if (status !== "authenticated") {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}
