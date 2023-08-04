import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import styles from './Task.module.css';

const Task = (props) => {
	const [isCompleted, setIsCompleted] = useState(false);

	const onDeleteItemHandler = () => {
		const newTasks = props.tasks.filter(
			(currTask) => props.task.id !== currTask.id
		);

		props.setTasks(newTasks);
	};

	const onCheckboxChangeHandler = () => {
		props.setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === props.task.id
					? { ...task, isDone: !task.isDone }
					: task
			)
		);
	};

	return (
		<li
			className={`${styles['task']} ${
				props.task.isDone ? styles['checked'] : ''
			}`}
		>
			<p className={`${styles['task__statement']}`}>
				{props.task.statement}
			</p>
			<div className={styles['task__controls']}>
				<input
					className={styles['task__controls-checkbox']}
					type="checkbox"
					onChange={onCheckboxChangeHandler}
					checked={props.task.isDone}
				/>
				<FontAwesomeIcon
					className={styles['task__controls-trash']}
					onClick={onDeleteItemHandler}
					icon={faTrash}
					style={{ color: 'white' }}
				/>
			</div>
		</li>
	);
};

export default Task;
