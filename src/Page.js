import React from 'react';
import axios from 'axios';
import User from './User';

class Page extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
        	user: null,
        	isLoading: false,
        }
    }

    componentDidMount() {
		this.fetchUser()
    }

    fetchUser = () => {
    	this.setState({
			isLoading: true
		})
		axios
			.get(`https://api.github.com/users/${this.props.match.params.username}`)
			.then(response => {
				this.setState({
					user: response.data,
					isLoading: false
				})
			})
			.catch(error => {
				console.log(error)
			})
    }

	render() {
		//Render user component if state is set
		if (!this.state.user) {
			return null;
		}
		return (
			<User user={this.state.user} />
		)
	}
}

export default Page;