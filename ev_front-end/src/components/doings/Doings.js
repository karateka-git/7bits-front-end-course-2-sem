import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Doings extends React.Component {
  render() {
    const { keyee } = this.props;
    return (
      <article className="article">
        <p className={`article__description ${keyee}`}>{this.props.description}</p>
      </article>
    );
  };
};

Doings.propTypes = {
  description: PropTypes.string,
  keyee: PropTypes.string
};

Doings.defaultProps = {
  description: '',
  keyee: ''
};
