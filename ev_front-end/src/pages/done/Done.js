import React from 'react';

import Tasks from '../../components/tasks/tasks';

import list from './list';

import './style.css';
import Button from "../../components/tasks/button/Button";



export default class Done extends React.Component {
  handleClickOnButton = (id) => {
    alert(id);
  };

  renderList = () => {
    return list.data.map((item, index) => {
      return (
        <Tasks key={index} taskNumber={item.id} description={item.description} page={'done'}
           buttonDelete = {
             <Button
                 className={"button__b-delete main__button_task"}
                 onClick={this.handleClickOnButton.bind(this, this.props.taskNumber)}
             />
           }
           buttonDone ={
             <Button
                 className={"button__b-done main__button_task"}
             />
           }
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
