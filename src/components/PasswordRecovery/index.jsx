const PasswordRecovery = () => {
  return (
    <>
      <form action="#">
        <label htmlFor="recovery">
          Enter your email, phone number or username:
        </label>
        <input type="text" name="recovery" id="recovery" />
        <input type="submit" value="SignIn" />
      </form>
    </>
  );
};
export default PasswordRecovery;
