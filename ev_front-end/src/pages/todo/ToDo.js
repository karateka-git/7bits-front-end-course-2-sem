import React from 'react';

import Tasks from '../../components/tasks/tasks';

import list from './list';

import './style.css';
import FormField from "../../components/formField/FormField";
import Button from "../../components/tasks/button/Button";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      itemList: [...list.data],
      disabled: true
    };
  }

  handleClickOnButton = (id) => {
    alert(id);
  };

  renderList = (itemList) => {
    return itemList.map((item, index) => {
      return (
        <Tasks key={index} taskNumber={index.toString()} description={item.description} page={'todo'}
            buttonChange = {
              <Button
                className={"button__b-pen main__button_task"}
                onClick={this.handleClickOnButton.bind(this, this.props.taskNumber)}
              />
            }
            buttonDelete = {
              <Button
                className={"button__b-delete main__button_task"}
                onClick={this.handleClickOnButton.bind(this, this.props.taskNumber)}
              />
            }
            buttonDone ={
              <Button
                  className={"button__b-done main__button_task"}
                  onClick={this.handleClickOnButton.bind(this, this.props.taskNumber)}
              />
            }
      />
      );
    });
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.setState( {
      value: '',
      disabled: true,
      itemList: [
        {
          "description": this.state.value
        },
        ...this.state.itemList
      ]
    })
  };

  render() {
    return (
      <React.Fragment>
        <form
            className='todo-form'
            onSubmit={this.onSubmit}
        >
          <FormField
              className={'form__field'}
              value={this.state.value}
              placeholder={'Type you new task'}
              onChange={this.onChange}
              type={'text'}
          />
          <Button
            className={'form__button'}
            type={'submit'}
            value={'create'}
            disabled={this.state.value === ''}
          />
        </form>
        {this.renderList(this.state.itemList)}
      </React.Fragment>
    );
  };
};
