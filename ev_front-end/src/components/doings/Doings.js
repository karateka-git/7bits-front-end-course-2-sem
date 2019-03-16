import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Doings extends React.Component {
  render() {
    return (
        <input
            type={'button'}
            value={this.props.description}
            className={'main__button button'}
        />
    );
  };
};

Doings.propTypes = {
  description: PropTypes.string,
  taskNumber: PropTypes.string
};

Doings.defaultProps = {
  description: '',
  taskNumber: ''
};
