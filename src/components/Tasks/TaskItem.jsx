import React, { useState } from 'react';

import './TaskItem.css';

const TaskItem = ({ task, onDeleteItem }) => {
	return (
		<li onClick={() => onDeleteItem(task.id)} className="task-item">
			{task.statement}
		</li>
	);
};

export default TaskItem;
