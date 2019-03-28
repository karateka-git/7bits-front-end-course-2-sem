import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import FormField from "../formField/FormField";

export default class Button extends React.Component {

    render() {
        const {className, value, type, onClick, disabled} = this.props;
        return (
            <button
                className={`${className} button`}
                type={type}
                onClick={onClick}
                disabled={disabled}
            >
                {value}
            </button>
        )
    };
}

FormField.defaultProps = {
    className:'',
    type:'button',
    value: '',
    onClick: () => {},
    disabled: true
};

FormField.propTypes = {
    value:PropTypes.string,
    className:PropTypes.string,
    type:PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};