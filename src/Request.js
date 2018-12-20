import React from 'react';
import axios from 'axios';

class Request extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
        	username: 'albinmartinsson91',
        	company: undefined,
        	loading: false,
        	error: ''
        }
    }

    updateUsername = event => {
    	this.setState({
    		username: event.target.value
    	})
    }

    fetchUserCompany = () => {
    	this.setState({
			loading: true
		})
    	axios({
    		url: 'https://api.github.com/graphql',
			method: 'post',
			data: {
				query: `{
				  user(login: "${this.state.username}") {
				    company
				  }
				}`,
			},
			headers: {
				Authorization: `bearer 97ea05d8bbbedc430c015ab240bece2257047421`,
			},
    	}).then(response => {
    		console.log(response)
    		this.setState({
    			company: response.data.data.user.company,
    			loading: false,
    		})
    	}).catch(error => {
			this.setState({
				error: 'Something went wrong!',
				loading: false,
			})
    	})
    }

	render() {
		return (
			<div className="inline-flex justify-between w-full items-center h-16">
				<div className="flex flex-col">
					<input className="border p-4 rounded" onBlur={this.updateUsername} type="text"/>
					<button className="bg-blue rounded p-4" onClick={this.fetchUserCompany}>{this.state.loading ? 'Laddar' : 'Hämta data'}</button>
				</div>
				<h2>{this.state.error !== '' ? this.state.error : this.state.company}</h2>
			</div>
		)
	}
}

export default Request;