// Login.jsx
import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/components/login-form";
import { useAuth } from "@/contexts/authContext"; // make sure this exists

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async ({ email, password }) => {
    try {
      await login(email, password); // your login logic
      navigate("/"); // redirect after login
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
}
