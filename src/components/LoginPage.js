import React, { useState } from "react";
import userData from "../data/users.json";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    const user = userData.find((user) => user.email_id === email && user.password === password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      history.push("/home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
