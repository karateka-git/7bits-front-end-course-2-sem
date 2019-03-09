import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Doings extends React.Component {
  render() {
    return (
      <article className="article">
        <p className="article__description">{this.props.description}</p>
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
