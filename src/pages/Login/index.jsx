import { useContext, useState } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

function Login() {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");

  const auth = getAuth();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignInWithEmail = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();
      sessionStorage.setItem("@AuthFirebase:token", token);
      sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      console.log("Usuário logado:", user);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error("Erro ao fazer login:", error);
    }
  };

  if (signed) {
    navigate("/");
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="input-group">
        <label className="form-login-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
        />
      </div>
      <div className="input-group">
        <label className="form-login-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="password-input"
        />
      </div>
      <button onClick={handleSignInWithEmail} className="login-button">Login</button>
      <button onClick={() => signInGoogle()} className="google-login-button"><span className="google-logo"></span>Logar com o Google</button>
    </div>
  );
}

export default Login;
