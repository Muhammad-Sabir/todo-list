import React from 'react';

import './TaskItem.css';

const TaskItem = ({ taskStatement }) => {
	return <li className="task-item">{taskStatement}</li>;
};

export default TaskItem;
