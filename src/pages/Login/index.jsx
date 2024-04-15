import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useNavigate } from "react-router-dom";

function Login() {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);
  const navigate = useNavigate();

  if (signed) {
    navigate("/");
  }

  return (
    <>
      <h1>login</h1>
      <div>form de login</div>
      <button onClick={() => signInGoogle()}>Logar com o Google</button>
    </>
  );
}

export default Login;
