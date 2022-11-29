import React from "react";

function Form(prop) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!prop.isRegistered ? (
        <input type="password" placeholder="Confirm Password" />
      ) : null}
      {/* if not registered confirm pwd, else dont show any input */}
      <button type="submit">{!prop.isRegistered ? "Register" : "Login"}</button>
      {/* Register if no account, else login */}
    </form>
  );
}

export default Form;
