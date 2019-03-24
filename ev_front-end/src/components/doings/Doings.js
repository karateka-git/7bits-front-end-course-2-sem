import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Button from "./button/Button";

export default class Doings extends React.Component {
  render() {
    return (
        <div className={`main__task main__task_${this.props.page} task-id-${this.props.taskNumber}`}>
          <Button name={"done"}/>
          <h1 className='task__description'>{this.props.description}</h1>
          <Button name={"pen"}/>
          <Button name={"delete"}/>
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
