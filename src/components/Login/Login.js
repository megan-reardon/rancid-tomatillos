import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    }
  }

  updateHandle = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  checkUserData = (e) => {
    e.preventDefault();
    this.fetchUserData()
      .then(response => {
        if(response.ok === true) {
          this.fetchUserData()
            .then(response => response.json())
            .then(data => console.log(data))
        } else {
          alert("bad credentials");
        }
      }
    )
  }

  fetchUserData = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login',
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(
            {email: this.state.email, password: this.state.password}
        ),
      }
    )
  }

  render() {
    return(
    <main className="login-container">
      <form>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="enter email"
          onChange={this.updateHandle}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          placeholder="enter password"
          onChange={this.updateHandle}
        />
        <Link to={"/"}>
          <button onClick={this.checkUserData}>Login</button>
        </Link>
      </form>
    </main>)
  }
}

export default Login
