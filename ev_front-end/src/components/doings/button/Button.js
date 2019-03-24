import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Button extends React.Component {
    handleClickOnButton;
    constructor(props) {
        super(props);
        this.handleClickOnButton = this.handleClickOnButton.bind(this);
    }

    static handleClickOnButton(id) {
        alert(id);
    }

    render() {
        return (
            <button onClick={this.handleClickOnButton.bind(this, this.props.id)}
                    className={`button__b-${this.props.name} button main__button_task`}/>
        );
    };
};

Button.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string
};

Button.defaultProps = {
    name: '',
    id: ''
};
