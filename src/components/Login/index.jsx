import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <form action="#">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <Link to="/home">
          <input type="submit" value="SignIn" />
        </Link>
      </form>
      <p>
        <Link to="/passwordRecovery">Forgot password</Link>
      </p>
    </>
  );
};
export default Login;
