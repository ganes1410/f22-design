import React from 'react'
import './Header.css'
import Input from './Input'

const Header = () => (
	<div className="header">
		<p className='heading'>Candidates 
			<span className="results"><span className='line'>|</span>12 results</span>
			</p>
		<Input />
	</div>
);

export default Header;
