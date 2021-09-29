import React from 'react';
import { Link } from 'react-router-dom'

// Components
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
    	{ projects && projects.map(project => {
    		return (
    			<Link to={'/project/' + project.id} key={project.id}>
    				<ProjectSummary project={project} />
    			</Link>
    		)
    	}) }
    </div>
  )
}

export default ProjectList;