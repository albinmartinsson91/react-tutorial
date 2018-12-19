import React from 'react';

class Input extends React.Component {
	
	constructor(props) {
        super(props);
        this.renderedItems = []
		this.items = [
			{id: 'a', value:'Albin'},
			{id: 'b', value:'Sebastian'},
			{id: 'c', value:'David'},
			{id: 'd', value:'Stina'},
		]
    }

    componentWillMount() {
    	this.renderedItems = this.items.map(item => <li key={item.id}>{ item.value }</li>)
    }

	render() {
		return (
			<ul>
				{ this.renderedItems }
			</ul>
		)
	}
}

export default Input;