import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { login } from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: 'null'
    }
  }

  handleUpdate = e => {
    // run validate form
    this.validateForm();
    this.setState({[e.target.name]: e.target.value})
  }

  checkUserData = (e) => {
    // const { userInfo } = this.props;
    e.preventDefault();
    this.fetchUserData()
      .then(response => {
        if(response.ok === true) {
          return response.json()
            .then(info => this.props.loginUser(info.user));
        } else {
          console.log(response);
          alert("bad credentials");
          return
        }
        return;
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
    );
  }

  validateForm = () => {
    const { email, password } = this.state;
    const validEmail = email.includes('@') && email.includes('.io')
    const validPassword = password.includes('password')

    if (validEmail && validPassword) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const isEnabled = this.validateForm();

    return(
    <main className="login-container">
      <form>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="enter email"
          onChange={this.handleUpdate}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          placeholder="enter password"
          onChange={this.handleUpdate}
        />
        <Link to="/">
          <button
            onClick={this.checkUserData}
            disabled={this.validateForm()}
          >Login</button>
        </Link>
      </form>
    </main>)
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: userInfo => dispatch( login(userInfo) )
})

export default connect(null, mapDispatchToProps)(Login);
