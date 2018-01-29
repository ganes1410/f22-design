import React, { Component } from 'react';
import Card from './Card';

class People extends Component {
	state = {
		results: []
	};

	componentDidMount() {
		fetch('https://randomuser.me/api/?results=12')
			.then(resp => resp.json())
			.then(users =>
				users.results.map(user => ({
					name: `${user.name.first} ${user.name.last}`,
					email: user.email,
					thumbnail: user.picture.thumbnail,
					state: user.location.state,
					nationality: user.nat
				}))
			)
			.then(results => this.setState({ results }));
	}

	render() {
		const { results } = this.state;

		return (
			<div>
				<Card results={results} />
			</div>
		);
	}
}

export default People;
