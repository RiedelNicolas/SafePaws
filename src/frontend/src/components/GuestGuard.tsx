import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hook"
import { Auth } from "../screens/Auth";

export const GuestGuard = () => {
  const { status } = useAppSelector((state) => state.auth);

  if (status !== "authenticated") {
    return (
      <Auth>
        <Outlet />
      </Auth>
    )
  }

  return <Navigate to="/" />;
}
