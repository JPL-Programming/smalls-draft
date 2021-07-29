import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener('scroll', (event) => {
	let scrollY = event.path[1].scrollY;
	let special = document.getElementsByClassName('special')[0];

	if (scrollY >= 240) {
		let special = document.getElementsByClassName('special')[0];

		special.style.position = 'fixed';
		special.style.margin = 'inherit';
		special.style.width = 'inherit';
		special.style.left = '53%';
		special.style.top = '1em';
	} else {
		special.style = '';
	}
});
