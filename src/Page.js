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

 	componentWillReceiveProps(nextProps){
 		this.setState({
 			user:null
 		})
	    this.fetchUser(nextProps.match.params.username)
	}

    componentDidMount() {
		this.fetchUser(this.props.match.params.username)
    }

    fetchUser = (username) => {
    	this.setState({
			isLoading: true
		})
		axios
			.get(`https://api.github.com/users/${username}`)
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
			return (
				<h2 className="p-8"></h2>
			)
		}
		return (
			<User user={this.state.user} />
		)
	}
}

export default Page;