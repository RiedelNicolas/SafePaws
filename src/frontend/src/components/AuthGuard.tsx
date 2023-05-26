import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hook"
import { NavBar } from "./NavBar";

export const AuthGuard = () => {
  const { status } = useAppSelector((state) => state.auth);

  if (status === "authenticated") {
    return (
      <>
        <NavBar/>
        <Outlet />
      </>
    );
  }

  return <Navigate to="/login" />;
}
