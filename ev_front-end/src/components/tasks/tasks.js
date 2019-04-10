import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Tasks extends React.Component {
  handleClickOnButton = (id) => {
      alert(id);
  };
    render() {
      return (
          <div className={`main__task main__task_${this.props.page}`}>
              {this.props.buttonDone};
            <h1 className='task__description'>{this.props.description}</h1>
              {this.props.buttonChange};
              {this.props.buttonDelete};
          </div>
      );
    };

};

Tasks.propTypes = {
  description: PropTypes.string,
  taskNumber: PropTypes.string,
  page: PropTypes.string,
  buttonDone: PropTypes.object,
  buttonChange: PropTypes.object,
  buttonDelete: PropTypes.object
};

Tasks.defaultProps = {
  description: '',
  taskNumber: '',
  page: '',
  buttonDone: '',
  buttonChange: '',
  buttonDelete: ''
};
