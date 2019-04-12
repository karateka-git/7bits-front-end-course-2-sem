import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOnButton = this.handleClickOnButton.bind(this);
    }

    handleClickOnButton(id) {
        alert(id);
    }

    render() {
        return (
            <button onClick={this.props.onClick}
                    className={`${this.props.className} button`}/>
        );
    };
};

Button.propTypes = {
    className: PropTypes.string,
    onClick: () => {},
    id: PropTypes.string
};

Button.defaultProps = {
    className: '',
    onClick: PropTypes.func,
    id: ''
};
