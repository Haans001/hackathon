import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import Navbar from "./Navbar";

const ProtectedRoute = ({ children }: { children: any }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/logowanie" />;
  } else {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  }
};

export default ProtectedRoute;
