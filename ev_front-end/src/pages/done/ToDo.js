import React from 'react';

import Doings from '../../components/doings/Doings';

import list from './list';

import './style.css';

export default class ToDo extends React.Component {
  renderList = () => {
    return list.data.map((item, index) => {
      return (
        <Doings key={index} description={item.description} />
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.renderList()}
      </React.Fragment>
    );
  };
};
