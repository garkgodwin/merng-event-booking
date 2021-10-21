import React, { useState } from "react";
import { LOGIN } from "../../graphql/queries/user.queries";
import { useLazyQuery } from "@apollo/client";

import "./LoginForm.css";

//?COMPONENTS
import FormButton from "../buttons/FormButton";
import Input from "../inputs/Input";

const LoginForm = () => {
  const [login, { error, loading, data }] = useLazyQuery(LOGIN);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({
      variables: {
        input: inputs,
      },
    });

    if (error) {
      console.log("error");
    }
  };
  const changeEmail = (e) => {
    const value = e.target.value;
    setInputs({
      ...inputs,
      email: value,
    });
  };
  const changePassword = (e) => {
    const value = e.target.value;
    setInputs({
      ...inputs,
      password: value,
    });
  };
  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <Input
        cName="input-primary input-m"
        text="Email"
        placeholder="Email"
        type="text"
        value={inputs.email}
        changeValue={changeEmail}
      />
      <Input
        cName="input-primary input-m"
        text="Password"
        placeholder="Password"
        type="password"
        value={inputs.password}
        changeValue={changePassword}
      />
      <FormButton cName="btn-primary" text="Submit" type="submit" />
    </form>
  );
};

export default LoginForm;
