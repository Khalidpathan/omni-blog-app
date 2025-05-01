import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext"; // Make sure path is correct

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  return element; // Render the element if authenticated
};

export default PrivateRoute;
