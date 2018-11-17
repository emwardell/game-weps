import React from 'react';
import './GameList.scss';

const list = (
  <div className="games">
    <h2 className="mdc-typography--headline4">Games</h2>
    <ul className="mdc-list game-list">
      <li className="mdc-list-item">
        <span className="mdc-list-item__text">Test Game</span>
      </li>
      <li className="mdc-list-item">
        <span className="mdc-list-item__text">Remove this when dynamic</span>
      </li>
    </ul>
  </div>
);

export default function GameList(props) {
  return list;
}