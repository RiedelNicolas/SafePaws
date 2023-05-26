import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hook"
import { NavBar } from "./NavBar";
import { Subscription } from "../screens/Subscription";

export const AuthGuard = () => {
  const { status, paid } = useAppSelector((state) => state.auth);


  if (status === "authenticated") {
    
    if (!paid) {
      return <Subscription />;
    } 

    return (
      <>
        <NavBar/>
        <Outlet />
      </>
    );
  }

  return <Navigate to="/login" />;
}
