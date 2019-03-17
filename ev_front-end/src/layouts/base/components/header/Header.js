import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import logo from "./images/logo_white.png"

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header__content'>
            <a className='header__logo' href='/'>
                <img src={logo} alt={""}>
                </img>
            </a>
            <a className='header__name-user' href='/'> {this.props.userName} </a>
        </div>
      </header>
    );
  };
};

Header.propTypes = {
    userName: PropTypes.string
};

Header.defaultProps = {
    userName: 'guest'
};
