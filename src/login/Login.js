import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log("Logging in now!");
    // firebase stuff, determine if pw and username correct

    let loginSuccess = true;

    if (loginSuccess) {
      navigate("/classroom");
    }
  };

  return (
    <div className={styles.loginParent}>
      <div className={styles.loginContainer}>
        <h1>Login</h1>
        <div className={styles.inputContainer}>
          <label>email</label>
          <input
            className={styles.inputField}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className={styles.inputContainer}>
          <label>Password</label>
          <input
            className={styles.inputField}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button className={styles.loginButton} onClick={handleClick}>
          Let Me Innn!
        </button>
      </div>
    </div>
  );
}

export default Login;
