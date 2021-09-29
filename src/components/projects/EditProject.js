import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

// Component
import { editProject } from '../../store/actions/projectActions'

class EditProject extends Component {
	constructor(props) {
		super(props);

		if (this.props.project) {
  		this.state = {
	 			title: this.props.project.title,
	 			details: this.props.project.details,
	 		}
	 	} else {
	 		this.state = {
	 			title: null,
	 			details: null,
	 		}
	 	}

	 	if (this.state === null || this.state.detail === null) {
	 		this.setSet({
	 			...this.state,
	 			disabled: true
	 		});
	 	}
	}

	handleChange = (e) => {
		this.setState({
			...this.state,
			[e.target.id]: e.target.value,
			disabled: false
		});
	}

	handleSubmit = (e) => {
		// prevent page from being reload
		e.preventDefault();
		let title = !this.state.title ? document.getElementById("title").value : this.state.title;
		let details = !this.state.details ? document.getElementById("details").value : this.state.details;

		this.props.editProject(title, details, this.props.match.params.id);
	}


	render(){
		if (!this.props.project) {
			return (
				<div className="container center">Loading Project...</div>
			)
		} else {
			const { project, auth } = this.props;
			// Redirect to Login page user if not login
			if (!auth.uid) return <Redirect to="/signin" />

			return (
				<div className="container">
					<form onSubmit={this.handleSubmit} className="white">
						<h5 className="grey-text text-darken-3">Update Project</h5>
						<div className="input-field">
							<label htmlFor="title">Project Title</label>
							<input type="text" value={ !this.state.title ? project.title : this.state.title } id="title" onChange={this.handleChange} />
						</div>

						<div className="input-field">
							<label htmlFor="details">Project Details</label>
							<textarea className="materialize-textarea" value={ !this.state.details ? project.details : this.state.details } id="details" onChange={this.handleChange}></textarea>
						</div>

						<div className="input-field">
							<button className="btn pink lighten-1 z-depth-0" disabled={this.state.disabled} >Update Project</button>
						</div>
					</form>
				</div>
			)
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const project = state.firestore.data.projects ? state.firestore.data.projects[id] : null;

	return {
		auth: state.firebase.auth,
		project: project
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		editProject: (title, details, id) => dispatch(editProject(title, details, id))
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{ collection: 'projects' }
	])
)(EditProject)
