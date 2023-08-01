import React from 'react';

import TaskItem from './TaskItem';

import './Tasks.css';

const Tasks = () => {
	const arr = ['asdasdas', 'asdasdasd', 'asdsadf786y8u', '654sd65fs'];

	return (
		<ul className="tasks">
			{arr.map(() => {
				return <TaskItem />;
			})}
		</ul>
	);
};

export default Tasks;
