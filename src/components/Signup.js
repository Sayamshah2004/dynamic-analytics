import { signup } from "../auth/auth";
import { useState } from "react";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../auth/Validation";
export default function SignUp({ closeSignIn, login }) {
  //states for error handling
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //states for authentication
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setNameError(nameErr);
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (nameErr || passwordErr || emailErr) return;

    const userSignUp = signup({ name, email, password });
    if (userSignUp.success) {
      alert(userSignUp.message);
      closeSignIn();
    } else {
      alert(userSignUp.message);
    }
  };

  return (
    <>
      <div className="position-fixed start-0 top-0 vh-100 w-100 d-flex align-items-center justify-content-center overlay ">
        <div className="card auth-card p-4 gap-3 shadow">
          <div className="d-flex justify-content-between align-items-center">
            <h5>SignIn</h5>
            <i onClick={closeSignIn} className="bi bi-x fs-3"></i>
          </div>

          <form>
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <p style={{ color: "red" }}>{nameError}</p>
            <input
              className="form-control mb-3"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{ color: "red" }}>{emailError}</p>

            <input
              className="form-control mb-3"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{ color: "red" }}>{passwordError}</p>

            <input
              className="form-control mb-3"
              type="text"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p onClick={login} className="text-end fw-semibold auth-link">
              Already have an account
            </p>
          </form>

          <div className="d-flex justify-content-center align-items-center">
            <button
              onClick={handleSubmit}
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
