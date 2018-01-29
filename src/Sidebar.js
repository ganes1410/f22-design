import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
	<div className="sidebar">
		<ul>
			<li>
				<i className="fa fa-paper-plane fa-2x fa-circle" aria-hidden="true" />
			</li>
			<li>
				<i className="fa fa-rocket fa-2x" aria-hidden="true" />
			</li>
			<li>
				<i className="fa fa-gamepad fa-2x" aria-hidden="true" />
			</li>
			<li>
				<i className="fa fa-plus-circle fa-2x circle" aria-hidden="true" />
			</li>
		</ul>
	</div>
);

export default Sidebar;
