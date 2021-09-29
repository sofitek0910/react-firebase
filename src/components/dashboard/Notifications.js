import React from 'react';
import moment from 'moment'

const Notifications = (props) => {
	const { notifications } = props;

  return (
    <div className="section">
    	<div className="card z-depth-0">
    		<div className="card-content">
    			<span className="card-title">Notifications</span>
    			<ul className="notifications">
    				{ notifications && notifications.map(notification => {
    					return (
    						<li key={notification.id}>
    							<div className="pink-text">{notification.user}</div>
    							<div className="">{notification.content}</div>
    							<div className="grey-text note-date">{moment(notification.time.toDate()).fromNow()}</div>
    						</li>
    					)
    				}) }
    			</ul>
    		</div>
    	</div>
    </div>
  )
}

export default Notifications;