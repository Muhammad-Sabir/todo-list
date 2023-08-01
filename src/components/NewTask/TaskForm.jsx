import React from 'react';

import './TaskForm.css';

const TaskForm = () => {
	return (
		<form>
			<div className="new-task__controls">
				<label>New task: </label>
				<input type="text" />
			</div>

			<div className="new-task__actions">
				<button>Add Task</button>
			</div>
		</form>
	);
};

export default TaskForm;
