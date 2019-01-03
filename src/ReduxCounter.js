import React from 'react'
import { connect } from 'react-redux'
import store from './store'

const mapStateToProps = store => {
    return {
        count: store.counter
    }
}

class ReduxCounter extends React.Component {

    constructor(props) {
        super(props)
    }

    onIncrement = () => {
        store.dispatch({
            type: 'INCREMENT'
        })
    }

    onDecrement = () => {
        store.dispatch({
            type: 'DECREMENT'
        })
    }

	render() {
		return (
			<div className="container">
                <div className="p-8">
    				<h1 className="">Redux</h1>
                    <h2>{this.props.count}</h2>
                    <button className="h-8 w-8 bg-grey mr-2 rounded" onClick={this.onIncrement}>+</button>
                    <button className="h-8 w-8 bg-grey rounded" onClick={this.onDecrement}>-</button>
                </div>
            </div>
		)
	}

}

export default connect(mapStateToProps)(ReduxCounter);