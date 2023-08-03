import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import styles from './AddTask.module.css';

const AddTask = (props) => {
	const [enteredTask, setEnteredTask] = useState('');
	const [error, setError] = useState(null);

	const taskChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) {
		}

		setEnteredTask(event.target.value);
	};

	const onAddTaskHandler = () => {
		if (enteredTask.trim().length === 0) {
			setError({
				title: 'Invalid input!',
				message: 'Please enter some task.',
			});
			return;
		}

		const task = {
			id: uuid(),
			statement: enteredTask,
			isDone: false,
		};

		const newTask = [task, ...props.tasks];

		console.log(newTask);

		props.setTasks(newTask);
		setEnteredTask('');
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={styles['new-task']}>
				<div className={styles['new-task__controls']}>
					<label>New task: </label>
					<input
						type="text"
						value={enteredTask}
						onChange={taskChangeHandler}
						onKeyDown={(event) => {
							event.key === 'Enter' && onAddTaskHandler();
						}}
					/>
				</div>

				<div className={styles['new-task__actions']}>
					<Button onClick={onAddTaskHandler}>Add Task</Button>
				</div>
			</Card>
		</>
	);
};

export default AddTask;
