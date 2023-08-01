import React from 'react';

import TaskForm from './TaskForm';

import './NewTask.css';

const NewTask = ({ onAddTask }) => {
	const onSubmitNewTaskHandler = (enteredTask) => {
		onAddTask(enteredTask);
	};

	return (
		<>
			<TaskForm onSubmitNewTask={onSubmitNewTaskHandler} />
		</>
	);
};

export default NewTask;
