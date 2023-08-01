import React, { useState } from 'react';

import styles from './TaskForm.module.css';

const TaskForm = ({ onSubmitNewTask }) => {
	const [enteredTask, setEnteredTask] = useState('');
	const [isValid, setIsValid] = useState(true);

	const taskChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) setIsValid(true);

		setEnteredTask(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		if (enteredTask.trim().length === 0) {
			setIsValid(false);
			return;
		}

		const task = {
			id: Math.floor(Math.random()) + '',
			statement: enteredTask,
		};
		onSubmitNewTask(task);

		setEnteredTask('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div
				className={`${styles['new-task__controls']} ${
					!isValid && styles['invalid']
				}`}
			>
				<label>New task: </label>
				<input
					type="text"
					value={enteredTask}
					onChange={taskChangeHandler}
				/>
			</div>

			<div className={styles['new-task__actions']}>
				<button>Add Task</button>
			</div>
		</form>
	);
};

export default TaskForm;
