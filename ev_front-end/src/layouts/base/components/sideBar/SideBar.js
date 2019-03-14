import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class SideBar extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <aside className={`side-bar${className ? ` ${className}` : ''}`}>
        <nav className={'side-bar_nav-menu nav-menu'}>
          <ul className={'nav-menu__list'}>
            <li className={'nav-menu__item'}>
              <h1 className='side-bar__element side-bar__todo'>To Do</h1>
            </li>
            <li className={'nav-menu__item'}>
              <h1 className='side-bar__element side-bar__done'>Done</h1>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
};

SideBar.propTypes = {
  className: PropTypes.string
};

SideBar.defaultProps = {
  className: ''
};
