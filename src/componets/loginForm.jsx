import React, { Component } from "react";
import Input from "../common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleInputChange = ({ currentTarget: input }) => {
    const account = { ...this.state };
    //current input box
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //call the server
    console.log("Your Form Submited");
  };

  render() {
    //object-des
    const { account } = this.state;
    return (
      <div>
        <h2>Login </h2>
        <span>{account.username}</span>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleInputChange}
          />

          <Input
            name="password"
            value={this.password}
            label="Password"
            onChange={this.handleInputChange}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
