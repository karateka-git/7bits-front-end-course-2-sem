import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Doings extends React.Component {
  render() {
    const { key } = this.props;
    return (
      <article className="article">
        <p className={`article__description ${key}`}>{this.props.description}</p>
      </article>
    );
  };
};

Doings.propTypes = {
  description: PropTypes.string
};

Doings.defaultProps = {
  description: ''
};
