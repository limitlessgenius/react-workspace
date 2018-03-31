//Purpose of component:
//Input user types

import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class SearchBar extends Component {
	
	constructor(props) {
		super(props); 
		this.state = { term: '' }; 
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange= {e => this.onInputChange(e.target.value)}
				/>
			</div>
		)
	}

	onInputChange(term) {
		//Wraps it into a function to do two operations
		//Update state of component for it to be a controlled field form
		//Call the callback to be an update of the video detail
		this.setState({ term })
		this.props.onSearchTermChange(term)
	}
}

export default SearchBar



























