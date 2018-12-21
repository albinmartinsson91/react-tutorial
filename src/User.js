import React from 'react';

class User extends React.Component {
	render() {
		return (
			<div className="container p-8">
				<div className="p-4 border rounded">
					<div className="inline-flex -mx-3">
						<div className="px-3">
							<img className="h-24 w-24 rounded" src={this.props.user.avatar_url} alt=""/>
						</div>
						<div className="content px-3 flex-1">
							<h2>{this.props.user.name}</h2>
							<div className="mt-1">
								<span>{this.props.user.location}</span>
								<span className="mx-2">|</span>
								<span>{this.props.user.company}</span>
							</div>
							<hr className="bg-grey h-px" />
							<h5>About</h5>
							<p>{this.props.user.bio}</p>
							<hr className="bg-grey h-px my-2" />
							<ul className="list-style-none list-reset rounded mt-2">
								<li className="mt-1">{this.props.user.public_repos} Public Repos</li>
								<li className="mt-1">{this.props.user.public_gists} Public Gists</li>
								<li className="mt-1">{this.props.user.followers} Followers</li>
								<li className="mt-1">{this.props.user.following} Following</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default User;