import React from 'react';

import Tasks from '../../components/tasks/tasks';

import list from './list';

import './style.css';
import DoneTasks from "../../components/tasks/doneTasks/DoneTasks";

export default class Done extends React.Component {
  handleClickOnButton = (id) => {
    alert(id);
  };

  renderList = () => {
    return list.data.map((item, index) => {
      return (
        <Tasks key={index} taskNumber={item.id} description={item.description} page={'done'}
            buttonTask={<DoneTasks taskId={index.toString()}/>}
        />
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
