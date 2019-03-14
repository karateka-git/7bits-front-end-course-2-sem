import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import './style.css';

export default class SideBar extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <aside className={`side-bar${className ? ` ${className}` : ''}`}>
        <nav className={'side-bar_nav-menu nav-menu'}>
          <ul className={'nav-menu__list'}>
            <li className={'nav-menu__item'}>
                <NavLink exact to={'/'} className={'nav-menu__link nav-menu__todo'}
                         activeClassName={'nav-menu__link_active nav-menu__todo_active'}>
                    To Do
                </NavLink>
            </li>
            <li className={'nav-menu__item'}>
                <NavLink to={'/done'} className={'nav-menu__link nav-menu__done'}
                         activeClassName={'nav-menu__link_active nav-menu__done_active'}>
                    Done
                </NavLink>
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
