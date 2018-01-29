import React from 'react';
import './Button.css'

const Button = () => (
	<div>
		<button>
			<i className="fa fa-envelope-o" aria-hidden="true" />
			New Message
		</button>
		<span className='hire'>
			<i className="fa fa-check-circle" aria-hidden="true" /> Available for hire
		</span>
	</div>
);

export default Button;
