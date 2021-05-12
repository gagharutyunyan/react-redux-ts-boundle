import './assets/css/reset.css';
import './assets/css/base.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';

const container = document.getElementById('the-app');

ReactDOM.render(<App />, container);
