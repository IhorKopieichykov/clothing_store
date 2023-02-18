import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/_nulling.scss';
import { HashRouter } from 'react-router-dom';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
			<HashRouter>
				<App />
			</HashRouter>    
	</React.StrictMode>
);
