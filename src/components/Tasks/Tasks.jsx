import React from 'react';

import TaskItem from './TaskItem';

import './Tasks.css';

const Tasks = ({ tasks }) => {
	return (
		<ul className="tasks">
			{tasks.map((task) => {
				return (
					<TaskItem key={task.id} taskStatement={task.statement} />
				);
			})}
		</ul>
	);
};

export default Tasks;
