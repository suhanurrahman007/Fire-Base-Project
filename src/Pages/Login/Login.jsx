import { useState } from "react";
import app from "../../FireBase/fireBase.init";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState();
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GitHubProvider = new GithubAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const userLogin = result.user;
        console.log(userLogin);
        setUser(userLogin);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  const handleGithubSignIn =() =>{
    signInWithPopup(auth, GitHubProvider)
      .then((result) => {
        const githubUser = result.user;
        setUser(githubUser);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  }
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut} className="btn btn-warning">
          Logout
        </button>
      ) : (
        <div className="space-x-5">
          <button onClick={handleSignIn} className="btn btn-success">
            Google Login
          </button>
          <button className="btn btn-success" onClick={handleGithubSignIn}>Github Login</button>
        </div>
      )}

      {user && (
        <div>
          <h2>{user?.displayName}</h2>
          <p>{user?.email}</p>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
