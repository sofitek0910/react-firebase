import React from 'react';

const TaskSummary = (props) => {
	return (
		<div className="project-summary card z-depth-0">
  		<div className="card-content grey-text text-darken-3">
  			<span className="card-title">Task Title</span>
  			<span>Task Description</span>
  			<p>Created by Micmic</p>
  			<p className="grey-text">Created on 31st of May, 12pm</p>
  		</div>
  	</div>
	)
}

export default TaskSummary