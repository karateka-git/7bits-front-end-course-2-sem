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
      itemList: []
    };
  }
  renderList = (itemList) => {
    const items = itemList.map((item, index) => {
      return (
        <Doings key={index} taskNumber={item.id} description={item.description} page={'todo'}/>
      );
    });
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value
    })
  };

  render() {
    return (
      <React.Fragment>
        <form className='todo-form'>
          <FormField
              className={'form__field'}
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
