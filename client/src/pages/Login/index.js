import React from "react";

//?COMPONENTS
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
  return (
    <div className="Page page-login">
      <div className="pl-left">
        <h1>Welcome!</h1>
        <p>Please login to access the system</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
