import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

// Components
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

class Dashboard extends Component {
	render() {
		const { projects, auth, notifications } = this.props;

		if (!auth.uid) return <Redirect to="/signin" />

		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ProjectList projects={projects} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications notifications={notifications} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth,
		notifications: state.firestore.ordered.notifications
	}
}

export default compose(
	connect(mapStateToProps),
	// connect to Project collection in firebase
	firestoreConnect([
		{ collection: 'projects', orderBy: ['createdAt', 'desc'] },
		{ collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] }
	])
)(Dashboard)


