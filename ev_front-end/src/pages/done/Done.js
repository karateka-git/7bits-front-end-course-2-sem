import React from 'react';

import Doings from '../../components/doings/Doings';

import list from './list';

import './style.css';

export default class Done extends React.Component {
  renderList = () => {
    return list.data.map((item, index) => {
      return (
        <Doings key={index} taskNumber={item.id} description={item.description} page={'done'}/>
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
