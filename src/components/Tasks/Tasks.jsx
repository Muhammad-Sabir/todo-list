import React from 'react';

import TaskItem from './TaskItem';

import styles from './Tasks.module.css';

const Tasks = ({ tasks, onDeleteTask }) => {
	const deleteItemHandler = (id) => {
		onDeleteTask(id);
	};

	return (
		<ul className={styles['tasks']}>
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
