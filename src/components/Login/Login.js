import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, withRouter } from "react-router-dom";
import { login, getRatings } from '../../actions';

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
              this.fetchRatings(this.props.userInfo.id)
              this.props.history.push('/');
            })
        } else {
          return response.json()
            .then(data => {
              this.setState({ error:data.error })
              console.log(data.error);
            })
        }
      }
    )
    .catch(err => console.log(err))
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

  fetchRatings = (userId) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`)
      .then(response => response.json())
      .then(data => this.props.fetchUserRatings(data.ratings))
  }

  validateForm = () => {
    const { email, password } = this.state;
    const validEmailRegex = RegExp(
      // eslint-disable-next-line
      /^(([^<>()\[\]\.,;:\s@\']+(\.[^<>()\[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/i
    );

    const validEmail = email != '' && validEmailRegex.test(email);
    const validPassword = password !== '';

    if (validEmail && validPassword) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const isEnabled = this.validateForm();
    return(
    <section className="login-container">
      <form>
        <h1 data-testid="login-header">Login</h1>
        <span className="error">{this.state.error}</span>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={this.handleUpdate}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          onChange={this.handleUpdate}
        />
        <button
          data-testid="login-btn"
          onClick={this.checkUserData}
          disabled={this.validateForm()}
        >Login</button>
      </form>
    </section>)
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: userInfo => dispatch( login(userInfo) ),
  fetchUserRatings: userRatings => dispatch( getRatings(userRatings) )
})

const mapStateToProps = (state) => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
