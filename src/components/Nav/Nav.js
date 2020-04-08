import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import logo from '../../svgs/rancid-tomatillos-logo.svg';

const Nav = ({ userInfo }) => {
  let loginText = userInfo.id ? 'Logout' : 'Login';

  return (
    <header>
      <div className="margin-wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Rancid Tomatillos Logo" />
          </Link>
        </div>
        <Link
          to="/login"
          className="login-button"
        >
          {loginText}
        </Link>
      </div>
    </header>
  )
}

export default Nav;
