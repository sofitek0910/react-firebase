import React, { Component } from 'react';

class CreateTask extends Component {
	state = {
		taskTitle: '',
		taskDescription: '',
	}

	handleChange = (e) => {
		this.setState({
			// get the id that's being changed
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		// prevent page from being reload
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Create New Task</h5>
					<div className="input-field">
						<label htmlFor="taskTitle">Task Title</label>
						<input type="text" id="taskTitle" onChange={this.handleChange} />
					</div>

					<div className="input-field">
						<label htmlFor="taskDescription">Task Description</label>
						<textarea className="materialize-textarea" id="taskDescription" onChange={this.handleChange}></textarea>
					</div>

					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Create Task</button>
					</div>
				</form>
			</div>
		)
	}
}

export default CreateTask;
