import React, { useState, useEffect } from "react";
import "./style.scss";
import Input from "./Input";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    Username: "",
    Password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    if (userName && password) {
      setErrorMessage({
        Username: "",
        Password: "",
      });
    }
  }, [userName, password]);

  const handleChange = (event) => {
    if (event.target.name === "Username") {
      setErrorMessage({ ...errorMessage, Username: "" });
      setUserName(event.target.value);
    } else if (event.target.name === "Password") {
      setErrorMessage({ ...errorMessage, Password: "" });
      setPassword(event.target.value);
    }
  };
  const changePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (userName && password) {
      alert(
        `Done. Attemped login with username: ${userName} and password: ${password}`
      );

      // Here I would send credential to the service
      // const data = { username: userName, password: password };
      // fetch('https://zertificon.com/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      // });
    }
    if (!userName && !password) {
      setErrorMessage({
        Username: "Field is Required",
        Password: "Field is Required",
      });
    } else if (!userName) {
      setErrorMessage({ ...errorMessage, Username: "Field is Required" });
    } else if (!password) {
      setErrorMessage({ ...errorMessage, Password: "Field is Required" });
    }
  };
  return (
    <div className="backdrop">
      <div className="container">
        <div className="logo"></div>
        <header className="header">Management Center</header>
        <form className="form" onSubmit={submitForm}>
          <div className="inputFields">
            <Input
              fieldName="Username"
              error={errorMessage.Username}
              type="text"
              handleChange={handleChange}
            />
            <Input
              fieldName="Password"
              error={errorMessage.Password}
              type={isPasswordVisible ? "text" : "password"}
              handleChange={handleChange}
              icon={isPasswordVisible ? "on" : "off"}
              changePasswordVisibility={changePasswordVisibility}
            />
          </div>
          <button className="loginButton" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
