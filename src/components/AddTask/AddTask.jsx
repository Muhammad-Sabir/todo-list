import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddTask.module.css';

const AddTask = (props) => {
	const [enteredTask, setEnteredTask] = useState('');
	const [isValid, setIsValid] = useState(true);

	const taskChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) setIsValid(true);

		setEnteredTask(event.target.value);
	};

	const onAddTaskHandler = (event) => {
		event.preventDefault();

		if (enteredTask.trim().length === 0) {
			setIsValid(false);
			return;
		}

		const task = {
			id: Math.floor(Math.random()) + '',
			statement: enteredTask,
		};

		const newTask = [task, ...props.tasks];

		props.setTasks(newTask);

		setEnteredTask('');
	};

	return (
		<Card className={styles['new-task']}>
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
				<Button onClick={onAddTaskHandler}>Add Task</Button>
			</div>
		</Card>
	);
};

export default AddTask;
