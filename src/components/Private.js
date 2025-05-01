import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/authContext"; 

const Private = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Private;
