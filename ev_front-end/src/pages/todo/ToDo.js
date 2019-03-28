import React from 'react';

import Doings from '../../components/doings/Doings';

import list from './list';

import './style.css';
import FormField from "../../components/formField/FormField";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      itemList: [...list.data]
    };
  }
  renderList = (itemList) => {
    return itemList.map((item, index) => {
      return (
        <Doings key={index} taskNumber={index.toString()} description={item.description} page={'todo'}/>
      );
    });
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value
    })
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.setState( {
      value: '',
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
          />
          <button className={'button form_button'} type='submit' >
            create
          </button>
        </form>
        {this.renderList(this.state.itemList)}
      </React.Fragment>
    );
  };
};
