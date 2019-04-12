import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Button from "../button/Button";

export default class TodoTasks extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOnButton = this.handleClickOnButton.bind(this);
    }

    handleClickOnButton(id) {
        alert(id);
    }

    render() {
        return (
        <React.Fragment>
            <Button
                className={"button__b-pen main__button_task"}
                onClick={this.handleClickOnButton.bind(this, this.props.taskId)}
            />

            <Button
                className={"button__b-delete main__button_task"}
                onClick={this.handleClickOnButton.bind(this, this.props.taskId)}
            />

            <Button
                className={"button__b-done main__button_task"}
                onClick={this.handleClickOnButton.bind(this, this.props.taskId)}
            />
        </React.Fragment>
        )};
};

TodoTasks.propTypes = {
    taskId: PropTypes.string
};

TodoTasks.defaultProps = {
    taskNumber: ''
};
