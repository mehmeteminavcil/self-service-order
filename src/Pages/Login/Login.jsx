import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate("/");
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label>
          <span>Email:</span>
          <input
            type="text"
            placeholder="email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            placeholder="write your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
