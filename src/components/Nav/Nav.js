import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../svgs/rancid-tomatillos-logo.svg';

const Nav = ({ userInfo }) => {
  let loginText = userInfo.id ? 'Logout' : 'Login';
  let welcomeMessage = userInfo.name ? `Welcome, ${userInfo.name}!` : '';

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
            to="/login"
            className="login-button"
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

export default connect(mapStateToProps)(Nav);
