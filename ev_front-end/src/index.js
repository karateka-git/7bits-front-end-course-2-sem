import React from 'react';
import ReactDOM from 'react-dom';
import Base from './layouts/base/Base';
import ToDo from './pages/todo/ToDo';

import './index.css';

ReactDOM.render(
  <Base>
    <ToDo/>
  </Base>,
  document.getElementById('root')
);
