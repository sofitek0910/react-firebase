import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect, Link } from 'react-router-dom'
import moment from 'moment'


// Components
import ProjectTask from '../tasks/ProjectTask'
import RecentUpdates from '../tasks/RecentUpdates'
import { closeProject } from '../../store/actions/projectActions'
import { openProject } from '../../store/actions/projectActions'

const ProjectDetails = (props) => {
	const { project, auth } = props;
	let button;
	let link;
	// Redirect to Login page user if not login
	if (!auth.uid) return <Redirect to="/signin" />

	if (project) {
		if (auth.uid === project.authorId) {
			link = <Link to={"/project/" + props.match.params.id + "/edit"}><button className="waves-effect btn right orange"><i className="material-icons left">mode_edit</i>Edit Project</button></Link>

			if (project.status === "Close")
				button = <button onClick={() => { props.openProject(props.match.params.id) }} className="waves-effect btn right green"><i className="material-icons left">open_in_new</i>Open Project</button>
			else
				button = <button onClick={() => { props.closeProject(props.match.params.id) }} className="waves-effect btn right red"><i className="material-icons left">report</i>Close Project</button>
		}

		return (
  		<div className="container section project-details">
		    <div className="card z-depth-0">
		  		<div className="card-content">
		  			<span className="card-title">{ project.title }
		  				<span className="right">
		  					{button}
		  					{link}
		  				</span>
		  			</span>
		  			<p>{ project.details }</p>
		  		</div>
	  			<div className="card-action grey lighten-4 grey-text">
		  			<div>Posted by { project.authorFirstName } { project.authorLastName }</div>
		  			<div>{moment(project.createdAt.toDate()).calendar()}</div>
		  		</div>
		  	</div>

				<div className="row task-list">
					<h5 className="grey-text center">Tasks List</h5>
					<div className="col s12 m6">
						<ProjectTask />
					</div>
					<div className="col s12 m5 offset-m1">
						<RecentUpdates />
					</div>
				</div>
		  </div>
	  )
	} else {
		return (
			<div className="container center">
				<p>Loading project....</p>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;

	return {
		project: project,
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		closeProject: (project) => dispatch(closeProject(project)),
		openProject: (project) => dispatch(openProject(project)),
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{ collection: 'projects' }
	])
)(ProjectDetails)