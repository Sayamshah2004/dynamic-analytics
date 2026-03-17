import { useState } from "react";
import { validateEmail, validatePassword } from "../auth/Validation";
import { login } from "../auth/auth";
export default function LoginPage({ closeLogin, signIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) return;

    const userLogin = login(email, password);
    if (userLogin.success) {
      alert(userLogin.message);
      closeLogin();
    } else {
      alert(userLogin.message);
    }
  };

  return (
    <>
      <div className="position-fixed start-0 top-0 vh-100 w-100 d-flex align-items-center justify-content-center overlay">
        <div className="card auth-card p-3 gap-3 shadow">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Login</h5>
            <i onClick={closeLogin} className="bi bi-x fs-3"></i>
          </div>

          <form>
            <input
              className="form-control mb-3"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>{emailError}</p>
            <input
              className="form-control mb-3"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{passwordError}</p>
          </form>

          <p onClick={signIn} className="text-end fw-bold auth-link">
            Sign In
          </p>

          <div className="d-flex justify-content-center align-items-center">
            <button
              onClick={handleLogin}
              className="btn auth-btn"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
