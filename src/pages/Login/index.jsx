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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
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
    <>
            <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleSignInWithEmail}>Login</button>
      <button onClick={() => signInGoogle()}>Logar com o Google</button>
    </>
  );
}

export default Login;
