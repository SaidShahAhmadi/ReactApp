import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call the server
    console.log("Your Form Submited");
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-4">
            <h2>Login </h2>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
