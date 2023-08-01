import React, { useState } from 'react';

import './TaskForm.css';

const TaskForm = ({ onSubmitNewTask }) => {
	const [enteredTask, setEnteredTask] = useState('');

	const taskChangeHandler = (event) => {
		setEnteredTask(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const task = {
			id: Math.floor(Math.random()) + '',
			statement: enteredTask,
		};
		onSubmitNewTask(task);

		setEnteredTask('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-task__controls">
				<label>New task: </label>
				<input
					type="text"
					value={enteredTask}
					onChange={taskChangeHandler}
				/>
			</div>

			<div className="new-task__actions">
				<button>Add Task</button>
			</div>
		</form>
	);
};

export default TaskForm;
