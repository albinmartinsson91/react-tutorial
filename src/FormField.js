import React from 'react';

class FormField extends React.Component {
	constructor(props) {
        super(props);
        this.options = [
			'Oranges',
			'Apples',
			'Pears',
			'Kiwis',
		]
        this.state = {
			multiSelect: [],
			textField: '',
			textArea: '',
		}
    }

    handleTextFieldChange = event => {
    	const value = event.target.value
    	const allValues = value.split(',').map(v => v.trim()).filter(Boolean)
    	this.setState({
    		'textField': value,
    		'textArea': value
    			//Splits string into array at each comma
    			.split(',')
    			//Loops the array and trims whitespace
    			.map(v => v.trim())
    			//What does this do?
    			.filter(Boolean)
    			//Joins array items with string ' and '
    			.join('\n'),
    		'multiSelect': allValues.filter(v => this.options.includes(v))
    	})
    }

    handleTextAreaChange = event => {
    	const value = event.target.value
    	const allValues = value.split('\n').map(v => v.trim()).filter(Boolean)
    	this.setState({
    		'textField': value
    			//Splits string into array at each comma
    			.split('\n')
    			//Loops the array and trims whitespace
    			.map(v => v.trim())
    			//What does this do?
    			.filter(Boolean),
    		'textArea': value,
    		'multiSelect': allValues.filter(v => this.options.includes(v))
    	})
    }

    handleMultiSelect = event => {
    	const allValues = Array.from(event.target.selectedOptions,).map(o => o.value)
    	this.setState({
    		multiSelect: allValues,
    		textArea: allValues.join('\n'),
    		textField: allValues.join(',')
    	})
    }

	render() {
		return (
			<div className="inline-flex w-full items-start justify-between">
				<input className="w-full block border rounded p-4" type="text" value={this.state.textField} onChange={this.handleTextFieldChange}/>
				<textarea className="w-full block border rounded p-4" cols="30" rows="10" value={this.state.textArea} onChange={this.handleTextAreaChange}></textarea>
				<select
					className="w-full block border rounded p-4"
					multiple
					value={this.state.multiSelect}
					onChange={this.handleMultiSelect}
				>
					{
						this.options.map(
							optionValue => (
								<option
									key={optionValue}
									value={optionValue}
								>
									{optionValue}
								</option>
							),
						)
					}
              	</select>
			</div>
		)
	}
	
}

export default FormField;