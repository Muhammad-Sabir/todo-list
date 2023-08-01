import React from 'react';

import TaskForm from './TaskForm';

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
