import React, { useState } from 'react';

import styles from './Task.module.css';

const Task = (props) => {
	const onDeleteItemHandler = () => {
		const newTasks = props.tasks.filter(
			(currTask) => props.task.id !== currTask.id
		);

		props.setTasks(newTasks);
	};

	return (
		<li onClick={onDeleteItemHandler} className={styles['task']}>
			{props.task.statement}
		</li>
	);
};

export default Task;
