import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import './index.css';
import { Router, browserHistory } from 'react-router';

ReactDOM.render(
<Router history={browserHistory} routes={Routes} />,
 document.getElementById('root'));

registerServiceWorker();
