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
		if (!isCompleted) {
			const newTasks = props.tasks.filter(
				(currTask) => props.task.id !== currTask.id
			);

			props.setTasks([...newTasks, props.task]);
		} else {
			const newTasks = props.tasks.filter(
				(currTask) => props.task.id !== currTask.id
			);

			props.setTasks([props.task, ...newTasks]);
		}

		setIsCompleted(!isCompleted);
	};

	return (
		<li
			className={`${styles['task']} ${
				isCompleted ? styles['checked'] : ''
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
