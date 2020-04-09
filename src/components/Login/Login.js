import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, withRouter } from "react-router-dom";


import { login } from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleUpdate = e => {
    this.validateForm();
    this.setState({[e.target.name]: e.target.value})
  }

  checkUserData = (e) => {
    e.preventDefault();
    const { loginUser } = this.props;

    this.fetchUserData()
      .then(response => {
        if(response.ok === true) {
          return response.json()
            .then(info => loginUser(info.user))
            .then(data => {
              this.props.history.push('/');
            })
        } else {
          return response.json()
            .then(data => this.setState({ error:data.error }))
        }
      }
    );
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
        <span className="error">{this.state.error}</span>
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
          <button
            onClick={this.checkUserData}
            disabled={this.validateForm()}
          >Login</button>
      </form>
    </main>)
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: userInfo => dispatch( login(userInfo) )
})

export default connect(null, mapDispatchToProps)(withRouter(Login));
