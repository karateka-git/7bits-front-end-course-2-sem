import React from 'react';

import Tasks from '../../components/tasks/tasks';

import list from './list';

import './style.css';
import FormField from "../../components/formField/FormField";
import Button from "../../components/button1/Button";
import TodoTasks from "../../components/tasks/todoTasks/TodoTasks";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      itemList: [...list.data],
      disabled: true
    };
  }

  renderList = (itemList) => {
    return itemList.map((item, index) => {
      return (
        <Tasks key={index} taskNumber={index.toString()} description={item.description} page={'todo'}
               buttonTask={<TodoTasks taskId={index.toString()}/>}
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
