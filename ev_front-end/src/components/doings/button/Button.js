import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Button extends React.Component {
    render() {
        return (
            <button className={`button__b-${this.props.name} button main__button_task`}/>
        );
    };
};

Button.propTypes = {
    name: PropTypes.string
};

Button.defaultProps = {
    name: ''
};
