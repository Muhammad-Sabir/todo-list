import React from 'react';

import TaskItem from './TaskItem';

import './Tasks.css';

const Tasks = ({ tasks, onDeleteTask }) => {
	const deleteItemHandler = (id) => {
		onDeleteTask(id);
	};

	return (
		<ul className="tasks">
			{tasks.map((task) => {
				return (
					<TaskItem
						key={task.id}
						task={task}
						onDeleteItem={deleteItemHandler}
					/>
				);
			})}
		</ul>
	);
};

export default Tasks;
