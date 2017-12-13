import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TokenList from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TokenList />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
	module.hot.accept();
}