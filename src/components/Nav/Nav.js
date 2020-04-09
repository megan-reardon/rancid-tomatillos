import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../actions';

import logo from '../../svgs/rancid-tomatillos-logo.svg';

const Nav = ({ userInfo, history, logout }) => {
  const loginText = userInfo.id ? 'Logout' : 'Login';
  const welcomeMessage = userInfo.name ? `Welcome, ${userInfo.name}!` : '';

  const handleLogout = (id) => {
    logout(id)
    history.push('/');
  }

  const loginToPath = !userInfo.id ? "/login" : "/";

  return (
    <header>
      <div className="margin-wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Rancid Tomatillos Logo" />
          </Link>
        </div>
        <div className="login-wrap">
          <span>{welcomeMessage}</span>
          <Link
            to={loginToPath}
            className="login-button"
            onClick={userInfo.id && (() => handleLogout(userInfo.id))}
            >
            {loginText}
          </Link>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = ({ userInfo }) => ({
  userInfo
})

const mapDispatchToProps = dispatch => ({
  logout: id => dispatch( logout(id) )
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
