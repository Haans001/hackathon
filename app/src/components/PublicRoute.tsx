import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import NotLoggedNavbar from "./NotLoggedNavbar";

const PublicRoute = ({ children }: { children: any }) => {
  const { user } = useAuth();
  if (!user) {
    return (
      <>
        <NotLoggedNavbar />
        {children}
      </>
    );
  } else {
    return <Navigate to="/panel" replace />;
  }
};

export default PublicRoute;
