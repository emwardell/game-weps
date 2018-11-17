import React from 'react';
import logo from '../../../assets/images/gameweps_logo_400x400.jpg';
import './Menu.scss';

const menu = (
  <aside className="mdc-drawer">
    <div className="mdc-drawer__header">
      <img src={logo} alt="logo" />
    </div>
    <div className="mdc-drawer__content">
      <nav className="mdc-list nav-list">
        <div className="mdc-list-item">
          <i className="material-icons mdc-list-item__graphic">games</i>
          <span className="mdc-list-item__text">Games</span>
        </div>
      </nav>
    </div>
  </aside>
);

export default function Menu(props) {
  return menu;
}