import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Button from "./button/Button";

export default class Doings extends React.Component {
  render() {
    return (
        <div className={`main__task main__task_${this.props.page}`}>
          <Button name={"done"} id={this.props.taskNumber}/>
          {/*<button className='button__b-done button main__button_task'/>*/}
          <h1 className='task__description'>{this.props.description}</h1>
          <Button name={"pen"} id={this.props.taskNumber}/>
          <Button name={"delete"} id={this.props.taskNumber}/>
          {/*<button className='button__b-pen button main__button_task'/>*/}
          {/*<button className='button__b-delete button main__button_task'/>*/}
        </div>
    );
  };
};

Doings.propTypes = {
  description: PropTypes.string,
  taskNumber: PropTypes.string,
  page: PropTypes.string
};

Doings.defaultProps = {
  description: '',
  taskNumber: '',
  page: ''
};
