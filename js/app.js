var UserGist = React.createClass({
	getInitialState: function() {
		return {
			username: '',
			actions: ''
		};
	},

	componentDidMount: function() {
		$.get(this.props.source, function(result) {
			var lastGist = result[0];
			if (this.isMounted()) {
				console.log(result);
				this.setState({
					username: lastGist.name,
					lastGistUrl: lastGist.actions[0]
				});
			}
		}.bind(this));
	},

	render: function() {
		return (
			<div>
				{this.state.username}'s last gist is
				<a href={this.state.lastGistUrl}>here</a>.
			</div>
		);
	}
});

React.render(
	<UserGist source="http://localhost:3000/users" />,
	document.getElementById('users')
);