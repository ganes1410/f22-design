import React from 'react';
import './Card.css';
import Button from './Button';
import BgImage from './Image';
import Header from './Header';
import Sidebar from './Sidebar';

const Card = ({ results }) => (
	<div>
		{/* <Sidebar /> */}

		<div className="container">
			<Header />
			<Sidebar/>
			{results.map((result,i) => (
				<div className="card" key={result.email}>
					<BgImage index={i}/>
					<img
						src={result.thumbnail}
						alt="profile thumbanail"
						className="thumbnail"
					/>{' '}
					<span className="name">
						{result.name}
						<i className="fa fa-trash-o" aria-hidden="true" />
						<i className="fa fa-cog" aria-hidden="true" />
					</span>
					<p className="location">
						<i className="fa fa-map-marker" aria-hidden="true" />
						{result.state},{result.nationality}
					</p>
					<Button />
				</div>
			))}
		</div>
	</div>
);

export default Card;
