import React, { useState } from 'react';

import styles from './TaskItem.module.css';

const TaskItem = ({ task, onDeleteItem }) => {
	return (
		<li
			onClick={() => onDeleteItem(task.id)}
			className={styles['task-item']}
		>
			{task.statement}
		</li>
	);
};

export default TaskItem;
