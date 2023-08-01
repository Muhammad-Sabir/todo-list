import React from 'react';

import TaskForm from './TaskForm';

import styles from './NewTask.module.css';

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
