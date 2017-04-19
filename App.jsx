import React from 'react';
import Request from 'superagent';
import _  from 'lodash';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			text: 'hello world'
		};
	}
	componentWillMount(){
		var url = "http://www.omdbapi.com/?s=star&y=&r=json$plot=short";
		Request.get(url).then((response) => {
			this.setState({
				movies : response.body.Search
				
			});
		});
	}
	clicked(){
		this.setState({text: this.refs.textBox.value});

	}
	render() {
		const img = ("./images/nature1.jpg");
		var movies = _.map(this.state.movies, (movie) => {
			return <li key={movie.imdbID}>{movie.Title}</li>;
		});
		return (
			<div>
				{this.state.text }
				<ul>{movies}</ul>
				<p>Hello World!!!</p>
				<input type="text" ref="textBox" />
				<button onClick={ (e) => {e.preventDefault(); this.clicked(); } }>Button</button>
			</div>
			);
	}
}
export default App;