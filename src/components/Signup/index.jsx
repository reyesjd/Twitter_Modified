import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <form action="#">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="signupUser">Username:</label>
        <input type="text" name="signupUser" id="signupUser" />
        <label htmlFor="signupPass">Password:</label>
        <input type="password" name="signupPass" id="signupPass" />
        <Link to="/login">
          <input type="submit" value="SignUp" />
        </Link>
      </form>
    </>
  );
};
export default Signup;
